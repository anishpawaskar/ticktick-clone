import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { TaskListAccordionPanel } from "./components/TaskListAccordionPanel/index";

export const TaskListAccordionPresentation = ({
  title,
  lists,
  isAccordionOpen,
  toggleAccordion,
}) => {
  return (
    <div className="my-4 mx-2">
      <div
        role="button"
        onClick={toggleAccordion}
        className="flex items-center justify-between pr-2 py-3 h-7  rounded-[5px] group/carousel hover:bg-[#F3F3F3]"
      >
        <div className="flex items-center">
          {isAccordionOpen ? (
            <MdKeyboardArrowDown className="text-sm text-[#a3a3a3] invisible group-hover/carousel:visible hover:text-[#2A2A2A]" />
          ) : (
            <MdOutlineKeyboardArrowRight className="text-sm text-[#a3a3a3] invisible group-hover/carousel:visible hover:text-[#2A2A2A]" />
          )}
          <p className="text-[12px] text-[#a3a3a3] font-medium">{title}</p>
        </div>
        <button className="invisible group-hover/carousel:visible">
          <IoIosAdd className="text-xl text-[#9E9E9E] hover:text-[#2A2A2A]" />
        </button>
      </div>
      {isAccordionOpen && (
        <TaskListAccordionPanel title={title} lists={lists} />
      )}
    </div>
  );
};
