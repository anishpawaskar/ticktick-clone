import { useDispatch, useSelector } from "react-redux";
import { TaskControlList } from "./components/TaskControlList";
import { selectTask, toggleControlPanel } from "../../store/taskSlice";
import { TASK_CONTROLS } from "./taskControlPanel.constatns";
import { TaskControlPanelAccordion } from "./components/TaskControlPanelAccordion";
import { useEffect } from "react";
import { useGetScreenSize } from "../../cusstomHooks/useGetScreeeSize";

export const TaskControlPanelPresentation = ({
  isControlPanelVisible,
  overviewList,
}) => {
  const dispatch = useDispatch();
  const [screenSize] = useGetScreenSize();

  useEffect(() => {
    const handleControlPanelVisibility = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth > 630) {
        dispatch(toggleControlPanel(true));
      } else {
        dispatch(toggleControlPanel(false));
      }
    };
    handleControlPanelVisibility();
    window.addEventListener("resize", handleControlPanelVisibility);

    return () => {
      window.removeEventListener("resize", handleControlPanelVisibility);
    };
  }, []);

  return (
    <>
      <div
        className={`${
          isControlPanelVisible ? "block" : "hidden"
        } fixed top-0 left-0 xs:left-[50px] xs:w-[50%] xs:shadow-lg bg-white w-[305px] z-[100] h-full  ${
          isControlPanelVisible ? "sm:block" : "sm:hidden"
        } sm:static sm:w-[213px] sm:shadow-none border-r`}
      >
        <TaskControlList lists={overviewList} />
        <hr className="my-4" />
        <TaskControlPanelAccordion title="Lists" />
      </div>
      {!isControlPanelVisible && (
        <div
          classNam={`${
            isControlPanelVisible ? "hidden" : "block"
          } top-0 left-0 w-full h-full z-[70] bg-red-400`}
        ></div>
      )}
      {isControlPanelVisible && screenSize.width < 630 && (
        <div
          onClick={() => dispatch(toggleControlPanel(!isControlPanelVisible))}
          className={`absolute top-0 ${
            screenSize.width < 630 && "left-[50px]"
          } ${
            screenSize.width < 500 && "left-0"
          } z-[70] w-full h-full bg-red-500`}
        ></div>
      )}
    </>
  );
};

/* 
  togglePanel width:
  less than 630: 305px and for transition they have been setting position to absolute and left to -currentWidth
  grater than 630: 213px same for transition
*/
