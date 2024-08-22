import { useState } from "react";
import { LuListTree } from "react-icons/lu";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { formatDate } from "../../../utils/formatDate";
import { TaskMarkdownController } from "../../../TaskMarkdownController";
import { useGetScreenSize } from "../../../../cusstomHooks/useGetScreeeSize";

export const TaskList = ({ task, selectedTask, dispatch, getSelectedTask }) => {
  const [isTasksAccordianOpen, setIsTaskAccordianOpen] = useState(false);
  const [screenSize] = useGetScreenSize();
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
            <p style={{ color: "#4772fa" }} className="text-xs">
              {date}
            </p>
          )}
        </div>
      </li>
      {task.items &&
        isTasksAccordianOpen &&
        task.items.map((task) => <TaskList task={task} key={task.id} />)}
      {selectedTask === task.id && screenSize.width < 950 && (
        <TaskMarkdownController />
      )}
    </>
  );
};
