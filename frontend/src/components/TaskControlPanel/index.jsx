import {
  LIST_DATA,
  TAGS_DATA,
} from "./components/TaskListCarousel/taskListCarousel.constants";
import { TaskControlPanelPresentation } from "./Presentation";

export const TaskControlPanel = ({ isSidebarOpen }) => {
  return (
    <TaskControlPanelPresentation
      isSidebarOpen={isSidebarOpen}
      lists={LIST_DATA}
      tags={TAGS_DATA}
    />
  );
};
