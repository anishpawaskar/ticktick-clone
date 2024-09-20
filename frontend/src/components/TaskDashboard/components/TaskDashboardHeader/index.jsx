import { useRef, useState } from "react";
import { RxHamburgerMenu, RxDotsHorizontal } from "react-icons/rx";
import { LuArrowUpDown } from "react-icons/lu";
import { DashboardHeaderPopup } from "./DashboardHeaderPopup";
import { MENU_DATA, SORT_DATA } from "./taskDashboardHeader.constant";
import { useDispatch, useSelector } from "react-redux";
import { selectTask, toggleControlPanel } from "../../../../store/taskSlice";

export const TaskDashboardHeader = ({ title }) => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState("");
  const [titleValue, setTitleValue] = useState(title);
  const titleInputRef = useRef(null);

  const { isControlPanelVisible } = useSelector(selectTask);
  const dispatch = useDispatch();

  return (
    <header className="px-4 py-3 sm:px-5 sm:py-4 flex items-center justify-between w-full">
      <button
        onClick={() => dispatch(toggleControlPanel(!isControlPanelVisible))}
        className="flex-none text-[--icon-color] hover:bg-[--light-white] rounded-md h-9 px-1"
      >
        <RxHamburgerMenu className="w-[23px] h-[23px] opacity-60" />
      </button>
      <div className="h-9 flex items-center text-[--text-gray]">
        <p
          onClick={() => {
            titleInputRef.current.focus();
            setIsInputVisible(true);
            console.log(titleInputRef);
          }}
          className={`text-xl font-semibold flex-auto w-full h-full px-1 items-center rounded-md hover:bg-[--light-white] truncate ${
            isInputVisible ? "hidden" : "flex"
          }`}
        >
          {title}
        </p>
        <input
          //TODO: remove focus while clicking anywhere in window
          ref={titleInputRef}
          onChange={(e) => setTitleValue(e.target.value)}
          value={titleValue}
          className={`text-xl w-44 sm:w-auto font-semibold h-full px-1 bg-transparent outline-none rounded-md border border-[--secondary-color] ${
            isInputVisible ? "block" : "hidden"
          }`}
        />
      </div>
      <div className="header-actioin flex-auto flex justify-end items-center relative">
        <button
          onClick={() => setIsPopupVisible("sortTask")}
          className="text-[--icon-color] py-1.5 px-1.5 rounded-md flex items-center hover:bg-[--light-white] relative z-50"
        >
          <LuArrowUpDown className="h-[18px] w-[18px] opacity-60" />
        </button>
        <button
          onClick={() => setIsPopupVisible("taskMenu")}
          className="text-[--icon-color] py-1.5 px-1.5 rounded-md flex items-center hover:bg-[--light-white] relative z-50"
        >
          <RxDotsHorizontal className="h-[18px] w-[18px] opacity-60" />
        </button>
        {isPopupVisible === "sortTask" && (
          <DashboardHeaderPopup
            key="sort popup"
            isPopupVisible={isPopupVisible}
            popupItems={SORT_DATA}
            isDropdownVisible={isDropdownVisible}
            setIsDropdownVisible={setIsDropdownVisible}
          />
        )}
        {isPopupVisible === "taskMenu" && (
          <DashboardHeaderPopup
            key="task menu popup"
            isPopupVisible={isPopupVisible}
            popupItems={MENU_DATA}
          />
        )}
      </div>
      {isPopupVisible && (
        <div
          onClick={() => {
            setIsPopupVisible("");
            setIsDropdownVisible(null);
          }}
          className="absolute top-0 left-0 w-full h-full z-50"
        ></div>
      )}
    </header>
  );
};
