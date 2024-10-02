import { useEffect, useRef, useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { PomodoroTimer } from "./components/PomodoroTimer";
import { StopwatchTimer } from "./components/StopwatchTimer";

export const TimerControlPanel = ({ isPomodoroMode }) => {
  const [isClockStarted, setIsClockStarted] = useState(false);
  const [isClockPaused, setIsClockPaused] = useState(false);
  const [timerSize, setTimerSize] = useState({
    width: 360,
    height: 360,
    textSize: 54,
    lineHeight: 65,
    btnSize: 170,
  });

  useEffect(() => {
    const handleTimerSize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth < 950 && windowWidth > 720) {
        setTimerSize({
          width: 320,
          height: 320,
          textSize: 49,
          lineHeight: 59,
          btnSize: 150,
        });
      } else if (windowWidth < 720) {
        //TODO: there are many resizeable which can done later
        const newSize = 260 + ((windowWidth - 600) / (720 - 600)) * (320 - 260);
        const newTextSize =
          40 + ((windowWidth - 600) / (720 - 600)) * (49 - 40);
        const newLineHeight =
          48 + ((windowWidth - 600) / (720 - 600)) * (59 - 48);
        const newBtnSize =
          140 + ((windowWidth - 600) / (720 - 600)) * (150 - 140);
        const newMargin = 40 + (720 - windowWidth) * 0.2381;
        console.log(newMargin);

        setTimerSize({
          width: Math.max(newSize, 260),
          height: Math.max(newSize, 260),
          textSize: Math.max(newTextSize, 40),
          lineHeight: Math.max(newLineHeight, 48),
          btnSize: Math.max(newBtnSize, 140),
        });
      }
    };

    window.addEventListener("resize", handleTimerSize);

    handleTimerSize();
    return () => {
      window.removeEventListener("resize", handleTimerSize);
    };
  }, []);

  const isEditTime = false;
  return (
    <div className="flex-auto flex flex-col items-center justify-center">
      <div className="flex flex-col items-center min-h-[500px] w-full">
        <div className="focus-mode">
          <button className="flex items-center group/focusBtn">
            <span className="text-sm text-[--text-gray-4] group-hover/focusBtn:text-[--text-gray-6]">
              Focus
            </span>
            <MdOutlineKeyboardArrowRight className="h-4 w-4 opacity-40 group-hover/focusBtn:opacity-60" />
          </button>
        </div>
        <div
          style={{ width: timerSize.width, height: timerSize.height }}
          className="timer my-16 w-[360px] h-[360px] relative"
        >
          {isPomodoroMode ? (
            <PomodoroTimer
              width={timerSize.width}
              height={timerSize.height}
              clockTextSize={timerSize.textSize}
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
        <div
          style={{ width: timerSize.btnSize }}
          className="timer-controls flex-none flex flex-col items-center w-[170px] h-[112px]"
        >
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
