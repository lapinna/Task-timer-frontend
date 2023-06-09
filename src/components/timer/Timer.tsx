import { useEffect, useState } from "react";
import styles from "./Timer.module.scss";

const Timer = () => {
  const [time, setTime] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);
  const [submitTime, setSubmitTime] = useState<number>(0);

  useEffect(() => {
    let interval: any
    if (running) {
      interval = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(interval);
  }, [running, time]);

  const hours = Math.floor(time / 360000);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const milliseconds = time % 100;

  const startAndStop = () => {
    setRunning(!running);
  };

  const reset = () => {
    setTime(0);
    setSubmitTime(time);
  };

  return (
    <div className={styles.timerContainer}>
      {submitTime ? (<p>{submitTime}</p>) : (
        <span className={styles.timerTime}>
          {hours}:{minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}:
          {milliseconds.toString().padStart(2, "0")}
        </span>
      )}
      <div className={styles.timerButtons}>
        {submitTime ? (
          <div>
            <button onClick={() => !submitTime}>Update</button>
            <button>Delete</button>
          </div>
        ) : (
          <div>
            <button onClick={startAndStop}>
              {running ? "Pause" : "Start"}
            </button>
            <button onClick={reset}>Finish</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Timer;