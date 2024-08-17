import { TASK_CONTROLS } from "../../taskControlPanel.constatns";
import { TaskControlListPresentation } from "./Presentation";

export const TaskControlList = ({ listType }) => {
  const list = TASK_CONTROLS.filter((item) => item.category === listType);
  return <TaskControlListPresentation list={list} />;
};
