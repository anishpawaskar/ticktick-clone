import { useSelector } from "react-redux";
import { selectAuth } from "./Auth/authSlice";
import { OptionsPanel } from "./OptionsPanel";
import { Sidebar } from "./Sidebar";
import { TaskControlPanel } from "./TaskControlPanel";
import { TaskDashboard } from "./TaskDashboard";
import { useState } from "react";

export const Task = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    console.log("toggleSidebar");
    setIsSidebarOpen((prevState) => !prevState);
  };
  const { currentPage } = useSelector(selectAuth);

  return (
    <div className="h-screen flex">
      {currentPage === "/signup" && <OptionsPanel />}
      <Sidebar />
      <div className="flex overflow-hidden">
        {/* {isSidebarOpen && (
          <div
            onClick={() => setIsSidebarOpen(false)}
            className="w-full h-full absolute top-0 left-0 z-10 sm:hidden"
          ></div>
        )} */}
        <TaskControlPanel isSidebarOpen={isSidebarOpen} />
      </div>
      <div className="flex flex-col flex-auto p-4 border">
        <TaskDashboard toggleSidebar={toggleSidebar} />
      </div>
      <div className="hidden lg:flex lg:h-full lg:bg-slate-600 lg:w-[30%]"></div>
    </div>
  );
};
