import { FocusRecords } from "./components/FocusRecords";
import { POMODORO_STATS } from "./pomodoroStatsOverview.constans";

export const PomodoroStatsOverview = () => {
  return (
    <div className="w-full h-full mt-[20px]">
      <div className="flex flex-col pb-5 h-full">
        <h3 className="px-5 text-lg font-semibold">Overview</h3>
        <div className="mt-[22px] px-5 grid grid-cols-2 gap-3 w-full">
          {POMODORO_STATS.map((pomoStats) => {
            return (
              <div
                key={pomoStats.id}
                className="rounded-md bg-[--light-white-f7] px-3 pt-3 pb-2.5"
              >
                <p className="mb-[5px] text-xs text-[--text-gray-4] truncate">
                  {pomoStats.name}
                </p>
                <p className="text-[--text-gray] opacity-80 text-2xl leading-[30px] font-semibold truncate">
                  1
                </p>
              </div>
            );
          })}
        </div>
        <FocusRecords />
      </div>
    </div>
  );
};
