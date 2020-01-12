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
          to={process.env.PUBLIC_URL + "/"}
        >
          Home
        </NavLink>
        <NavLink
          style={{ textDecoration: "none" }}
          className="navlink"
          to={process.env.PUBLIC_URL + "/about"}
        >
          About
        </NavLink>
        <NavLink
          style={{ textDecoration: "none" }}
          to={"/projects"}
          className="navlink"
        >
          Projects
        </NavLink>
        <NavLink
          style={{ textDecoration: "none" }}
          className="navlink"
          to={"/contact"}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
