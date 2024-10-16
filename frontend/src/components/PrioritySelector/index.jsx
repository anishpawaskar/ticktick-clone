import { FiCheck } from "react-icons/fi";
import { PRIORITY_ACTIONS } from "./prioritySelector.constant";

export const PrioritySelector = ({
  priorityLevel,
  handlePrioritySelection,
}) => {
  return (
    <ul className="priority-dropdown p-1 bg-white shadow-2xl rounded-md border">
      {PRIORITY_ACTIONS.map((priority) => {
        const IconComponent = priority.icon;
        const isSelected = priority.level === priorityLevel;

        return (
          <li key={priority.id} className="w-[154px] h-[34px]">
            <button
              onClick={() => {
                handlePrioritySelection(priority);
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
                  isSelected ? "text-[--secondary-color]" : "text-[--text-gray]"
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
  );
};
