import { IoAddOutline, IoCalendarOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useRef, useState } from "react";

export const TaskForm = () => {
  const [isTaskFormVisible, setIsTaskFormVisible] = useState(false);
  const titleInputRef = useRef(null); //TODO: handle resize of title and content
  //TODO: add dropdown for date picker and priority
  //TODO: if input have no value then still it should show placeholder add task
  //TODO: remove focus when user clicks somewhere else

  return (
    <div className="px-[26px] pb-4 w-full">
      {isTaskFormVisible ? (
        <div
          className={`flex gap-2 bg-transparent min-h-9 h-9 max-h-40 px-2 border border-[--secondary-color] rounded-md`}
        >
          <textarea
            ref={titleInputRef}
            name="title"
            id="task-title"
            className="flex-auto bg-transparent outline-none resize-none max-h-40"
          ></textarea>
          <div className="flex items-center gap-1">
            <button className="p-1 rounded hover:bg-[--light-white]">
              <IoCalendarOutline className="h-[18px] w-[18px] text-[--icon-color] opacity-60" />
            </button>
            <button className="p-1 rounded hover:bg-[--light-white]">
              <MdKeyboardArrowDown className="h-[18px] w-[18px] text-[--icon-color] opacity-60" />
            </button>
          </div>
        </div>
      ) : (
        <div
          onClick={() => setIsTaskFormVisible(true)}
          className="placeholder h-9 w-full rounded-md bg-[--light-white-f7] flex items-center px-3 gap-1 text-sm text-[--text-gray-6]"
        >
          <IoAddOutline />
          <span>Add Task</span>
        </div>
      )}
    </div>
  );
};
