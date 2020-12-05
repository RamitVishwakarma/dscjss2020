import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar({ isOpen, handleOpen }) {
  return (
    <div className={isOpen ? "sidebar-container" : "sidebar-closed"}>
      {isOpen ? (
        <div className="sidebar">
          <div className="sidebar-links">
            <NavLink
              exact
              activeClassName="selected_link"
              to="/"
              onClick={() => handleOpen(!isOpen)}
            >
              <span style={{ color: "#4285F4" }}> Home</span>
            </NavLink>
            <NavLink
              exact
              activeClassName="selected_link"
              to="/projects"
              onClick={() => handleOpen(!isOpen)}
            >
              <span style={{ color: "#DB4437" }}> Projects</span>
            </NavLink>
            <NavLink
              exact
              activeClassName="selected_link"
              to="/team"
              onClick={() => handleOpen(!isOpen)}
            >
              <span style={{ color: "#F4B400" }}> Team</span>
            </NavLink>
            <NavLink
              exact
              activeClassName="selected_link"
              to="/events"
              onClick={() => handleOpen(!isOpen)}
            >
              <span style={{ color: "#0F9D58" }}> Events</span>
            </NavLink>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
