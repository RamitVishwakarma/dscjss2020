import React from "react";
import World from "../assets/img/world.svg";
import { Route, Routes } from "react-router-dom";
import Team from "./Team";
import Projects from "./Projects";
// import NavbarDefault from "./NavbarDefault";
import Home from "./Home";
import Events from "./Events";
import Alumni from "./Alumni";
import Recruitment from "./Recruitment";

function App() {
  // console.log(window.location.pathname === "/recruitment");
  return (
    <div className="main__app">
      <img src={World} className="world-img" alt="Banner" />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/events" element={<Events />} />
        <Route exact path="/alumni" element={<Alumni />} />
        <Route exact path="/recruitment" element={<Recruitment />} />
      </Routes>
    </div>
  );
}

export default App;
