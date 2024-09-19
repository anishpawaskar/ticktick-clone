import { useSelector } from "react-redux";
import { TaskControlPanelPresentation } from "./Presentation";
import { selectTask } from "../../store/taskSlice";
import { TASK_CONTROLS } from "./taskControlPanel.constatns";

export const TaskControlPanel = () => {
  const { isControlPanelVisible } = useSelector(selectTask);
  const overviewList = TASK_CONTROLS.filter(
    (control) => control.category === "overview"
  );

  return (
    <TaskControlPanelPresentation
      isControlPanelVisible={isControlPanelVisible}
      overviewList={overviewList}
    />
  );
};
