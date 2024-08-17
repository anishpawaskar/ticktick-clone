import { useSelector } from "react-redux";
import { selectAuth } from "./Auth/authSlice";
import { OptionsPanel } from "./OptionsPanel";
import { Sidebar } from "./Sidebar";
import { TaskControlPanel } from "./TaskControlPanel";

export const Task = () => {
  const { currentPage } = useSelector(selectAuth);

  return (
    <div className="h-screen flex">
      {currentPage === "/signup" && <OptionsPanel />}
      <Sidebar />
      <div className="flex flex-auto overflow-hidden">
        <TaskControlPanel />
      </div>
    </div>
  );
};
