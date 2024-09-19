import { useSelector } from "react-redux";
import { TaskControlList } from "./components/TaskControlList";
import { selectTask } from "../../store/taskSlice";
import { TASK_CONTROLS } from "./taskControlPanel.constatns";

export const TaskControlPanelPresentation = ({
  isControlPanelVisible,
  overviewList,
}) => {
  // TODO: when screen resize is less than 630 and if window resize then hide control panel
  return (
    <div
      className={`${
        isControlPanelVisible ? "hidden" : "block"
      } fixed top-0 left-0 xs:left-[50px] xs:w-[50%] xs:shadow-lg bg-white w-[60%] z-50 h-full  ${
        isControlPanelVisible ? "xs:hidden" : "xs:block"
      }  ${
        isControlPanelVisible ? "sm:block" : "sm:hidden"
      } sm:static sm:w-[213px] sm:shadow-none border-r`}
    >
      <TaskControlList lists={overviewList} />
      <hr />
    </div>
  );
};
