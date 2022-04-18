import React from "react";
import World from "../assets/img/world.svg";
import { Route, Switch } from "react-router-dom";
import Team from "./Team";
import Projects from "./Projects";
// import NavbarDefault from "./NavbarDefault";
import Home from "./Home";
import Events from "./Events";
import Alumni from "./Alumni";
import Recruitment from "./Recruitment";

function App() {
 
  console.log(window.location.pathname === '/recruitment')
  return (
    <div className="main__app">
      <img src={World} className="world-img" alt="Banner" />
      {/* <NavbarDefault /> */}

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/alumni" component={Alumni} />
        <Route exact path="/recruitment" component={Recruitment} />
      </Switch>
      {/* {window.location.pathname !== '/recruitment' ? <Footer /> : null} */}
      
    </div>
  );
}

export default App;
