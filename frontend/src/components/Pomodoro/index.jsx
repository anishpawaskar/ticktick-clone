import { useState } from "react";
import { PomodoroHeader } from "./components/PomodoroHeader";
import { TimerFormPopup } from "./components/PomodoroHeader/TimerFormPopup";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, selectActiveModal } from "../Modal/modalSlice";

export const Pomodoro = () => {
  const [isPomodoroMode, setIsPomodoroMode] = useState(true);
  const { activeModal } = useSelector(selectActiveModal);
  const dispatch = useDispatch();

  return (
    <div className="flex w-full">
      <div className="w-full">
        <PomodoroHeader
          isPomodoroMode={isPomodoroMode}
          setIsPomodoroMode={setIsPomodoroMode}
        />
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
