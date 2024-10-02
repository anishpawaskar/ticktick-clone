import { useState } from "react";
import { PomodoroHeader } from "./components/PomodoroHeader";
import { TimerFormPopup } from "./components/TimerFormPopup";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, selectActiveModal } from "../Modal/modalSlice";
import { TimerControlPanel } from "./components/TimerControlPanel";
import { PomodoroStatsOverview } from "./components/PomodoroStatsOverview";

export const Pomodoro = () => {
  const [isPomodoroMode, setIsPomodoroMode] = useState(true);
  const { activeModal } = useSelector(selectActiveModal);
  const dispatch = useDispatch();

  return (
    <div className="flex w-full overflow-hidden">
      <div className="w-full flex flex-col">
        <PomodoroHeader
          isPomodoroMode={isPomodoroMode}
          setIsPomodoroMode={setIsPomodoroMode}
        />
        <TimerControlPanel isPomodoroMode={isPomodoroMode} />
      </div>
      {activeModal === "timeFormPopup" && <TimerFormPopup />}
      <div className="hidden lg:block w-[25%] min-w-[320px] h-full border-l overflow-auto">
        <PomodoroStatsOverview />
      </div>
      {(activeModal === "timeFormPopup" ||
        activeModal === "pomoMoreOptions") && (
        <div
          onClick={() => dispatch(closeModal())}
          className="absolute top-0 left-0 w-full h-full z-50"
        ></div>
      )}
    </div>
  );
};
