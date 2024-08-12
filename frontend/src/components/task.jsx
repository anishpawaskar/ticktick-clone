import { useSelector } from "react-redux";
import { selectAuth } from "./Auth/authSlice";
import { OptionsPanel } from "./OptionsPanel";

export const Task = () => {
  const { currentPage } = useSelector(selectAuth);

  return (
    <div>
      <h1 className="text-7xl text-center">Task</h1>
      {currentPage === "/signup" && <OptionsPanel />}
    </div>
  );
};
