import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.svg";
import { useLocation } from "react-router-dom";
import MediaQuery from "react-responsive";
import Sidebar from "./Sidebar";
import { IconContext } from "react-icons";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function NavbarDefault() {
  const [isOpen, handleOpen] = useState(false);
  const location = useLocation();
  return (
    <div className={isOpen ? "navbar__main navbar__stretch" : "navbar__main"}>
      <img src={Logo} alt="dscjss" />
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

        <Sidebar isOpen={isOpen} handleOpen={handleOpen} />
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
        <Link
          to="/register"
          className={`nav__links primary-btn ${
            location.pathname === "/register" ? "active_link" : ""
          }`}
        >
          Register
        </Link>
        {/* <a
          href="https://www.instagram.com/dscjssaten/"
          className="nav__links primary-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect
        </a> */}
      </div>
    </div>
  );
}

export default NavbarDefault;
