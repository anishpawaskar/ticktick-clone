import React, { useState } from "react";
import { LuListTree } from "react-icons/lu";
import { TbStack3 } from "react-icons/tb";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { TaskActionsBar } from "./components/TaskActionsBar";
import { DatePicker } from "../../../DatePicker";
import { formatDate } from "../../../utils/formatDate";

export const TasksListItem = ({ task }) => {
  const [isTaskAccordionOpen, setIsTaskAccordionOpen] = useState(false);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [isTaskActionBarVisible, setIsTaskActionBarVisible] = useState(false);

  const isTaskHasSubtasks = task.items?.length ? true : false;
  const isSelected = task.id === "1";
  const dueDate = formatDate(task.dueDate); //TODO: due date cross then show text red

  return (
    <React.Fragment key={task.id}>
      <li
        style={{ marginLeft: `${task.depth * 16}px` }}
        className="px-[26px] group/task"
      >
        <div
          className={`${isTaskHasSubtasks ? "pl-1" : "pl-4"} ${
            isSelected && "bg-[--light-white]"
          } flex items-center justify-between h-10 hover:bg-[#F7F7F7] rounded-md relative`}
        >
          <TbStack3 className="text-[--light-gray] opacity-40 absolute left-[-16px] top-[50%] translate-y-[-50%] hidden group-hover/task:block h-3 w-3 cursor-move" />
          <div className="h-full flex items-center">
            {isTaskHasSubtasks && (
              <button
                onClick={() =>
                  setIsTaskAccordionOpen((prevState) => !prevState)
                }
                className="text-[--text-gray] h-full group/accordionButton"
              >
                {isTaskAccordionOpen ? (
                  <MdOutlineKeyboardArrowDown className="opacity-40 group-hover/accordionButton:opacity-80 transition-all" />
                ) : (
                  <MdOutlineKeyboardArrowRight className="opacity-40 group-hover/accordionButton:opacity-80 transition-all" />
                )}
              </button>
            )}

            <input
              type="checkbox"
              name="complete-task"
              id="complete-task"
              className="mr-2 h-4 w-4"
            />
          </div>
          <p className="flex-auto text-sm text-[--text-gray]">{task.title}</p>
          <div className="flex items-center gap-1 mr-3">
            {isTaskHasSubtasks && (
              <LuListTree className="h-[14px] w-[14px] leading-5 text-[--icon-color] opacity-60" />
            )}
            {task.dueDate && (
              <div className="relative">
                <button
                  onClick={() => setIsDatePickerVisible(true)}
                  style={{ color: "#4772fa" }}
                  className="text-xs"
                >
                  {dueDate}
                </button>
                {isDatePickerVisible && (
                  <div className="absolute z-[150] right-[-16px] top-5">
                    <DatePicker dueDate={task.dueDate} />
                  </div>
                )}
              </div>
            )}
          </div>
          {!isSelected && (
            <div className="absolute h-[1px] left-[40px] bottom-0 w-[94%] bg-[--text-gray] opacity-10 visible group-hover/task:invisible"></div>
          )}
          <div className="relative">
            <button
              onClick={(e) => {
                setIsTaskActionBarVisible(true);
                console.log(
                  e.clientY > 420
                    ? "it should be at center"
                    : "keep it as it is"
                ); //TODO: Change position top of taskActionBar on Y axis based on client height
              }}
              className="absolute right-[-16px] top-[50%] translate-y-[-50%]"
            >
              <HiOutlineDotsHorizontal className="h-3 w-3 text-[--light-gray] opacity-40 hidden group-hover/task:block" />
            </button>
            {isTaskActionBarVisible && <TaskActionsBar />}
          </div>
        </div>
      </li>
      {isTaskHasSubtasks &&
        isTaskAccordionOpen &&
        task.items.map((task) => <TasksListItem task={task} key={task.id} />)}
      {(isDatePickerVisible || isTaskActionBarVisible) && (
        <div
          onClick={() => {
            setIsDatePickerVisible(false);
            setIsTaskActionBarVisible(false);
          }}
          className="w-full h-full absolute top-0 left-0 z-[100]"
        ></div>
      )}
    </React.Fragment>
  );
};
