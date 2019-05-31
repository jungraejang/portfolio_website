import React from "react";
import { NavLink, nav } from "react-router-dom";
import { withRouter } from "react-router";
import "./NavBar.css";

 const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_links">
        <NavLink
          style={{ textDecoration: "none" }}
          className="navlink"
        >
          Home
        </NavLink>
        <NavLink
          style={{ textDecoration: "none" }}
          className="navlink"
        >
          About Me
        </NavLink>
        <NavLink
          style={{ textDecoration: "none" }}
          className="navlink"
        >
          Contact
        </NavLink>
        <NavLink
          style={{ textDecoration: "none" }}
          to={"/songs/bygenre"}
          className="navlink"
        >
          Projects
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar
