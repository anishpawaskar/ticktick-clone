import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { PiTag } from "react-icons/pi";

export const TaskListAccordionPanelPresentation = ({ title, lists = [] }) => {
  console.log(lists.length);
  if (lists.length === 0) {
    return (
      <div className="rounded-md  px-[14px] py-2 text-xs bg-[#F7F7F7] text-[rgba(25,25,25,0.4)]">
        {title === "Lists" &&
          "Use lists to categorize and manage your tasks and notes"}
        {title === "Tags" &&
          `Categorize your tasks with tags. Quickly select a tag by typing "#" when
        adding a task`}
      </div>
    );
  }
  return (
    <ul>
      {lists.map((item) => {
        return (
          <li key={item.id} className="h-10 w-full group/accordion-item">
            <button className="w-full h-full hover:bg-[#F3F3F3] rounded-[5px] flex items-center text-sm pl-[14px] pr-[12px]">
              <div className="flex-none mr-2">
                {title === "Lists" && (
                  <RxHamburgerMenu className="h-[18px] w-[18px]" />
                )}
                {title === "Tags" && <PiTag className="h-[18px] w-[18px]" />}
              </div>
              <p className="text-sm font-normal flex-auto truncate text-[rgba(25,25,25)] text-start">
                {item.name}
              </p>
              {item.color && (
                <div
                  style={{ background: item.color }}
                  className="h-2 w-2 rounded-full flex-none"
                ></div>
              )}
              <div className="flex-none flex items-center min-w-[24px] justify-end relative z-0 h-full">
                <div
                  onClick={() => console.log("show modal")}
                  role="button"
                  className="h-4 w-4 absolute right-0 top-1/2 -translate-y-1/2"
                >
                  <HiOutlineDotsHorizontal className="text-[#9E9E9E] w-4 h-4 hover:text-black opacity-0 group-hover/accordion-item:opacity-100" />
                </div>
                <span className="text-xs text-[#9E9E9E] group-hover/accordion-item:opacity-0">
                  {item.count}
                </span>
              </div>
            </button>
          </li>
        );
      })}
    </ul>
  );
};
