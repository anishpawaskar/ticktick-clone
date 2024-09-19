import { MdKeyboardArrowRight } from "react-icons/md";
import { ListMoveDropdown } from "./ListMoveDropdown";

export const TaskActionList = ({ actions }) => {
  return (
    <ul>
      {actions.map((action) => {
        const IconComponent = action.icon;

        return (
          <li
            key={action.id}
            className="h-[34px] flex items-center hover:bg-[--light-white] rounded relative group/moveTo"
          >
            <button className="w-full h-full flex items-center pl-[18px] pr-1 text-[--icon-color]">
              <IconComponent className="h-4 w-4 opacity-60 mr-[10px]" />
              <span className="text-[13px] leading-5 truncate flex-auto overflow-hidden opacity-80 text-start">
                {action.name}
              </span>
              {action.name === "Move to" && (
                <MdKeyboardArrowRight className="text-[--icon-color] opacity-60" />
              )}
            </button>
            {action.name === "Move to" && (
              //TODO: fix dropdown visibility it should visible even after hover effect gone from button
              <div className="hidden hover:block group-hover/moveTo:block">
                <ListMoveDropdown />
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};
