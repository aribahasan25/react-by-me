import React, { useState, useEffect, useRef, useMemo } from "react";

// --- AUDIO SYNTHESIS FUNCTIONS (HOOKS COMPLIANT) ---
// Pure function to play a completion chime
const playChimeTone = (volume) => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const now = ctx.currentTime;

    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const osc3 = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc1.type = "sine";
    osc1.frequency.setValueAtTime(523.25, now); // C5
    osc1.frequency.exponentialRampToValueAtTime(880.00, now + 0.15); // Slide to A5

    osc2.type = "sine";
    osc2.frequency.setValueAtTime(659.25, now); // E5
    osc2.frequency.exponentialRampToValueAtTime(1318.51, now + 0.2); // E6

    osc3.type = "triangle";
    osc3.frequency.setValueAtTime(261.63, now); // C4
    osc3.frequency.setValueAtTime(261.63, now + 0.5);

    gainNode.gain.setValueAtTime(volume, now);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + 1.8);

    osc1.connect(gainNode);
    osc2.connect(gainNode);
    osc3.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc1.start(now);
    osc2.start(now);
    osc3.start(now);

    osc1.stop(now + 1.8);
    osc2.stop(now + 1.8);
    osc3.stop(now + 1.8);
  } catch (e) {
    console.error("Audio error", e);
  }
};

// Pure function to play a single tick sound
const playTickTone = (volume) => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.type = "triangle";
    osc.frequency.setValueAtTime(900, now);
    osc.frequency.exponentialRampToValueAtTime(100, now + 0.04);

    gainNode.gain.setValueAtTime(volume * 0.15, now);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.05);
  } catch (e) {
    console.error("Audio error", e);
  }
};

