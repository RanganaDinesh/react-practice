import React, { useState, useRef } from "react";

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  function start() {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setSeconds((seconds) => {
          if (seconds === 30) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            alert("Time's up! you have only 30 seconds");
            return seconds;
          } else {
            return seconds + 1;
          }
        });
      }, 1000);
    }
  }

  function pause() {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(true);
    }
  }

  function restart() {
    setSeconds(0);
    // clearInterval(intervalRef.current);
      setIsRunning(false);
      if (!isRunning) {
        setIsRunning(true);
        intervalRef.current = setInterval(() => {
          setSeconds((seconds) => {
            if (seconds === 30) {
              clearInterval(intervalRef.current);
              setIsRunning(false);
              alert("Time's up! you have only 30 seconds");
              return seconds;
            } else {
              return seconds + 1;
            }
          });
        }, 1000);
      }
  }

  return (
    <div id="stopwatch">
      <h1>{seconds}</h1>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={restart}>Restart</button>
    </div>
  );
}

export default Stopwatch;
