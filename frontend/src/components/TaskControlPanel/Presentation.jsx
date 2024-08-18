import { TaskControlList } from "./components/TaskControlList";
import { TaskListCarousel } from "./components/TaskListCarousel";

export const TaskControlPanelPresentation = ({
  lists,
  tags,
  isSidebarOpen,
}) => {
  return (
    <div
      // style={{ display: isSidebarOpen ? "block" : "none" }}
      className="hidden sm:block w-56 border"
    >
      <TaskControlList listType="overview" />
      <hr />
      {/* <TaskListCarousel title="Lists" lists={lists} /> */}
    </div>
  );
};
