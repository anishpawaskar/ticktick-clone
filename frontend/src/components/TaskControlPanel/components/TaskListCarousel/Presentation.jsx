import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { TaskControlListPresentation } from "../TaskControlList/Presentation";

export const TaskListCarouselPresentation = ({
  title,
  lists,
  isCarouselOpen,
  toggleCarousel,
}) => {
  return (
    <div className="my-4">
      <div
        role="button"
        onClick={toggleCarousel}
        className="flex items-center justify-between ml-1 mr-2 pr-2 py-3 h-7  rounded-[5px] group/carousel hover:bg-[#F3F3F3]"
      >
        <div className="flex items-center">
          {isCarouselOpen ? (
            <MdKeyboardArrowDown className="text-sm text-[#a3a3a3] invisible group-hover/carousel:visible" />
          ) : (
            <MdOutlineKeyboardArrowRight className="text-sm text-[#a3a3a3] invisible group-hover/carousel:visible" />
          )}
          <p className="text-[12px] text-[#a3a3a3] font-medium">{title}</p>
        </div>
        <button className="invisible group-hover/carousel:visible">
          <IoIosAdd className="text-xl text-[#9E9E9E]" />
        </button>
      </div>
    </div>
  );
};
