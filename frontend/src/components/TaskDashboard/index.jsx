import { TaskDashboardHeader } from "./components/TaskDashboardHeader";
import { TaskForm } from "./components/TaskForm";

export const TaskDashboard = () => {
  return (
    <div className="flex flex-col gap-4">
      <TaskDashboardHeader title={"All"} />
      <TaskForm />
    </div>
  );
};
