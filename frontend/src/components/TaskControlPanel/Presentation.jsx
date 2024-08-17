import { TaskControlList } from "./components/TaskControlList";
import { TaskListCarousel } from "./components/TaskListCarousel";

export const TaskControlPanelPresentation = ({ lists, tags }) => {
  console.log("lists", lists);
  return (
    <div className="w-56 border">
      <TaskControlList listType="overview" />
      <hr />
      {/* <TaskListCarousel title="Lists" lists={lists} /> */}
    </div>
  );
};
