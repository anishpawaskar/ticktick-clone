import { PiLineVertical } from "react-icons/pi";
import { IoCalendarOutline } from "react-icons/io5";
import { TbFlag3Filled, TbFlag3 } from "react-icons/tb";
import { FiCheck } from "react-icons/fi";
import { useState } from "react";
import { PRIORITY_ACTIONS } from "./taskMardownController.constant";
import { DatePicker } from "../DatePicker";
import { MarkdownEditor } from "./components/MarkdownEditor";
import { MarkdownPreview } from "./components/MarkdownPreview";

export const TaskMarkdownController = () => {
  const [isPriorityDropdownVisible, setPriorityDropdown] = useState(false);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [priorityLevel, setPriorityLevel] = useState("NONE");

  const priority = PRIORITY_ACTIONS.find(
    (priority) => priority.level === priorityLevel
  );
  const PriorityFlagIcon = priority.icon;

  return (
    <>
      <div className="w-[21.45%] h-full bg-white flex flex-col">
        <div className="markdown-controller-header mt-2 py-[9px] px-5 border-b flex items-center justify-between">
          <div className="h-9 flex items-center">
            <input
              style={{ borderColor: priority.color }}
              type="checkbox"
              name="complete-task"
              id="complete-task"
              className="h-[15px] w-[15px] border rounded-sm appearance-none"
            />

            <PiLineVertical className="w-4 h-4 text-[--icon-color] opacity-60" />
            <div className="relative">
              <button
                onClick={() => setIsDatePickerVisible(true)}
                className="flex items-center px-1 rounded hover:bg-[--light-white]"
              >
                <IoCalendarOutline className="h-[18px] w-[18px] mr-1.5 text-[--icon-color] opacity-60" />
                <span
                  //TODO: write a function for showing date as tick tick
                  className="text-[--text-gray-4] text-[15px] leading-[30px]"
                >
                  Due Date
                </span>
              </button>
              {isDatePickerVisible && (
                <div
                  //TODO: set date of task
                  className="absolute z-[60]"
                >
                  <DatePicker />
                </div>
              )}
            </div>
          </div>
          <div
            //TODO: separate this into different component
            className="h-full flex items-center relative"
          >
            <button
              onClick={() => setPriorityDropdown(true)}
              className="h-full rounded p-1 hover:bg-[--light-white]"
            >
              <PriorityFlagIcon
                style={{ color: priority.color }}
                className={`h-5 w-5 ${
                  priorityLevel === "NONE" && "opacity-60"
                }`}
              />
            </button>
            {isPriorityDropdownVisible && (
              <ul className="priority-dropdown p-1 absolute top-8 left-[-124px] bg-white shadow-2xl rounded-md border z-[60]">
                {PRIORITY_ACTIONS.map((priority) => {
                  const IconComponent = priority.icon;
                  const isSelected = priority.level === priorityLevel;

                  return (
                    <li className="w-[154px] h-[34px]">
                      <button
                        onClick={() => {
                          setPriorityLevel(priority.level);
                          setPriorityDropdown(false);
                        }}
                        className="flex items-center px-3 h-full w-full hover:bg-[--light-white] ease-in-out duration-150 rounded"
                      >
                        <IconComponent
                          style={{ color: priority.color }}
                          className={`h-5 w-5 mr-2 ${
                            priority.level === "NONE" && "opacity-60"
                          }`}
                        />
                        <span
                          className={`flex-auto truncate text-left text-[13px] leading-5 ${
                            isSelected
                              ? "text-[--secondary-color]"
                              : "text-[--text-gray]"
                          }`}
                        >
                          {priority.name}
                        </span>
                        {isSelected && (
                          <FiCheck className="h-[15px] w-[15px] text-[--secondary-color]" />
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
        <div className="markdown-controller-main-section px-5 mt-2 py-[9px] overflow-auto">
          {/* <MarkdownEditor /> */}
          <MarkdownPreview />
        </div>
      </div>
      {(isPriorityDropdownVisible || isDatePickerVisible) && (
        <div
          onClick={() => {
            setPriorityDropdown(false);
            setIsDatePickerVisible(false);
          }}
          className="absolute w-full h-full left-0 top-0 z-50"
        ></div>
      )}
    </>
  );
};
