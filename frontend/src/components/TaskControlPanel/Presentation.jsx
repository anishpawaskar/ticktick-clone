import { useSelector } from "react-redux";
import { TaskControlList } from "./components/TaskControlList";
import { TaskListCarousel } from "./components/TaskListCarousel";
import { selectTask } from "../../store/taskSlice";

export const TaskControlPanelPresentation = ({ lists, tags }) => {
  const { isControlPanelVisible } = useSelector(selectTask);
  // FIX: handle controlpanel visibility for small devices on when state changes
  return (
    <div
      className={`${
        isControlPanelVisible ? "hidden" : "block"
      } fixed top-0 left-0 xs:left-[50px] xs:w-[50%] xs:shadow-lg bg-white w-[60%] z-50 h-full  ${
        isControlPanelVisible ? "xs:hidden" : "xs:block"
      }  ${
        isControlPanelVisible ? "sm:block" : "sm:hidden"
      } sm:static sm:w-56 border`}
    >
      <TaskControlList listType="overview" />
      <hr />
      {/* <TaskListCarousel title="Lists" lists={lists} /> */}
    </div>
  );
};
