import {
  LIST_DATA,
  TAGS_DATA,
} from "./components/TaskListCarousel/taskListCarousel.constants";
import { TaskControlPanelPresentation } from "./presentation";

export const TaskControlPanel = () => {
  return <TaskControlPanelPresentation lists={LIST_DATA} tags={TAGS_DATA} />;
};
