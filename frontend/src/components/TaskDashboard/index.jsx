import { TaskDashboardHeader } from "./components/TaskDashboardHeader";
import { TaskForm } from "./components/TaskForm";
import { Tasks } from "./components/Tasks";

export const TaskDashboard = () => {
  return (
    <div className="w-full">
      <TaskDashboardHeader title={"All"} />
      <TaskForm />
      <Tasks />
    </div>
  );
};
