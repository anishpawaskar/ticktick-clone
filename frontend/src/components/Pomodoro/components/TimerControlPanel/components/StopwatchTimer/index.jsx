import { useEffect, useRef, useState } from "react";

export const StopwatchTimer = ({ isClockPaused, isClockStarted }) => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const intervalRef = useRef(null);

  useEffect(() => {
    if (isClockStarted && !isClockPaused) {
      intervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds < 59) {
            return prevSeconds + 1;
          } else {
            setMinutes((prevMinutes) => prevMinutes + 1);
            return 0;
          }
        });
      }, 1000);
    }

    if (!isClockStarted) {
      setMinutes(0);
      setSeconds(0);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isClockStarted, isClockPaused]);

  const timerMinutes = String(minutes).padStart(2, "0");
  const timerSeconds = String(seconds).padStart(2, "0");

  return (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <svg width="360" height="360" viewBox="0 0 400 400">
          <circle
            //TODO: change circle for stopwatch
            stroke="rgba(25, 25, 25, 0.1)"
            cx="200"
            cy="200"
            r="196"
            strokeWidth="8"
            fill="none"
          ></circle>
          <circle
            cx="200"
            cy="200"
            r="196"
            strokeWidth="8"
            fill="none"
            transform="rotate(-90 200 200)"
            strokeDasharray="1240"
            strokeLinecap="round"
            style={{ strokeDashoffset: "1240.5" }}
            className="stroke-[--secondary-color]"
          ></circle>
        </svg>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-[--text-gray]">
        <button className="text-[54px] leading-[65px]">
          {timerMinutes}:{timerSeconds}
        </button>
        {isClockPaused && (
          <p className="text-base text-[--text-gray-6] absolute -bottom-[22px]">
            Paused
          </p>
        )}
      </div>
    </>
  );
};
