import { useSelector } from "react-redux";
import { selectAuth } from "./Auth/authSlice";
import { OptionsPanel } from "./OptionsPanel";
import { Sidebar } from "./Sidebar";
import { TaskControlPanel } from "./TaskControlPanel";
import { TaskDashboard } from "./TaskDashboard";
import { TaskMarkdownController } from "./TaskMarkdownController";
import { selectTask } from "../store/taskSlice";
import { useGetScreenSize } from "../cusstomHooks/useGetScreeeSize";

export const Task = () => {
  const { currentPage } = useSelector(selectAuth);
  const { selectedTask } = useSelector(selectTask);
  const [screenSize] = useGetScreenSize();

  return (
    <div className="h-screen flex">
      {currentPage === "/signup" && <OptionsPanel />}
      <Sidebar />
      <div className="flex">
        <TaskControlPanel />
      </div>
      <div className="flex flex-col flex-auto p-4 border-r">
        <TaskDashboard />
      </div>
      {!selectedTask && (
        <div className="hidden lg:flex lg:h-full lg:bg-white lg:w-[30%]"></div>
      )}
      {selectedTask && screenSize.width > 950 && <TaskMarkdownController />}
    </div>
  );
};
