import { useEffect, useState } from "react";

function Alarm() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [alarmTime, setAlarmTime] = useState("");
  const [isAlarmTriggered, setIsAlarmTriggered] = useState(false);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

                          
  useEffect(() => { 
    const current = currentTime.toTimeString().slice(0, 5);

        
    if (
      alarmTime &&
      current === alarmTime &&
      !isAlarmTriggered
    ) {
      setIsAlarmTriggered(true);

    const audio = new Audio("/mixkit-classic-alarm-995.wav");
      audio.play();
    }

    if (current !== alarmTime) {
      setIsAlarmTriggered(false);
    }
  }, [currentTime, alarmTime, isAlarmTriggered]);

  return (
    <div>
      <h2>{currentTime.toLocaleTimeString()}</h2>

      <input type="time" value={alarmTime} onChange={(e) => setAlarmTime(e.target.value)}
      />
    </div>
  );
}

export default Alarm;