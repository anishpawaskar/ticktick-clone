import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { TaskControlList } from "./components/TaskControlList";
import { toggleControlPanel } from "../../store/taskSlice";
import { TaskControlPanelAccordion } from "./components/TaskControlPanelAccordion";
import { useGetScreenSize } from "../../cusstomHooks/useGetScreeeSize";
import { selectActiveModal, toggleModal } from "../Modal/modalSlice";
import { ProjectFrom } from "../PopupForm/ProjectForm";
import { selectProject } from "../../store/slices/projectSlice";
import { DeleteForm } from "../PopupForm/DeleteForm";
import { CustomAccordion } from "../CustomAccordion";
import { ListsAccordion } from "../ControlPanelAccordions/ListsAccordion";
import { ArchiveListAccordion } from "../ControlPanelAccordions/ArchiveListsAccordion";

export const TaskControlPanelPresentation = ({
  isControlPanelVisible,
  overviewList,
}) => {
  const { activeModal } = useSelector(selectActiveModal);
  const { projects } = useSelector(selectProject);
  const dispatch = useDispatch();

  const [screenSize] = useGetScreenSize();

  useEffect(() => {
    if (screenSize.width > 630) {
      dispatch(toggleControlPanel(true));
    } else {
      dispatch(toggleControlPanel(false));
    }
  }, [screenSize.width]);

  return (
    <>
      <div
        className={`${
          isControlPanelVisible ? "block" : "hidden"
        } fixed top-0 left-0 xs:left-[50px] xs:w-[50%] xs:shadow-lg bg-white w-[305px] z-[100] h-full  ${
          isControlPanelVisible ? "sm:block" : "sm:hidden"
        } sm:static sm:w-[213px] sm:z-0 sm:shadow-none border-r`}
      >
        <TaskControlList lists={overviewList} />
        <hr className="my-4" />
        <ListsAccordion />
        <ArchiveListAccordion />
      </div>
      {!isControlPanelVisible && (
        <div
          className={`${
            isControlPanelVisible ? "hidden" : "block"
          } top-0 left-0 w-full h-full z-[70] bg-red-400`}
        ></div>
      )}
      {isControlPanelVisible && screenSize.width < 630 && (
        <div
          onClick={() => dispatch(toggleControlPanel(!isControlPanelVisible))}
          className={`absolute top-0 ${
            screenSize.width < 630 && "left-[50px]"
          } ${screenSize.width < 500 && "left-0"} z-[70] w-full h-full`}
        ></div>
      )}
      {activeModal === "projectForm" && (
        <ProjectFrom isActive={activeModal === "projectForm"} />
      )}
    </>
  );
};
