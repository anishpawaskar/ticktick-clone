import {
  DATE_ACTIONS,
  PRIORITY_ACTIONS,
  TASK_PRIMARY_ACTIONS,
  TASK_SECONDARY_ACTIONS,
} from "./taskActionBar.constant";
import { TaskActionSection } from "./TaskActionSection";
import { TaskActionList } from "./TaskActionList";

export const TaskActionsBar = () => {
  return (
    <div className="absolute top-4 right-[-16px] sm:right-[unset] sm:left-[50%] sm:translate-x-[-50%] z-[110] bg-white shadow-2xl w-48 max-w-48 rounded-lg px-1 pt-[14px] pb-1">
      <ul className="flex flex-col">
        <li className="px-3 pb-2">
          <TaskActionSection title="Date" actions={DATE_ACTIONS} />
        </li>
        <li className="px-3 pb-2">
          <TaskActionSection title="Priority" actions={PRIORITY_ACTIONS} />
        </li>
        <hr className="my-1" />
        <li className="">
          <TaskActionList actions={TASK_PRIMARY_ACTIONS} />
        </li>
        <hr className="my-1" />
        <li>
          <TaskActionList actions={TASK_SECONDARY_ACTIONS} />
        </li>
      </ul>
    </div>
  );
};
