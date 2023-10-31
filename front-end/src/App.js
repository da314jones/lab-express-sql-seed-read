import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Songs from "./components/Songs";
import SongsDetail from "./components/SongsDetail";

function App() {

  return (
    <Router>
    <div className="">
      <h1>Tuner App</h1>
    </div>
      <Routes>
      <Route path="/" element={<Songs />} />
      <Route path="/songs/:id" element={<SongsDetail />} />
    </Routes>
    </Router>
  );
}

export default App;
