import { useState, useEffect, useRef } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  const intervalRef = useRef(null);

  function StartTimer() {
    setIsRunning(true);
  }

  function StopTimer() {
    setIsRunning(false);
  }

  function ResetTimer() {
    setSeconds(0);
    setIsRunning(false);
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  }

  function handleLap() {
    const currentLap = formatTime(seconds);
    setLaps([...laps, currentLap]);
  }

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((oldSeconds) => oldSeconds + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">

        <h1 className="text-center text-6xl font-bold text-gray-800 tracking-wider mb-8">
          {formatTime(seconds)}
        </h1>

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={StartTimer}
            className="bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition"
          >
            Start
          </button>

          <button
            onClick={StopTimer}
            className="bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition"
          >
            Stop
          </button>

          <button
            onClick={ResetTimer}
            className="bg-gray-700 hover:bg-gray-800 text-white py-3 rounded-xl font-semibold transition"
          >
            Reset
          </button>

          <button
            onClick={handleLap}
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-semibold transition"
          >
            Lap
          </button>
        </div>


        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-700 mb-3">
            Lap Records
          </h2>

          <div className="space-y-2 max-h-60 overflow-y-auto">
            {laps.length === 0 ? (
              <p className="text-gray-400 text-center">
                No laps yet
              </p>
            ) : (
              laps.map((lap, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-gray-100 rounded-lg px-4 py-3"
                >
                  <span className="font-medium">
                    Lap {index + 1}
                  </span>

                  <span className="text-blue-600 font-bold">
                    {lap}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Timer;