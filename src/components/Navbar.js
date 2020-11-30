import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.svg";
import { useLocation } from "react-router-dom";
import MediaQuery from "react-responsive";
import Sidebar from "./Sidebar";
import { IconContext } from "react-icons";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
    const [isOpen,handleOpen]=useState(false);
  const location = useLocation();
  return (
    <div className="navbar__main">
      <img src={Logo} alt="" />
      <MediaQuery maxDeviceWidth={990}>
        {isOpen ? (
          <IconContext.Provider value={{ className: "menu-icon close" }}>
            <div>
              <AiOutlineClose onClick={() => handleOpen(!isOpen)} />
            </div>
          </IconContext.Provider>
        ) : (
          <IconContext.Provider value={{ className: "menu-icon open" }}>
            <div>
              <AiOutlineMenu onClick={() => handleOpen(!isOpen)} />
            </div>
          </IconContext.Provider>
        )}

        <Sidebar />
      </MediaQuery>
      <div className="navbar__content">
        <Link
          to="/"
          className={`nav__links ${
            location.pathname === "/" ? "active_link" : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/projects"
          className={`nav__links ${
            location.pathname === "/projects" ? "active_link" : ""
          }`}
        >
          Projects
        </Link>
        <Link
          to="/team"
          className={`nav__links ${
            location.pathname === "/team" ? "active_link" : ""
          }`}
        >
          Team
        </Link>
        <Link
          to="/events"
          className={`nav__links ${
            location.pathname === "/events" ? "active_link" : ""
          }`}
        >
          Events
        </Link>
        <Link to="/" className="nav__links primary-btn">
          Connect
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
