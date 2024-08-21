import { RxCross2 } from "react-icons/rx";
import { FaRegEdit } from "react-icons/fa";
import { VscPreview } from "react-icons/vsc";
import { PiLineVerticalBold } from "react-icons/pi";
import { VscCalendar } from "react-icons/vsc";
import { RiFlag2Line } from "react-icons/ri";
import { TaskMarkdownEditor } from "../TaskMarkdownEditor";

export const TaskMarkdownController = () => {
  const isEditMode = true;
  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col z-50 bg-white">
      <div className="pt-5 px-4 pb-4 border-b  flex items-center gap-2">
        <div className="flex items-center gap-2">
          <button>
            <RxCross2 className="text-[--icon-color] h-5 w-5" />
          </button>
          {isEditMode ? (
            <button>
              <FaRegEdit className="text-[--icon-color] h-5 w-5" />
            </button>
          ) : (
            <button>
              <VscPreview className="text-[--icon-color] h-5 w-5" />
            </button>
          )}
        </div>
        <div className="flex flex-auto items-center">
          <div className="flex items-center flex-auto gap-[2px]">
            <input type="checkbox" name="complete-task" className="w-4 h-4" />
            <PiLineVerticalBold className="text-[--icon-color]" />
            <div className="mb-[1px] flex gap-1">
              <VscCalendar className="text-[#4772fa] h-[18px] w-[18px]" />
              <p className="text-[#4772fa] text-[13px] truncate">
                a month later, Sep 27
              </p>
            </div>
          </div>
          <div className="flex items-center relative">
            <button>
              <RiFlag2Line className="text-[--icon-color] w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      <TaskMarkdownEditor />
    </div>
  );
};
