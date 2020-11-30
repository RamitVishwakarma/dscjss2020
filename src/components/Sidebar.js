import React, { useState } from "react";
import { IconContext } from "react-icons";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Sidebar() {
  const [isOpen, handleOpen] = useState(false);
  return (
    <div className={isOpen ? "sidebar-container" : "sidebar-closed"}>
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

      {isOpen ? (
        <div className="sidebar">
          <div className="sidebar-links">
            <NavLink exact activeClassName="selected_link" to="/">
              Home
            </NavLink>
            <NavLink exact activeClassName="selected_link" to="/courses">
              Courses
            </NavLink>
            <NavLink exact activeClassName="selected_link" to="/about">
              About
            </NavLink>
            <NavLink exact activeClassName="selected_link" to="/contact">
              Contact
            </NavLink>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
