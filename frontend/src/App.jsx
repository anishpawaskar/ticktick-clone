import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Auth } from "./components/Auth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Auth />} />
        <Route path="/signin" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
