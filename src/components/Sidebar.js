import React from "react";
import { NavLink } from "react-router-dom";


export default function Sidebar({isOpen}) {
  return (
    <div className={isOpen ? "sidebar-container" : "sidebar-closed"}>
      
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
