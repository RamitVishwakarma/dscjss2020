import React from "react";
import Navbar from "./Navbar";
import World from "../assets/img/world.svg";
import { Route, Switch } from "react-router-dom";
import Team from "./Team";
import Projects from "./Projects";

function App() {
  return (
    <div className="main__app">
      <img src={World} className="world-img" alt="Banner" />
      <Route path="/" component={Navbar} />

      <Switch>
          
        <Route path="/team" component={Team} />
        <Route path="/projects" component={Projects} />

      </Switch>
    </div>
  );
}

export default App;
