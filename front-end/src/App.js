import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Songs from "./components/Songs";

function App() {

  return (
    <Router>
    <div className="">
      <h1>Tuner App</h1>
    </div>
      <Routes>
      <Route path="/" element={<Songs />} />
    </Routes>
    </Router>
  );
}

export default App;
