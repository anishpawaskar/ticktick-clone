import { useSelector } from "react-redux";
import { selectAuth } from "./Auth/authSlice";
import { OptionsPanel } from "./OptionsPanel";
import { Sidebar } from "./Sidebar";
import { TaskControlPanel } from "./TaskControlPanel";
import { TaskDashboard } from "./TaskDashboard";
import { selectTask } from "../store/taskSlice";
import { useGetScreenSize } from "../cusstomHooks/useGetScreeeSize";
import { TaskMarkdownController } from "./TaskMarkdownController";
import { TaskSearchModal } from "./TaskSearchModal";
import { selectActiveModal } from "./Modal/modalSlice";

export const Task = () => {
  const { currentPage } = useSelector(selectAuth);
  const { activeModal } = useSelector(selectActiveModal);
  //const { selectedTask } = useSelector(selectTask);
  const selectedTask = 1;
  const [screenSize] = useGetScreenSize();
  const isSearchVisible = true;

  return (
    <div className="h-screen flex">
      {currentPage === "/signup" && <OptionsPanel />}
      <Sidebar />
      <div className="flex">
        <TaskControlPanel />
      </div>
      <div className="flex flex-auto border-r">
        <TaskDashboard />
      </div>
      {!selectedTask && (
        <div className="hidden lg:flex lg:h-full lg:bg-white lg:w-[30%]"></div>
      )}
      <TaskMarkdownController />
      {activeModal === "searchModal" && <TaskSearchModal />}
    </div>
  );
};
