import { useEffect, useRef, useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { PomodoroTimer } from "./components/PomodoroTimer";
import { StopwatchTimer } from "./components/StopwatchTimer";

export const TimerControlPanel = ({ isPomodoroMode }) => {
  const [isClockStarted, setIsClockStarted] = useState(false);
  const [isClockPaused, setIsClockPaused] = useState(false);

  const isEditTime = false;
  return (
    <div className="flex-auto flex flex-col items-center overflow-hidden justify-center">
      <div className="flex flex-col items-center min-h-[500px] w-full">
        <div className="focus-mode">
          <button className="flex items-center group/focusBtn">
            <span className="text-sm text-[--text-gray-4] group-hover/focusBtn:text-[--text-gray-6]">
              Focus
            </span>
            <MdOutlineKeyboardArrowRight className="h-4 w-4 opacity-40 group-hover/focusBtn:opacity-60" />
          </button>
        </div>
        <div className="timer my-16 w-[360px] h-[360px] relative">
          {isPomodoroMode ? (
            <PomodoroTimer
              isClockPaused={isClockPaused}
              isClockStarted={isClockStarted}
            />
          ) : (
            <StopwatchTimer
              isClockStarted={isClockStarted}
              isClockPaused={isClockPaused}
            />
          )}
        </div>
        <div className="timer-controls flex-none flex flex-col items-center w-[170px] h-[112px]">
          {!isClockStarted && (
            <button
              onClick={() => setIsClockStarted(true)}
              className="w-full h-12 rounded-full text-[--primary-color] font-medium bg-[--secondary-color] hover:bg-[#6C8EFB] active:bg-[#3E60CD] ease-in duration-200"
            >
              Start
            </button>
          )}
          {isClockStarted && !isClockPaused && (
            <button
              onClick={() => setIsClockPaused(true)}
              className="w-full h-12 rounded-full text-[--secondary-color] font-medium bg-[--primary-color] hover:text-[#6C8EFB] hover:border-[#6C8EFB] active:text-[#3E60CD] active:border-[#3E60CD] ease-in duration-200 border border-[--secondary-color]"
            >
              Pause
            </button>
          )}
          {isClockStarted && isClockPaused && (
            <>
              <button
                onClick={() => {
                  setIsClockPaused(false);
                }}
                className="w-full h-12 rounded-full text-[--primary-color] font-medium bg-[--secondary-color] hover:bg-[#6C8EFB] active:bg-[#3E60CD] ease-in duration-200 mb-4"
              >
                Continue
              </button>
              <button
                onClick={() => {
                  setIsClockStarted(false);
                  setIsClockPaused(false);
                }}
                className="w-full h-12 rounded-full text-[--secondary-color] font-medium bg-[--primary-color] hover:text-[#6C8EFB] hover:border-[#6C8EFB] active:text-[#3E60CD] active:border-[#3E60CD] ease-in duration-200 border border-[--secondary-color]"
              >
                End
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
