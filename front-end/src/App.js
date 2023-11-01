import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Songs from "./components/Songs";
import SongsDetail from "./components/SongsDetail";
import SongsEditForm from "./components/SongsEditForm";
import SongsNewForm from "./components/SongsNewForm"
import NavBar from "./components/NavBar";

function App() {

  return (
    <Router>
      <NavBar />
    <div className="">
      <h1>Tuner App</h1>
    </div>
      <Routes>
      <Route path="/songs" element={<Songs />} />
      <Route path="/songs/:id" element={<SongsDetail />} />
      <Route path="/songs/:id/edit" element={<SongsEditForm />} />
      <Route path="/songs/new" element={<SongsNewForm />} />
    </Routes>
    </Router>
  );
}

export default App;
