import { MdCheck } from "react-icons/md";

export const CustomAccordionOptions = ({
  options,
  isSelected,
  handleAccordionOption,
}) => {
  return (
    <ul className="absolute top-5 right-[-110px] z-10 w-40 accordion-more-option-popup p-1 bg-[--primary-color] shadow-2xl rounded-lg">
      {options.map((option, idx) => {
        const isOptionSelected = idx === isSelected;

        return (
          <li key={option.name}>
            <button
              onClick={() => handleAccordionOption(option)}
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
  );
};
