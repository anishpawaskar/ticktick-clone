import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { LuFolderArchive } from "react-icons/lu";
import { IoAddOutline } from "react-icons/io5";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { CustomAccordionOptions } from "./CustomAccordionOptions";

export const CustomAccordion = ({
  title,
  type,
  accordionOptions,
  isAccordionOpen,
  isAddButtonActive,
  isMoreButtonActive,
  toggleAccordion,
  handleAccordionOption,
  openAccordionOptions,
  openAccordionForm,
  children,
}) => {
  return (
    <div className="accordion-wrapper pl-1.5 pr-1 w-full">
      <div
        className={`accordion-button w-full ${
          type === "archive" ? "h-9" : "h-7"
        } relative`}
      >
        <button
          onClick={toggleAccordion}
          className={`w-full h-full flex items-center pr-1.5 ${
            type === "archive" ? "text-[--text-gray]" : "text-[--text-gray-4]"
          } rounded-md  hover:bg-[--light-white] group/accordion-btn`}
        >
          <span
            className={`${
              type === "archive" ? "visible" : "invisible"
            } group-hover/accordion-btn:visible`}
          >
            {isAccordionOpen ? (
              <MdOutlineKeyboardArrowDown className="h-4 w-4 text-[--text-gray-4] hover:text-[--text-gray]" />
            ) : (
              <MdOutlineKeyboardArrowRight className="h-4 w-4 text-[--text-gray-4] hover:text-[--text-gray]" />
            )}
          </span>
          <span
            className={`flex flex-auto  ${
              type === "archive"
                ? "text-sm font-normal items-center"
                : "text-xs font-semibold items-start"
            } truncate mr-2`}
          >
            {type === "archive" && (
              <LuFolderArchive className="mr-2 h-4 w-4 text-[--icon-color] opacity-60" />
            )}
            {title}
          </span>
          <span className="flex items-center gap-1.5">
            {isMoreButtonActive && (
              <span
                //TODO: this functions will be passed from props
                onClick={(e) => openAccordionOptions(e)}
                role="button"
                className="invisible group-hover/accordion-btn:visible"
              >
                <HiOutlineDotsHorizontal className="h-[15px] w-[15px] hover:text-[--text-gray]" />
              </span>
            )}
            {isAddButtonActive && (
              <span
                //TODO: this functions will be passed from props
                onClick={(e) => openAccordionForm(e)}
                role="button"
                className="invisible group-hover/accordion-btn:visible"
              >
                <IoAddOutline className="h-[18px] w-[18px] hover:text-[--text-gray]" />
              </span>
            )}
          </span>
        </button>
        {isMoreButtonActive && (
          <CustomAccordionOptions
            options={accordionOptions}
            isSelected={1}
            handleAccordionOption={handleAccordionOption}
          />
        )}
      </div>
      {children}
      {/* <CustomAccordionPanel isAccordionOpen={true} lists={projects} />
      {isOptionsOpen && (
        <ul className="absolute top-5 right-[-110px] w-40 accordion-more-option-popup p-1 bg-[--primary-color] shadow-2xl rounded-lg">
          {options.map((option, idx) => {
            const isOptionSelected = idx === 1;

            return (
              <li key={option.name}>
                <button
                  className={`w-full flex items-center justify-between text-left h-8 px-1.5 text-xs ${
                    isOptionSelected
                      ? "text-[--secondary-color]"
                      : "text-[--text-gray]"
                  } rounded-md hover:bg-[--light-white]`}
                >
                  {option.name}
                  {isOptionSelected && (
                    <span>
                      <MdCheck className="text-[--secondary-color] h-3.5 w-3.5" />
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )} */}
    </div>
  );
};
