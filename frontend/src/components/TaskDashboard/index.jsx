import { useState } from "react";
import { TaskDashboardHeader } from "./components/TaskDashboardHeader";
import { TaskForm } from "./components/TaskForm";
import { Tasks } from "./components/TasksList";

export const TaskDashboard = () => {
  return (
    <div className="flex flex-col gap-4">
      <TaskDashboardHeader title={"All"} />
      <TaskForm />
      <Tasks />
    </div>
  );
};
