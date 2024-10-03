import { COLORS_DATA } from "./colorPicker.constant";

export const ColorPicker = ({ selectedColor, handleColorPick }) => {
  return (
    <div className="flex items-center">
      <p className="text-[13px] leading-7 float-left">Color</p>
      <ul className="flex flex-auto items-center h-full gap-3 ml-10">
        {COLORS_DATA.map((color) => {
          const isSelected = color.id === selectedColor;
          console.log(isSelected);
          return (
            <>
              {color.name === "Default" ? (
                <li key={color.id} className="flex items-center relative">
                  <button
                    style={{ background: color.color }}
                    className={`${
                      isSelected ? "h-[14px] w-[14px]" : "h-[18px] w-[18px]"
                    } rounded-full border border-[--text-gray-4]`}
                    onClick={() => handleColorPick(color)}
                  ></button>
                  <div
                    className={`w-[1px] ${
                      isSelected ? "h-[14px]" : "h-[18px]"
                    }  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FF6161] rotate-45`}
                  ></div>
                  {isSelected && (
                    <div className="h-5 w-5 border border-[--secondary-color] rounded-full absolute left-1/2 -translate-x-1/2"></div>
                  )}
                </li>
              ) : (
                <li key={color.id} className="flex items-center relative">
                  <button
                    style={{ background: color.color }}
                    className={`${
                      isSelected ? "h-[14px] w-[14px]" : "h-[18px] w-[18px]"
                    } rounded-full`}
                    onClick={() => handleColorPick(color)}
                  ></button>
                  {isSelected && (
                    <div
                      style={{
                        borderColor: color.color,
                      }}
                      className="h-5 w-5 border-2 rounded-full absolute left-1/2 -translate-x-1/2"
                    ></div>
                  )}
                </li>
              )}
            </>
          );
        })}
      </ul>
    </div>
  );
};
