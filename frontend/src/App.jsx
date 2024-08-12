import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Auth } from "./components/Auth";
import { Task } from "./components/task";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Auth />} />
        <Route path="/signin" element={<Auth />} />
        <Route path="/task" element={<Task />} />
      </Routes>
    </>
  );
}

export default App;