export default function Clock() {
  // --- STATE HOOKS ---
  const [timerSettings, setTimerSettings] = useState(() => {
    const saved = localStorage.getItem("pomo_settings");
    return saved ? JSON.parse(saved) : { pomodoro: 25, shortBreak: 5, longBreak: 15 };
  });

  const [currentMode, setCurrentMode] = useState("pomodoro"); // pomodoro, shortBreak, longBreak
  const [timeLeft, setTimeLeft] = useState(timerSettings.pomodoro * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [accumulatedTime, setAccumulatedTime] = useState(0); // tracking focus time in seconds

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [ambientSound, setAmbientSound] = useState("none"); // none, brownian, drone, ticking
  const [volume, setVolume] = useState(0.4);

  const [stats, setStats] = useState(() => {
    const saved = localStorage.getItem("pomo_stats");
    return saved ? JSON.parse(saved) : { todayMinutes: 0, seedsPopped: 0, currentStreak: 0, lastActiveDate: "" };
  });

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("pomo_tasks");
    return saved ? JSON.parse(saved) : [
      { id: 1, title: "Design beautiful landing layout", completed: false, pomodoroCount: 1, targetPomodoros: 2 },
      { id: 2, title: "Review React state management", completed: true, pomodoroCount: 2, targetPomodoros: 2 },
      { id: 3, title: "Popping pomegranate seeds! 🍉", completed: false, pomodoroCount: 0, targetPomodoros: 1 },
    ];
  });

  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [activeTaskId, setActiveTaskId] = useState(1);

  // --- REFS ---
  const timerIntervalRef = useRef(null);
  const ambientAudioRef = useRef({ source: null, gainNode: null, ctx: null, tickingInterval: null });

  // --- SYNC EFFECTS ---
  useEffect(() => {
    localStorage.setItem("pomo_settings", JSON.stringify(timerSettings));
  }, [timerSettings]);

  useEffect(() => {
    localStorage.setItem("pomo_tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("pomo_stats", JSON.stringify(stats));
  }, [stats]);

  const totalSecondsForMode = useMemo(() => {
    if (currentMode === "pomodoro") return timerSettings.pomodoro * 60;
    if (currentMode === "shortBreak") return timerSettings.shortBreak * 60;
    return timerSettings.longBreak * 60;
  }, [currentMode, timerSettings]);

  // Mode change reset
  useEffect(() => {
    setIsRunning(false);
    setTimeLeft(totalSecondsForMode);
  }, [currentMode, totalSecondsForMode]);

  // --- AMBIENT FOCUS AUDIO HOOK ---
  useEffect(() => {
    const stopAmbient = () => {
      if (ambientAudioRef.current.source) {
        try {
          ambientAudioRef.current.source.stop();
        } catch (e) {}
        ambientAudioRef.current.source = null;
      }
      if (ambientAudioRef.current.tickingInterval) {
        clearInterval(ambientAudioRef.current.tickingInterval);
        ambientAudioRef.current.tickingInterval = null;
      }
      if (ambientAudioRef.current.ctx) {
        try {
          ambientAudioRef.current.ctx.close();
        } catch (e) {}
        ambientAudioRef.current.ctx = null;
      }
      ambientAudioRef.current.gainNode = null;
    };

    stopAmbient();

    if (isRunning && ambientSound !== "none") {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          const ctx = new AudioContext();
          ambientAudioRef.current.ctx = ctx;
          const now = ctx.currentTime;

          const gainNode = ctx.createGain();
          gainNode.gain.setValueAtTime(volume, now);
          gainNode.connect(ctx.destination);
          ambientAudioRef.current.gainNode = gainNode;

          if (ambientSound === "brownian") {
            const bufferSize = 2 * ctx.sampleRate;
            const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
            const output = noiseBuffer.getChannelData(0);
            let lastOut = 0.0;
            for (let i = 0; i < bufferSize; i++) {
              const white = Math.random() * 2 - 1;
              output[i] = (lastOut + 0.02 * white) / 1.02;
              lastOut = output[i];
              output[i] *= 3.5;
            }
            const source = ctx.createBufferSource();
            source.buffer = noiseBuffer;
            source.loop = true;
            source.connect(gainNode);
            source.start(0);
            ambientAudioRef.current.source = source;
          } else if (ambientSound === "drone") {
            const osc1 = ctx.createOscillator();
            const osc2 = ctx.createOscillator();
            osc1.type = "sine";
            osc1.frequency.setValueAtTime(90, now);
            osc2.type = "sine";
            osc2.frequency.setValueAtTime(90.5, now);

            const filter = ctx.createBiquadFilter();
            filter.type = "lowpass";
            filter.frequency.setValueAtTime(150, now);

            osc1.connect(filter);
            osc2.connect(filter);
            filter.connect(gainNode);

            osc1.start(0);
            osc2.start(0);

            ambientAudioRef.current.source = {
              stop: () => {
                try {
                  osc1.stop();
                  osc2.stop();
                } catch (e) {}
              }
            };
          } else if (ambientSound === "ticking") {
            playTickTone(volume);
            ambientAudioRef.current.tickingInterval = setInterval(() => {
              playTickTone(volume);
            }, 1000);
          }
        }
      } catch (e) {
        console.error("Ambient audio setup failed", e);
      }
    }

    return () => stopAmbient();
  }, [isRunning, ambientSound]);

  // Adjust volume ref
  useEffect(() => {
    if (ambientAudioRef.current.gainNode && ambientAudioRef.current.ctx) {
      ambientAudioRef.current.gainNode.gain.setValueAtTime(volume, ambientAudioRef.current.ctx.currentTime);
    }
  }, [volume]);

  // --- TIMER CALLBACKS ---
  const handleTimerComplete = useCallback(() => {
    setIsRunning(false);
    playChimeTone(volume);

    if (currentMode === "pomodoro") {
      setStats((prev) => ({
        ...prev,
        seedsPopped: prev.seedsPopped + 1,
      }));

      setTasks((prevTasks) =>
        prevTasks.map((t) =>
          t.id === activeTaskId ? { ...t, pomodoroCount: t.pomodoroCount + 1 } : t
        )
      );

      setCurrentMode("shortBreak");
    } else {
      setCurrentMode("pomodoro");
    }
  }, [volume, currentMode, activeTaskId]);

  const handleTimerCompleteRef = useRef(handleTimerComplete);
  useEffect(() => {
    handleTimerCompleteRef.current = handleTimerComplete;
  }, [handleTimerComplete]);

  // --- TIMER COUNTDOWN HOOK ---
  useEffect(() => {
    if (isRunning) {
      timerIntervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerIntervalRef.current);
            handleTimerCompleteRef.current();
            return 0;
          }
          if (currentMode === "pomodoro") {
            setAccumulatedTime((acc) => {
              const nextAcc = acc + 1;
              if (nextAcc >= 60) {
                const todayStr = new Date().toDateString();
                setStats((prevStats) => {
                  const isNewDay = prevStats.lastActiveDate !== todayStr;
                  const newStreak = isNewDay
                    ? (prevStats.lastActiveDate === new Date(Date.now() - 86400000).toDateString() ? prevStats.currentStreak + 1 : 1)
                    : prevStats.currentStreak;

                  return {
                    ...prevStats,
                    todayMinutes: isNewDay ? 1 : prevStats.todayMinutes + 1,
                    currentStreak: newStreak === 0 ? 1 : newStreak,
                    lastActiveDate: todayStr,
                  };
                });
                return 0;
              }
              return nextAcc;
            });
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerIntervalRef.current);
    }

    return () => clearInterval(timerIntervalRef.current);
  }, [isRunning, currentMode]);

  const handleSkip = () => {
    if (window.confirm("Skip current focus interval?")) {
      handleTimerComplete();
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(totalSecondsForMode);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // --- CHECKLIST HANDLERS ---
  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    const newTask = {
      id: Date.now(),
      title: newTaskTitle.trim(),
      completed: false,
      pomodoroCount: 0,
      targetPomodoros: 2,
    };
    setTasks([...tasks, newTask]);
    setActiveTaskId(newTask.id);
    setNewTaskTitle("");
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((t) => (t.id === taskId ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
    if (activeTaskId === taskId) {
      const remaining = tasks.filter((t) => t.id !== taskId);
      if (remaining.length > 0) {
        setActiveTaskId(remaining[0].id);
      }
    }
  };

  const activeTask = tasks.find((t) => t.id === activeTaskId);

  // Circular calculations
  const progressPercent = ((totalSecondsForMode - timeLeft) / totalSecondsForMode) * 100;
  const strokeDashoffset = 879.6 - (879.6 * progressPercent) / 100;

  // Render ruby seeds inside the pomegranate
  const renderGlisteningSeeds = () => {
    const totalSeeds = Math.min(stats.seedsPopped, 18);
    const seeds = [];
    
    // Outer seed ring
    for (let i = 0; i < 12; i++) {
      const angle = (i * 2 * Math.PI) / 12;
      const radius = 55;
      const x = 150 + radius * Math.cos(angle);
      const y = 155 + radius * Math.sin(angle);
      const isLit = i < totalSeeds;
      seeds.push(
        <circle
          key={`seed-outer-${i}`}
          cx={x}
          cy={y}
          r="6.5"
          className={`transition-all duration-700 ease-out cursor-pointer ${
            isLit
              ? "fill-rose-500 opacity-100 scale-110 drop-shadow-[0_0_8px_rgba(244,63,94,0.9)]"
              : "fill-rose-950/40 opacity-10 scale-95"
          }`}
          onClick={() => playTickTone(volume)}
        />
      );
    }
    
    // Inner seed ring
    for (let i = 0; i < 6; i++) {
      const angle = (i * 2 * Math.PI) / 6 + Math.PI / 6;
      const radius = 28;
      const x = 150 + radius * Math.cos(angle);
      const y = 155 + radius * Math.sin(angle);
      const isLit = i + 12 < totalSeeds;
      seeds.push(
        <path
          key={`seed-inner-${i}`}
          d={`M ${x-4} ${y+4} C ${x-4} ${y-4}, ${x+4} ${y-4}, ${x+4} ${y+4} Z`}
          className={`transition-all duration-700 ease-out cursor-pointer origin-center ${
            isLit
              ? "fill-rose-600 opacity-100 scale-110 drop-shadow-[0_0_6px_rgba(225,29,72,0.9)]"
              : "fill-rose-950/50 opacity-10 scale-90"
          }`}
          transform={`rotate(${(i * 60) + 30}, ${x}, ${y})`}
          onClick={() => playTickTone(volume)}
        />
      );
    }
    return seeds;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-start p-4 md:p-8 font-sans selection:bg-rose-500/30 selection:text-rose-200 relative overflow-hidden">
      
      {/* Decorative Blur Blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-rose-900/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-pink-900/10 blur-[100px] pointer-events-none" />

      {/* --- APP BAR --- */}
      <header className="w-full max-w-4xl flex items-center justify-between py-4 mb-6 border-b border-rose-950/30 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-600 to-rose-400 flex items-center justify-center shadow-lg shadow-rose-950/40">
            <span className="text-xl">🍅</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-wide bg-gradient-to-r from-rose-300 via-pink-200 to-rose-400 bg-clip-text text-transparent">
              PomoGranate
            </h1>
            <p className="text-[10px] text-rose-400/50 tracking-widest uppercase font-semibold">Seed Your Focus</p>
          </div>
        </div>

        <button
          onClick={() => setIsSettingsOpen(true)}
          className="p-2.5 rounded-xl bg-slate-900/60 border border-white/10 text-rose-300 hover:text-white hover:bg-rose-500/20 hover:border-rose-500/30 transition-all duration-300 cursor-pointer shadow-lg backdrop-blur-md"
          title="Custom Settings"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </header>

      {/* --- MAIN GRID LAYOUT --- */}
      <main className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative z-10">
        
        {/* LEFT COLUMN: TIMER & STATS (7 cols) */}
        <section className="md:col-span-7 flex flex-col items-center gap-6 w-full">
          
          {/* TIMER CARD */}
          <div className="w-full bg-slate-900/40 backdrop-blur-2xl border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col items-center shadow-xl relative overflow-hidden">
            {/* Glowing circle reflection overlay */}
            <div className={`absolute -top-16 -left-16 w-36 h-36 rounded-full filter blur-[60px] opacity-25 transition-colors duration-1000 ${
              currentMode === "pomodoro" ? "bg-rose-500" : currentMode === "shortBreak" ? "bg-pink-400" : "bg-amber-500"
            }`} />

            {/* Mode Selectors */}
            <nav className="flex bg-black/40 p-1 rounded-2xl border border-rose-950/20 w-full max-w-xs mb-8 relative z-10">
              {["pomodoro", "shortBreak", "longBreak"].map((mode) => (
                <button
                  key={mode}
                  onClick={() => setCurrentMode(mode)}
                  className={`flex-1 text-center py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                    currentMode === mode
                      ? "bg-gradient-to-r from-rose-600 to-rose-500 text-white shadow-md shadow-rose-950/50"
                      : "text-slate-400 hover:text-rose-300/80"
                  }`}
                >
                  {mode === "pomodoro" ? "Pomodoro" : mode === "shortBreak" ? "Short Break" : "Long Break"}
                </button>
              ))}
            </nav>

            {/* TIMER DIAL */}
            <div className="relative w-72 h-72 mb-8 select-none">
              <svg className="w-full h-full transform -rotate-90 drop-shadow-[0_0_20px_rgba(244,63,94,0.1)]" viewBox="0 0 300 300">
                <defs>
                  <radialGradient id="pomoInside" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#1e0409" />
                    <stop offset="85%" stopColor="#100205" />
                    <stop offset="100%" stopColor="#080002" />
                  </radialGradient>
                  <linearGradient id="pomoSkin" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f43f5e" />
                    <stop offset="50%" stopColor="#e11d48" />
                    <stop offset="100%" stopColor="#9f1239" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Inner plate */}
                <circle cx="150" cy="155" r="140" fill="url(#pomoInside)" stroke="#881337" strokeWidth="1" className="opacity-40" />

                {/* Stylized Pomegranate Crown */}
                <path
                  d="M 155 15 L 168 5 L 158 0 L 150 7 L 142 0 L 132 5 L 145 15 Z"
                  fill="url(#pomoSkin)"
                  transform="rotate(90, 150, 155)"
                  className="opacity-90 drop-shadow-[0_0_4px_rgba(244,63,94,0.4)]"
                />

                {/* Background Ring Track */}
                <circle
                  cx="150"
                  cy="155"
                  r="140"
                  fill="transparent"
                  stroke="#310c14"
                  strokeWidth="6"
                  className="opacity-70"
                />

                {/* Progress Ring */}
                <circle
                  cx="150"
                  cy="155"
                  r="140"
                  fill="transparent"
                  stroke="url(#pomoSkin)"
                  strokeWidth="7"
                  strokeDasharray="879.6"
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  className="transition-all duration-300 ease-out"
                  filter="url(#glow)"
                />

                <circle cx="150" cy="155" r="132" fill="transparent" stroke="#fda4af" strokeWidth="0.75" strokeDasharray="3,10" className="opacity-20" />

                {/* Seed Segment Carpels */}
                <path d="M 150 155 L 150 35" stroke="#fecdd3" strokeWidth="1" className="opacity-5" />
                <path d="M 150 155 L 45 210" stroke="#fecdd3" strokeWidth="1" className="opacity-5" />
                <path d="M 150 155 L 255 210" stroke="#fecdd3" strokeWidth="1" className="opacity-5" />

                {/* Glistening Ruby Seeds */}
                {renderGlisteningSeeds()}
              </svg>

              {/* Central text overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center mt-3">
                <span className="text-5xl font-mono font-bold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  {formatTime(timeLeft)}
                </span>
                
                <span className={`text-[9px] uppercase font-mono tracking-widest font-bold px-2 py-0.5 rounded-full mt-2 border ${
                  currentMode === "pomodoro"
                    ? "bg-rose-950/50 text-rose-400 border-rose-800/40"
                    : "bg-pink-950/50 text-pink-300 border-pink-800/40"
                }`}>
                  {currentMode === "pomodoro" ? "Focus Interval" : "Rest Period"}
                </span>
              </div>
            </div>

            {/* TIMER CONTROLS */}
            <div className="flex items-center gap-5 relative z-10">
              <button
                onClick={handleReset}
                className="p-3 rounded-full bg-black/30 border border-white/5 text-slate-400 hover:text-white hover:bg-slate-900 hover:border-slate-800 active:scale-95 transition-all duration-300 cursor-pointer shadow-md"
                title="Reset Timer"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 15.07M20 8l-4 4h8" />
                </svg>
              </button>

              <button
                onClick={() => setIsRunning(!isRunning)}
                className={`py-3.5 px-8 rounded-2xl font-bold tracking-wide transition-all duration-300 transform cursor-pointer shadow-lg shadow-rose-950/20 active:scale-95 text-sm ${
                  isRunning
                    ? "bg-white text-slate-950 hover:bg-slate-100 scale-105"
                    : "bg-gradient-to-r from-rose-600 to-rose-500 text-white hover:shadow-rose-600/30"
                }`}
              >
                {isRunning ? "PAUSE INTERVAL" : "START FOCUSING"}
              </button>

              <button
                onClick={handleSkip}
                className="p-3 rounded-full bg-black/30 border border-white/5 text-slate-400 hover:text-white hover:bg-slate-900 hover:border-slate-800 active:scale-95 transition-all duration-300 cursor-pointer shadow-md"
                title="Skip Session"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Objective indicator */}
            {activeTask && (
              <div className="mt-8 px-4 py-2.5 bg-rose-950/10 border border-rose-900/20 rounded-2xl text-center w-full max-w-xs">
                <span className="text-rose-400/50 text-[10px] uppercase font-mono tracking-wider">Active Target:</span>
                <p className="text-rose-100 font-semibold truncate text-sm mt-0.5">{activeTask.title}</p>
                <div className="flex justify-center gap-1.5 mt-2">
                  {Array.from({ length: activeTask.targetPomodoros }).map((_, idx) => (
                    <span
                      key={`active-task-seed-${idx}`}
                      className={`inline-block w-2 h-2 rounded-full ${
                        idx < activeTask.pomodoroCount ? "bg-rose-500 shadow-[0_0_6px_#f43f5e]" : "bg-stone-800"
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* FOCUS METRICS CARD */}
          <div className="w-full bg-slate-900/30 border border-white/5 rounded-3xl p-5 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-rose-900/5 blur-2xl pointer-events-none" />
            <h3 className="text-xs font-mono tracking-widest text-rose-400/60 mb-4 font-bold uppercase">📊 Seeding Statistics</h3>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-black/30 p-3 rounded-2xl border border-rose-950/20 hover:border-rose-900/30 transition-all duration-300">
                <span className="block text-2xl font-bold font-mono text-rose-400">{stats.todayMinutes}m</span>
                <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Focus Today</span>
              </div>
              <div className="bg-black/30 p-3 rounded-2xl border border-rose-950/20 hover:border-rose-900/30 transition-all duration-300">
                <span className="block text-2xl font-bold font-mono text-rose-400">✨ {stats.seedsPopped}</span>
                <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Total Seeds</span>
              </div>
              <div className="bg-black/30 p-3 rounded-2xl border border-rose-950/20 hover:border-rose-900/30 transition-all duration-300">
                <span className="block text-2xl font-bold font-mono text-rose-400">🔥 {stats.currentStreak}</span>
                <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Day Streak</span>
              </div>
            </div>
          </div>
        </section>

        {/* RIGHT COLUMN: SEED CHECKLIST & SOUND BOARD (5 cols) */}
        <section className="md:col-span-5 flex flex-col gap-6 w-full">
          
          {/* TASK CHECKLIST BOARD */}
          <div className="bg-slate-900/40 backdrop-blur-2xl border border-white/5 rounded-3xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-rose-950/20">
              <h3 className="text-sm font-bold text-rose-200 uppercase tracking-wider font-mono flex items-center gap-2">
                <span>📋</span> Seed Targets
              </h3>
              <span className="text-[10px] font-mono bg-rose-950/30 text-rose-400 px-2.5 py-0.5 rounded-full border border-rose-900/30 font-bold">
                {tasks.filter((t) => t.completed).length}/{tasks.length} Done
              </span>
            </div>

            {/* Add Task Form */}
            <form onSubmit={handleAddTask} className="flex gap-2 mb-4">
              <input
                type="text"
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                placeholder="Name a new target..."
                className="flex-1 bg-black/40 border border-rose-950/40 rounded-2xl px-4 py-2.5 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-rose-500 transition-all"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-rose-600 to-rose-500 hover:brightness-110 text-xs font-bold text-white transition-all cursor-pointer shadow-md shadow-rose-950/40"
              >
                Grow
              </button>
            </form>

            {/* Task list items */}
            <div className="space-y-2.5 max-h-[290px] overflow-y-auto pr-1 scrollbar-thin">
              {tasks.length === 0 ? (
                <div className="text-center py-8 text-slate-500 text-xs font-mono">
                  All clean! Create a target to begin focus.
                </div>
              ) : (
                tasks.map((task) => (
                  <div
                    key={task.id}
                    className={`flex items-center justify-between p-3 rounded-2xl border transition-all duration-300 ${
                      activeTaskId === task.id
                        ? "bg-rose-950/15 border-rose-800/40"
                        : "bg-black/20 border-white/5 hover:border-rose-950/30"
                    }`}
                  >
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <button
                        type="button"
                        onClick={() => toggleTaskCompletion(task.id)}
                        className={`w-5 h-5 rounded-lg flex items-center justify-center border transition-all cursor-pointer ${
                          task.completed
                            ? "bg-rose-600 border-rose-500 text-white"
                            : "border-slate-700 hover:border-rose-500"
                        }`}
                      >
                        {task.completed && (
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>
                      
                      <div
                        onClick={() => setActiveTaskId(task.id)}
                        className="flex-1 cursor-pointer min-w-0"
                      >
                        <p className={`text-xs truncate font-medium tracking-wide ${
                          task.completed ? "line-through text-slate-500" : "text-slate-200"
                        }`}>
                          {task.title}
                        </p>
                        
                        {/* Seed status markers */}
                        <div className="flex items-center gap-1.5 mt-1 font-mono text-[9px] text-slate-400">
                          <span>Target:</span>
                          <div className="flex gap-0.5">
                            {Array.from({ length: task.targetPomodoros }).map((_, idx) => (
                              <span
                                key={`seed-${task.id}-${idx}`}
                                className={`w-1.5 h-1.5 rounded-full ${
                                  idx < task.pomodoroCount ? "bg-rose-500" : "bg-stone-800"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => deleteTask(task.id)}
                      className="p-1 text-slate-500 hover:text-rose-400 transition-colors ml-2 cursor-pointer"
                      title="Remove Target"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* FOCUS SOUND MODULE */}
          <div className="bg-slate-900/40 backdrop-blur-2xl border border-white/5 rounded-3xl p-6 shadow-xl">
            <h3 className="text-sm font-bold text-rose-200 uppercase tracking-wider font-mono flex items-center gap-2 mb-4 pb-3 border-b border-rose-950/20">
              <span>🔊</span> Ambient Soundscape
            </h3>

            <div className="grid grid-cols-2 gap-2 mb-4">
              {[
                { id: "none", name: "Silent 🔇" },
                { id: "brownian", name: "Rain 🌧️" },
                { id: "drone", name: "Cosmic 🌌" },
                { id: "ticking", name: "Ticking ⏰" },
              ].map((sound) => (
                <button
                  key={sound.id}
                  onClick={() => setAmbientSound(sound.id)}
                  className={`py-2.5 px-3 rounded-2xl border text-xs font-mono transition-all duration-300 cursor-pointer ${
                    ambientSound === sound.id
                      ? "bg-rose-950/20 border-rose-500 text-rose-300 shadow-md shadow-rose-950/30"
                      : "bg-black/30 border-white/5 text-slate-400 hover:text-slate-200 hover:bg-slate-800/30"
                  }`}
                >
                  {sound.name}
                </button>
              ))}
            </div>

            {/* Level slider */}
            <div>
              <div className="flex justify-between items-center text-[10px] text-slate-500 uppercase tracking-wide font-semibold mb-2">
                <span>Sound Level</span>
                <span className="font-mono text-rose-400">{Math.round(volume * 100)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-full accent-rose-500 bg-slate-900 h-1 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>

        </section>

      </main>

      {/* --- SETTINGS DRAWER OVERLAY --- */}
      {isSettingsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300">
          <div className="bg-[#0b0305] border border-rose-950/60 rounded-3xl p-6 w-full max-w-sm shadow-2xl relative animate-in fade-in zoom-in-95 duration-150">
            
            <div className="flex items-center justify-between pb-3 border-b border-rose-950/30 mb-5">
              <h3 className="text-base font-bold text-rose-100 uppercase tracking-wider font-mono flex items-center gap-2">
                <span>⚙️</span> Configuration
              </h3>
              <button
                onClick={() => setIsSettingsOpen(false)}
                className="p-1 rounded-full text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wide">Focus Minutes</label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="1"
                    max="60"
                    value={timerSettings.pomodoro}
                    onChange={(e) => {
                      const newTime = parseInt(e.target.value);
                      setTimerSettings({ ...timerSettings, pomodoro: newTime });
                      if (currentMode === "pomodoro") setTimeLeft(newTime * 60);
                    }}
                    className="flex-1 accent-rose-500 cursor-pointer"
                  />
                  <span className="text-xs font-mono font-bold w-10 text-right text-rose-300">{timerSettings.pomodoro}m</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wide">Short Break Minutes</label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={timerSettings.shortBreak}
                    onChange={(e) => {
                      const newTime = parseInt(e.target.value);
                      setTimerSettings({ ...timerSettings, shortBreak: newTime });
                      if (currentMode === "shortBreak") setTimeLeft(newTime * 60);
                    }}
                    className="flex-1 accent-rose-500 cursor-pointer"
                  />
                  <span className="text-xs font-mono font-bold w-10 text-right text-rose-300">{timerSettings.shortBreak}m</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wide">Long Break Minutes</label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="1"
                    max="45"
                    value={timerSettings.longBreak}
                    onChange={(e) => {
                      const newTime = parseInt(e.target.value);
                      setTimerSettings({ ...timerSettings, longBreak: newTime });
                      if (currentMode === "longBreak") setTimeLeft(newTime * 60);
                    }}
                    className="flex-1 accent-rose-500 cursor-pointer"
                  />
                  <span className="text-xs font-mono font-bold w-10 text-right text-rose-300">{timerSettings.longBreak}m</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => {
                  if (window.confirm("Restore factory defaults?")) {
                    setTimerSettings({ pomodoro: 25, shortBreak: 5, longBreak: 15 });
                    if (currentMode === "pomodoro") setTimeLeft(25 * 60);
                    if (currentMode === "shortBreak") setTimeLeft(5 * 60);
                    if (currentMode === "longBreak") setTimeLeft(15 * 60);
                  }
                }}
                className="flex-1 py-2 px-3 border border-rose-950 text-xs font-mono text-rose-400 rounded-xl hover:bg-rose-950/20 transition-all cursor-pointer"
              >
                Reset
              </button>
              <button
                onClick={() => setIsSettingsOpen(false)}
                className="flex-1 py-2 px-3 bg-gradient-to-r from-rose-600 to-rose-500 hover:brightness-110 text-xs font-bold text-white rounded-xl transition-all shadow-md cursor-pointer"
              >
                Apply
              </button>
            </div>

          </div>
        </div>
      )}

      {/* --- FOOTER BANNER --- */}
      <footer className="w-full max-w-4xl text-center py-6 mt-12 border-t border-rose-950/20 text-xs text-slate-500 font-mono relative z-10">
        <p>Made with 🍅 and React + Tailwind CSS</p>
        <p className="mt-1">Grow your focus seeds, one pomodoro at a time.</p>
      </footer>

    </div>
  );
}