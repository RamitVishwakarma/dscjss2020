import React from "react";
import World from "../assets/img/world.svg";
import { Route, Switch } from "react-router-dom";
import Team from "./Team";
import Projects from "./Projects";
import NavbarDefault from "./NavbarDefault";

function App() {
  return (
    <div className="main__app">
      <img src={World} className="world-img" alt="Banner" />
      <Route path="/" component={NavbarDefault} />

      <Switch>
          
        <Route path="/team" component={Team} />
        <Route path="/projects" component={Projects} />

      </Switch>
    </div>
  );
}

export default App;
