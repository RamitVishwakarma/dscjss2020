import React from "react";
import World from "../assets/img/world.svg";
import { Route, Switch } from "react-router-dom";
import Team from "./Team";
import Projects from "./Projects";
import NavbarDefault from "./NavbarDefault";
import Home from "./Home";
import Footer from "./Footer";
import Events from "./Events";
import Alumni from "./Alumni";

function App() {
  return (
    <div className="main__app">
      <img src={World} className="world-img" alt="Banner" />
      <NavbarDefault />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/alumni" component={Alumni} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
