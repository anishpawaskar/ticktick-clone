import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsThreeDots } from "react-icons/bs";

export const CustomAccordionPanelListItem = ({
  item,
  isSelected,
  isOptionsOpen,
  openListItemActionsPopup,
  closeListItemActionsPopup,
  children,
}) => {
  return (
    <React.Fragment key={item.id}>
      <li className="h-9 w-full relative">
        <button
          //onClick={() => handleListItemSelect(item.id)}
          className={`h-full w-full rounded-md ${
            isSelected && "bg-[--light-white]"
          } flex items-center hover:bg-[--light-white] pl-4 pr-3 text-[13px] leading-5 group/accordion-list-item`}
        >
          <span className="h-4 w-4 mr-2 text-[--text-gray-6] truncate flex-shrink-0">
            <RxHamburgerMenu className="w-full h-full" />
          </span>
          <span className="flex flex-auto text-[--text-gray] truncate">
            {item.name}
          </span>
          {item.color && (
            <span
              style={{ background: item.color }}
              className="inline-block w-2 h-2 rounded-full ml-[2px] mr-1 flex-shrink-0"
            ></span>
          )}
          <span className="relative min-w-6 text-[--text-gray-4] flex-shrink-0">
            {item.count && (
              <span className="text-xs group-hover/accordion-list-item:invisible absolute top-[50%] translate-y-[-50%] right-0">
                {item.count}
              </span>
            )}

            <span
              onClick={() => openListItemActionsPopup(item.id)}
              role="button"
              className="absolute top-[50%] right-0 hidden translate-y-[-50%] group-hover/accordion-list-item:block z-10"
            >
              <BsThreeDots className="w-4 h-4" />
            </span>
          </span>
        </button>
        {isOptionsOpen && children}
      </li>
      {isOptionsOpen && (
        <div
          onClick={closeListItemActionsPopup}
          className="absolute top-0 left-0 w-full h-full"
        ></div>
      )}
    </React.Fragment>
  );
};
