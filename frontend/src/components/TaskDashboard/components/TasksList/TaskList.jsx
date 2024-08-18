import { useState } from "react";
import { LuListTree } from "react-icons/lu";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { formatDate } from "../../../utils/formatDate";

export const TaskList = ({ task }) => {
  const [isTasksAccordianOpen, setIsTaskAccordianOpen] = useState(false);
  const date = formatDate(task.startDate);

  return (
    <>
      <li
        style={{ marginLeft: `${task.depth * 16}px` }}
        key={task.id}
        className="flex items-center justify-between h-10 px-4 border-b hover:bg-[#F7F7F7] hover:border-none rounded-md relative"
      >
        {/* TODO: size should be same and alignment should be same */}
        <div className="flex gap-2">
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
        {/* TODO: size of both should be same */}
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
    </>
  );
};

{
  /* <li
style={{
  flexDirection: task.items ? "column" : "row",
  alignItems: task.items ? "baseline" : "center",
  justifyContent: task.items ? "center" : "inherit",
}}
key={task.id}
className="flex items-center gap-2 h-10 px-4 border-b hover:bg-[#F7F7F7] hover:border-none rounded-md relative"
>
<div className="flex gap-2">
  {task.items && (
    <button
      onClick={() => setIsTaskAccordianOpen((prevState) => !prevState)}
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
{task.items && (
  <ul className="w-full">
    {task.items.map((task) => {
      return <TaskList task={task} key={task.id} />;
    })}
  </ul>
)}
</li> */
}

//v2
{
  /* <li className="w-full bg-red-500">
<div className="flex gap-2">
  {task.items && (
    <button
      onClick={() => setIsTaskAccordianOpen((prevState) => !prevState)}
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
{task.items && (
  <ul className="w-full bg-green-500">
    {task.items.map((task) => {
      return (
        <ul className="w-full pl-4">
          <TaskList task={task} key={task.id} />
        </ul>
      );
    })}
  </ul>
)}
</li> */
}
