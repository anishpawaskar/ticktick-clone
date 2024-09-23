import { IoAddOutline } from "react-icons/io5";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

import { useDispatch, useSelector } from "react-redux";
import { selectActiveModal, toggleModal } from "../../../Modal/modalSlice";
import { POMO_MORE_OPTIONS } from "../../pomodoro.constant";

export const PomodoroHeader = ({ isPomodoroMode, setIsPomodoroMode }) => {
  const dispatch = useDispatch();
  const { activeModal } = useSelector(selectActiveModal);

  return (
    <header className="px-5 py-4 mt-1 flex items-center justify-between">
      <h3 className="text-xl font-semibold text-[--text-gray]">Pomodoro</h3>
      <div className="flex gap-1.5 items-center">
        <button
          onClick={() => setIsPomodoroMode(true)}
          className={`h-[30px] px-4 flex items-center text-sm leading-[30px] ${
            isPomodoroMode
              ? "bg-[--light-secondary-color] text-[--secondary-color]"
              : "bg-[--light-white] text-[--text-gray-4] hover:text-[--secondary-color]"
          } rounded-full`}
        >
          Pomo
        </button>
        <button
          onClick={() => setIsPomodoroMode(false)}
          className={`h-[30px] px-4 flex items-center text-sm leading-[30px] ${
            !isPomodoroMode
              ? "bg-[--light-secondary-color] text-[--secondary-color]"
              : "bg-[--light-white] text-[--text-gray-4] hover:text-[--secondary-color]"
          }   rounded-full`}
        >
          Stopwatch
        </button>
      </div>
      <div className="flex gap-1.5 items-center relative">
        <button
          onClick={() => dispatch(toggleModal("timeFormPopup"))}
          className="p-[2px] rounded hover:bg-[--light-white] relative z-[60]"
        >
          <IoAddOutline className="h-6 w-6 text-[--icon-color] opacity-60" />
        </button>
        <button
          onClick={() => dispatch(toggleModal("pomoMoreOptions"))}
          className="p-1 rounded hover:bg-[--light-white] relative z-[60]"
        >
          <HiOutlineDotsHorizontal className="h-5 w-5 text-[--icon-color] opacity-60" />
        </button>
        {activeModal === "pomoMoreOptions" && (
          <ul className="absolute right-0 top-[30px] z-[60] bg-white rounded-md shadow-2xl border py-1">
            {POMO_MORE_OPTIONS.map((option) => {
              const IconComponent = option.icon;
              //TODO: create statics page for statistic action and focus form modal
              return (
                <li key={option.id} className="mx-1">
                  <button className="w-full flex items-center h-[34px] pr-1.5 pl-3 min-w-[154px] max-w-[244px] text-[13px] leading-5 text-[--text-gray] rounded hover:bg-[--light-white]">
                    <IconComponent className="w-4 h-4 opacity-60 mr-2" />
                    <span className="flex-auto truncate text-left">
                      {option.name}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </header>
  );
};
