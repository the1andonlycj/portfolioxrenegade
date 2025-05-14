import { useState } from "react";
import { Route, Routes } from "react-router-dom";
// import Home from "./Home";
import Renegade from "./Renegade";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Renegade />} />
        {/* <Route path="/renegade" element={<Renegade />} /> */}
      </Routes>
    </>
  );
}

export default App;
