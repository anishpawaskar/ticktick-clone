import { useSelector } from "react-redux";
import { selectAuth } from "./Auth/authSlice";
import { OptionsPanel } from "./OptionsPanel";
import { Sidebar } from "./Sidebar";
import { TaskControlPanel } from "./TaskControlPanel";
import { TaskDashboard } from "./TaskDashboard";

export const Task = () => {
  const { currentPage } = useSelector(selectAuth);

  return (
    <div className="h-screen flex">
      {currentPage === "/signup" && <OptionsPanel />}
      <Sidebar />
      <div className="flex overflow-hidden">
        <TaskControlPanel />
      </div>
      <div className="flex flex-col flex-auto p-4 border">
        <TaskDashboard />
      </div>
      <div className="hidden lg:flex lg:h-full lg:bg-slate-600 lg:w-[30%]"></div>
    </div>
  );
};
