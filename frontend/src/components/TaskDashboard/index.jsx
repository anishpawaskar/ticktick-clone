import { useState } from "react";
import { TaskDashboardHeader } from "./components/TaskDashboardHeader";
import { TaskForm } from "./components/TaskForm";
import { Tasks } from "./components/TasksList";

export const TaskDashboard = ({ toggleSidebar }) => {
  return (
    <div className="flex flex-col gap-4">
      <TaskDashboardHeader toggleSidebar={toggleSidebar} title={"All"} />
      <TaskForm />
      <Tasks />
    </div>
  );
};
