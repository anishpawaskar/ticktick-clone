import { DEFAULT_TODO_LIST, FEATURES_OPTIONS } from "./optionsPanel.constant";
import { selectOptions } from "./optionsSlice";

export const OptionsPanelPresentation = ({
  title,
  icons = {},
  items,
  currentFormPage,
  handleOptionSubmit,
  handleOptionSkip,
  navigateToPreviousPage,
  selectOption,
  isFeatureAlwaysOn,
}) => {
  const iconsObjLength = Object.keys(icons).length;

  return (
    <div className="h-screen w-full fixed top-0 bg-white md:fixed to md:w-2/5 z-50">
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col justify-evenly items-center p-5">
          <div
            style={{ height: "520px" }}
            className="flex flex-col gap-10 relative flex-auto"
          >
            <h2 className="text-xl font-medium">👋 {title}</h2>
            <ul className="grid grid-cols-2 gap-4">
              {items.map((item) => {
                const IconComponent = icons[item.icon];

                return (
                  <li key={item.id}>
                    <button
                      onClick={() => selectOption(item)}
                      style={{
                        background: item.isSelected ? "#4772FA0D" : "#F3F3F3",
                        border: item.isSelected ? "1px solid #4772fa" : "none",
                      }}
                      className="flex items-center gap-2.5 pl-6 h-[60px] w-full sm:w-52 border rounded-md"
                    >
                      {iconsObjLength > 0 ? (
                        <IconComponent
                          style={{
                            color: item.isSelected ? "#4772FA" : "#19191966",
                          }}
                          className="text-xl"
                        />
                      ) : (
                        <p className="text-xl">{item.icon}</p>
                      )}

                      <span className="text-base text-left">{item.name}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
            {currentFormPage !== 0 && (
              <div className="absolute left-0 top-[-80px]">
                <button
                  onClick={navigateToPreviousPage}
                  className="flex items-center gap-1 text-[#19191966] text-[15px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-5 h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                  </svg>
                  Back
                </button>
              </div>
            )}
            {currentFormPage === 0 && isFeatureAlwaysOn && (
              <p className="text-[#19191966] text-sm">
                This feature cannot be hidden
              </p>
            )}
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="flex gap-2">
              <div
                style={{
                  width: currentFormPage === 0 ? "20px" : "8px",
                  background: currentFormPage === 0 ? "#4772FA" : "#DDDDDD",
                }}
                className="h-2 bg-[#4772FA] w-5 rounded-full"
              ></div>
              <div
                style={{
                  width: currentFormPage === 1 ? "20px" : "8px",
                  background: currentFormPage === 1 ? "#4772FA" : "#DDDDDD",
                }}
                className="h-2 w-2 bg-[#DDDDDD] rounded-full"
              ></div>
            </div>
            <div>
              <button
                onClick={handleOptionSkip}
                className="px-6 py-2 rounded-md text-[#19191966] text-sm"
              >
                Skip
              </button>
              <button
                onClick={handleOptionSubmit}
                className="px-6 py-2 bg-[#4772FA] rounded-md text-white text-sm"
              >
                {currentFormPage === 0 ? "Continue" : "Get Started"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
