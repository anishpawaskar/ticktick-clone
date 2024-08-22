import { useDispatch, useSelector } from "react-redux";
import { TaskList } from "./TaskList";
import { TASK_LIST_DATA } from "./taskList.constant";
import { getSelectedTask, selectTask } from "../../../../store/taskSlice";
import { useGetScreenSize } from "../../../../cusstomHooks/useGetScreeeSize";

export const Tasks = () => {
  const { selectedTask } = useSelector(selectTask);
  const [screenSize] = useGetScreenSize();
  const dispatch = useDispatch();

  return (
    <>
      <ul className="w-full">
        {TASK_LIST_DATA.map((task) => {
          return (
            <TaskList
              task={task}
              key={task.id}
              selectedTask={selectedTask}
              dispatch={dispatch}
              getSelectedTask={getSelectedTask}
              screenSize={screenSize}
            />
          );
        })}
      </ul>
      {selectedTask && screenSize.width < 950 && (
        <div
          onClick={() => dispatch(getSelectedTask(""))}
          className="w-full h-full absolute top-0 left-0 z-10"
        ></div>
      )}
    </>
  );
};
