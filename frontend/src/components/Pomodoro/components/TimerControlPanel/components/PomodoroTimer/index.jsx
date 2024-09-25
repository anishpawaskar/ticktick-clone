import { useEffect, useRef, useState } from "react";

export const PomodoroTimer = ({ isClockPaused, isClockStarted }) => {
  const [pomodoroDuration, setPomodoroDuration] = useState(25);
  const [pomodoroSeconds, setPomodoroSeconds] = useState(0);

  const pomodoroDurationRef = useRef(25);
  const intervalRef = useRef(null);

  const isEditTime = false;

  useEffect(() => {
    if (isClockStarted && !isClockPaused) {
      intervalRef.current = setInterval(() => {
        setPomodoroSeconds((prevSeconds) => {
          if (prevSeconds === 0) {
            setPomodoroDuration((prevDuration) => prevDuration - 1);
            return 59;
          }
          return prevSeconds - 1;
        });
      }, 1000);
    }

    if (!isClockStarted) {
      setPomodoroDuration(pomodoroDurationRef.current);
      setPomodoroSeconds(0);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isClockStarted, isClockPaused]);

  return (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <svg width="360" height="360" viewBox="0 0 400 400">
          <circle
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
          {String(pomodoroDuration).padStart(2, "0")}:
          {String(pomodoroSeconds).padStart(2, "0")}
        </button>
        {isClockPaused && (
          <p className="text-base text-[--text-gray-6] absolute -bottom-[22px]">
            Paused
          </p>
        )}
        {isEditTime && (
          <div className="p-2.5 border w-[200px] rounded-md shadow-2xl bg-white absolute top-[70px]">
            <div className="flex items-center w-full">
              <input
                type="number"
                id="time"
                min={5}
                max={180}
                className="flex-1 w-full h-[24px] px-3 rounded text-sm border focus:border-[--secondary-color] focus:border-opacity-60 outline-none"
              />
              <label
                htmlFor="time"
                className="ml-2.5 min-w-10 text-sm flex-none"
              >
                Minutes
              </label>
            </div>
            <div className="flex items-center w-full mt-2.5">
              <button className="h-[24px] min-w-[60px] rounded text-[13px] leading-5 px-3 bg-transparent border flex-1 mr-2 hover:bg-[--light-white] active:bg-[#E8E8E8] ease-in duration-200">
                Cancel
              </button>
              <button className="h-[24px] min-w-[60px] rounded text-[13px] leading-5 px-3 bg-[--secondary-color] text-[--primary-color] flex-1 hover:bg-[#6C8EFB] active:bg-[#3E60CD] ease-in duration-200">
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
