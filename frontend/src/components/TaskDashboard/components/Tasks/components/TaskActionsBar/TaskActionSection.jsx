import { LuCalendarX2 } from "react-icons/lu";

export const TaskActionSection = ({ title, actions }) => {
  const isTaskHasDueDate = true;
  return (
    <div className="">
      <p className="text-xs text-[--text-gray-4] mb-2 truncate overflow-hidden w-full px-[6px]">
        {title}
      </p>
      <ul className="flex items-center justify-between">
        {actions.map((action) => {
          const IconComponent = action.icon;
          //TODO: add date picker when click on custom date button
          return (
            <li key={action.id} className="relative group/action">
              <div className="h-8 w-8 rounded-md bg-[--light-white] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover/action:opacity-100 "></div>
              <button className="p-1.5 rounded-md relative">
                <IconComponent
                  style={{
                    color: `${
                      title === "Date" ? "var(--icon-color)" : action.color
                    }`,
                  }}
                  className={`h-5 w-5 ${title === "Date" && "opacity-60"} ${
                    action.level === "NONE" && "opacity-60"
                  }`}
                />
              </button>
            </li>
          );
        })}
        {isTaskHasDueDate && title === "Date" && (
          <li className="relative group/action">
            <div className="w-8 h-8 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 bg-[--light-white] rounded-md group-hover/action:opacity-100"></div>
            <button className="p-[6px] rounded-md">
              <LuCalendarX2
                className={`h-[18px] w-[18px] ${
                  title === "Date" && "opacity-60"
                }`}
              />
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};
