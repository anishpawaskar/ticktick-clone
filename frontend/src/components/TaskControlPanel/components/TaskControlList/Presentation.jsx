import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { iconsComponentList } from "../../taskControlPanel.constatns";
import { useState } from "react";

export const TaskControlListPresentation = ({ list }) => {
  return (
    <section className="my-4">
      <ul className="flex flex-col">
        {list.map((item) => {
          const IconComponent = iconsComponentList[item.icon];
          return (
            <li className="h-10 w-full px-2.5 group/item" key={item.id}>
              <button className="w-full h-full hover:bg-[#F3F3F3] rounded-[5px] flex items-center justify-between text-sm px-2 py-4">
                <span className="flex items-center gap-2">
                  <IconComponent className="text-xl" />
                  {item.name}
                </span>
                <div className="flex-none flex items-center min-w-[24px] justify-end relative z-0">
                  <div
                    onClick={() => console.log("show modal")}
                    role="button"
                    className="h-4 w-4 absolute right-0 top-1/2 -translate-y-1/2"
                  >
                    <HiOutlineDotsHorizontal className="text-[#9E9E9E] w-4 h-4 hover:text-black opacity-0 group-hover/item:opacity-100" />
                  </div>
                  <span className="text-xs text-[#9E9E9E] group-hover/item:opacity-0">
                    {item.count}
                  </span>
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

//set bg color to #F3F3F3 if the selected tab is active
