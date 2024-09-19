import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export const DashboardHeaderPopup = ({ isPopupVisible, popupItems }) => {
  return isPopupVisible === "sortTask" ? (
    <ul className="absolute bg-white shadow-2xl rounded-md top-10 right-[-5px] p-1.5 z-50">
      {popupItems.map((popupItem, idx) => {
        const IconComponent = popupItem.icon;

        return (
          <li
            //TODO: open nested popup on click on item
            key={popupItem.title}
            className="text-[--text-gray] min-w-48 px-3 h-9 flex items-center justify-between gap-2 hover:bg-[--light-white] rounded-md"
          >
            <div className="flex items-center gap-2">
              <IconComponent className="h-4 w-4 opacity-60" />
              <span className="text-[13px] leading-5 flex-auto truncate opacity-80">
                {popupItem.title}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[13px] leading-5 flex-auto truncate text-[--text-gray-6]">
                Custom
              </span>
              <MdOutlineKeyboardArrowRight className="h-4 w-4 opacity-40" />
            </div>
          </li>
        );
      })}
    </ul>
  ) : (
    <ul className="absolute bg-white shadow-2xl rounded-md top-10 right-[-5px] px-1.5 py-1 z-50">
      {popupItems.map((popupItem, idx) => {
        return (
          <React.Fragment key={popupItem.id}>
            <li
              key={popupItem.id}
              className={`min-w-28 flex flex-col gap-2 py-1`}
            >
              {popupItem.name && (
                <p className="px-[10px] text-xs text-[--text-gray-4]">
                  {popupItem.name}
                </p>
              )}
              {popupItem.items.length && (
                <ul
                  className={`w-full ${
                    popupItem.name === "View" &&
                    "flex justify-between items-center px-[6px]"
                  }`}
                >
                  {popupItem.items.map((item) => {
                    const IconComponent = item.icon;

                    return (
                      <li
                        key={item.id}
                        className={`flex items-center h-8 rounded truncate hover:bg-[--light-white] text-[13px] leading-5 ${
                          popupItem.name === "View" ? "gap-0 p-1" : "px-3 gap-2"
                        }`}
                      >
                        <IconComponent
                          className={`${
                            popupItem.name === "View"
                              ? "h-[22px] w-[22px]"
                              : "h-[18px] w-[18px]"
                          } opacity-60`}
                        />
                        <span>{item.name}</span>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
            {idx !== popupItems.length - 1 && <hr />}
          </React.Fragment>
        );
      })}
    </ul>
  );
};
