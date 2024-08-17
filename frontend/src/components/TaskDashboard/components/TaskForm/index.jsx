import { VscCalendar } from "react-icons/vsc";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useRef, useState } from "react";
import {
  iconsForTaskFormFilters,
  priorityIcons,
  TASK_FORM_FILTERS,
  TASK_PRIORITY,
} from "./taskForm.constant";
import { Modal } from "../../../Modal";
import { useDispatch, useSelector } from "react-redux";
import { selectActiveModal, toggleModal } from "../../../Modal/modalSlice";

export const TaskForm = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);

  const { activeModal } = useSelector(selectActiveModal);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        background: isInputFocused ? "#fff" : "#F7F7F7",
        border: isInputFocused ? "1px solid #4772fa" : "none",
      }}
      onClick={() => {
        setIsInputFocused(true);
      }}
      className="w-full h-10 rounded-md relative"
    >
      <input
        onKeyDown={(e) => {
          console.log(e.key); //TODO: Show details TaskForm when User press shift + enter
        }}
        onBlur={() => {
          setIsInputFocused(false); //TODO: figure out alternate way to setInputFoucsed off when click outside of input box
        }}
        placeholder="+ Add task"
        className="w-full h-full placeholder:text-sm placeholder:font-medium outline-none rounded-md bg-transparent px-4 text-sm"
      />
      {isInputFocused && (
        <div className="h-7 flex absolute right-2 top-1.5 z-30">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsInputFocused(true);
            }}
            className="h-full w-7 rounded-md flex items-center justify-center hover:bg-[#F3F3F3]"
          >
            <VscCalendar />
          </button>
          <Modal>
            <button
              onClick={() => dispatch(toggleModal("taskFormFilter"))}
              className="h-full w-7 rounded-md flex items-center justify-center hover:bg-[#F3F3F3] relative"
            >
              <MdKeyboardArrowDown />
              {activeModal === "taskFormFilter" && (
                <div className="bg-white w-[170px] shadow-2xl rounded-md absolute bottom-[-195px] right-[-130px] border border-[#191919] border-opacity-10 z-100">
                  <div className="flex flex-col gap-2 p-4">
                    <p className="text-xs text-[#191919] text-left">Priority</p>
                    <div className="flex justify-between">
                      {TASK_PRIORITY.map((priority) => {
                        const IconComponent = priorityIcons[priority.icon];

                        return (
                          <button className="h-8 w-7 flex items-center justify-center rounded hover:bg-[#F3F3F3]">
                            <IconComponent
                              style={{ color: priority.color }}
                              className="text-2xl"
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <hr />
                  <ul className="flex flex-col my-1">
                    {TASK_FORM_FILTERS.map((item) => {
                      const IconComponent = iconsForTaskFormFilters[item.icon];
                      return (
                        <li className="h-8 w-full px-1" key={item.id}>
                          <button className="w-full h-full hover:bg-[#F3F3F3] rounded-[5px] flex items-center justify-between text-sm px-2 py-4">
                            <span className="flex items-center gap-2 text-xs">
                              <IconComponent className="text-sm" />
                              {item.name}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </button>
          </Modal>
        </div>
      )}
    </div>
  );
};
