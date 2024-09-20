import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

export const DashboardHeaderPopup = ({
  isPopupVisible,
  popupItems,
  isDropdownVisible,
  setIsDropdownVisible,
}) => {
  return isPopupVisible === "sortTask" ? (
    <ul className="absolute bg-white shadow-2xl rounded-md top-10 right-[-5px] p-1.5 z-[60]">
      {popupItems.map((popupItem, idx) => {
        const [sortBy, setSortBy] = useState(1);
        const IconComponent = popupItem.icon;
        const sortByItem = popupItem.items.find((item) => item.id === sortBy);

        return (
          <li
            key={popupItem.title}
            className={`text-[--text-gray] min-w-48 h-9 flex items-center justify-between gap-2 rounded-md relative`}
          >
            <button
              onClick={() => setIsDropdownVisible(popupItem.id)}
              className={`w-full h-full px-3 flex items-center justify-between hover:bg-[--light-white]`}
            >
              <div className="flex items-center gap-2">
                <IconComponent className="h-4 w-4 opacity-60" />
                <span className="text-[13px] leading-5 flex-auto truncate opacity-80">
                  {popupItem.title}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[13px] leading-5 flex-auto truncate text-[--text-gray-6]">
                  {sortByItem.name}
                </span>
                {isDropdownVisible === popupItem.id ? (
                  <MdOutlineKeyboardArrowDown className="h-4 w-4 opacity-40" />
                ) : (
                  <MdOutlineKeyboardArrowRight className="h-4 w-4 opacity-40" />
                )}
              </div>
            </button>
            {isDropdownVisible === popupItem.id && (
              <ul className="w-40 p-1 rounded-md bg-white shadow-xl absolute top-8 right-0 z-[100]">
                {popupItem.items.map((item) => {
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => {
                          setSortBy(item.id);
                          setIsDropdownVisible(null);
                        }}
                        className={`h-8 w-full pl-3 pr-1.5 rounded hover:bg-[--light-white] text-[13px] leading-5 text-left flex items-center justify-between ${
                          sortByItem.id === item.id
                            ? "text-[--secondary-color]"
                            : "text-[--text-gray]"
                        }`}
                      >
                        <span>{item.name}</span>
                        {sortByItem.id === item.id && (
                          <FaCheck className="text-[--secondary-color]" />
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
            {isDropdownVisible && (
              <div
                onClick={() => setIsDropdownVisible(null)}
                className="absolute w-full h-full top-0 left-0 z-[70]"
              ></div>
            )}
          </li>
        );
      })}
    </ul>
  ) : (
    <ul className="absolute bg-white shadow-2xl rounded-md top-10 right-[-5px] px-1.5 py-1 z-[60]">
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
