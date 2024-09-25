import { useState } from "react";
import { PomodoroHeader } from "./components/PomodoroHeader";
import { TimerFormPopup } from "./components/TimerFormPopup";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, selectActiveModal } from "../Modal/modalSlice";
import { TimerControlPanel } from "./components/TimerControlPanel";

export const Pomodoro = () => {
  const [isPomodoroMode, setIsPomodoroMode] = useState(true);
  const { activeModal } = useSelector(selectActiveModal);
  const dispatch = useDispatch();

  return (
    <div className="flex w-full">
      <div className="w-full flex flex-col">
        <PomodoroHeader
          isPomodoroMode={isPomodoroMode}
          setIsPomodoroMode={setIsPomodoroMode}
        />
        <TimerControlPanel />
      </div>
      {activeModal === "timeFormPopup" && <TimerFormPopup />}
      <div className="w-[25%] h-full bg-red-400"></div>
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
