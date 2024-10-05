import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { IoAddOutline } from "react-icons/io5";
import { useState } from "react";
import { TaskControlPanelAccordionPanel } from "./TaskControlPanelAccordionPanel";
import { LISTS_DATA } from "../../taskControlPanel.constatns";

export const TaskControlPanelAccordion = ({ title, lists, openPopupForm }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);
  //const [lists, setLists] = useState(LISTS_DATA);

  const toggleAccordion = () => {
    setIsAccordionOpen((prevState) => !prevState);
  };

  return (
    <div className="task-control-panel-accordion px-2.5 w-full">
      <div className="task-control-panel-accordion-btn w-full h-8 rounded-md hover:bg-[--light-white]">
        <button
          onClick={toggleAccordion}
          className="w-full h-full flex items-center pr-3  text-[--text-gray-4] group/accordion-btn"
        >
          <span className="invisible group-hover/accordion-btn:visible">
            {isAccordionOpen ? (
              <MdOutlineKeyboardArrowDown />
            ) : (
              <MdOutlineKeyboardArrowRight />
            )}
          </span>
          <span className="flex flex-auto items-start text-xs font-semibold">
            {title}
          </span>
          <span
            onClick={(e) => openPopupForm(e)}
            role="button"
            className="invisible group-hover/accordion-btn:visible"
          >
            <IoAddOutline className="h-[18px] w-[18px]" />
          </span>
        </button>
      </div>
      <TaskControlPanelAccordionPanel
        lists={lists}
        isAccordionOpen={isAccordionOpen}
        setLists={10}
      />
    </div>
  );
};
