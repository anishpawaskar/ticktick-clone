import { useState } from "react";
import { LuListTree } from "react-icons/lu";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { formatDate } from "../../../utils/formatDate";
import { TaskMarkdownController } from "../../../TaskMarkdownController";
import { DatePicker } from "../../../DatePicker";

export const TaskList = ({
  task,
  selectedTask,
  dispatch,
  getSelectedTask,
  screenSize,
}) => {
  const [isTasksAccordianOpen, setIsTaskAccordianOpen] = useState(false);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  const date = formatDate(task.startDate);

  return (
    <>
      <li
        onClick={() => {
          dispatch(getSelectedTask(task.id));
        }}
        style={{ marginLeft: `${task.depth * 16}px` }}
        key={task.id}
        className="flex items-center justify-between h-10 px-4 border-b hover:bg-[#F7F7F7] hover:border-none rounded-md relative"
      >
        <div className="flex items-center gap-2">
          {task.items && (
            <button
              onClick={() => {
                setIsTaskAccordianOpen((prevState) => !prevState);
              }}
              className="absolute left-0"
            >
              {isTasksAccordianOpen ? (
                <MdKeyboardArrowDown />
              ) : (
                <MdKeyboardArrowRight />
              )}
            </button>
          )}
          <input type="checkbox" className="h-4 w-4 cursor-pointer" />
          <p className="text-sm">{task.title}</p>
        </div>
        <div className="flex items-center gap-1">
          {task?.items?.length > 0 && (
            <LuListTree className="text-xs text-[--icon-color]" />
          )}
          {task?.startDate && (
            <div className="relative">
              <button
                onClick={() => setIsDatePickerVisible(true)}
                style={{ color: "#4772fa" }}
                className="text-xs"
              >
                {date}
              </button>
              {isDatePickerVisible && (
                <div className="absolute z-[150] right-[-16px] top-5">
                  <DatePicker />
                </div>
              )}
            </div>
          )}
        </div>
      </li>
      {task.items &&
        isTasksAccordianOpen &&
        task.items.map((task) => <TaskList task={task} key={task.id} />)}
      {selectedTask === task.id && screenSize.width < 950 && (
        <TaskMarkdownController />
      )}
      {isDatePickerVisible && (
        <div
          onClick={() => setIsDatePickerVisible(false)}
          className="w-full h-full absolute top-0 left-0 z-[100]"
        ></div>
      )}
    </>
  );
};
