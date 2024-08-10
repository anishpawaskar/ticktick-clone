import { Link, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/singup" element={<p>Sign Up Page</p>} />
        <Route
          path="/"
          element={
            <div>
              <h1>Tick tick clone</h1>
              <Link to="/singup">To Sign Up</Link>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
