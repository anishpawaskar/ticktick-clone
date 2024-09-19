import { TasksListItem } from "./TaskListItem";
import { TASK_LIST_DATA } from "./tasks.constant";

export const Tasks = () => {
  return (
    <ul className="w-full">
      {TASK_LIST_DATA.map((task) => {
        return <TasksListItem task={task} key={task.id} />;
      })}
    </ul>
  );
};
