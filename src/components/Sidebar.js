import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar({ isOpen }) {
  return (
    <div className={isOpen ? "sidebar-container" : "sidebar-closed"}>
      {isOpen ? (
        <div className="sidebar">
          <div className="sidebar-links">
            <NavLink exact activeClassName="selected_link" to="/">
              <span style={{ color: "#4285F4" }}> Home</span>
            </NavLink>
            <NavLink exact activeClassName="selected_link" to="/projects">
              <span style={{ color: "#DB4437" }}> Projects</span>
            </NavLink>
            <NavLink exact activeClassName="selected_link" to="/team">
              <span style={{ color: "#F4B400" }}> Team</span>
            </NavLink>
            <NavLink exact activeClassName="selected_link" to="/events">
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
