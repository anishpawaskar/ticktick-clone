import { TaskList } from "./TaskList";
import { TASK_LIST_DATA } from "./taskList.constant";

export const Tasks = () => {
  return (
    <>
      <ul className="w-full">
        {TASK_LIST_DATA.map((task) => {
          return <TaskList task={task} key={task.id} />;
        })}
      </ul>
    </>
  );
};
