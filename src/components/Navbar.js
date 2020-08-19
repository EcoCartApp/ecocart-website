// Based off example here: https://www.ibrahima-ndaw.com/blog/build-a-sticky-nav-with-react/
// sticky effect found in "../hooks/useSticky.js"

import React from "react";
import logo from "../img/logo.svg";
import "../stylesheets/Navbar.css";
import "../App.css";

const Navbar = ({ sticky }) => (
  <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
    <div className="navbar--logo-holder">
      {sticky ? (
        <div className="nav-row">
          <img src={logo} alt="logo" className="navbar--logo" />
          <a
            className="btn navbar-button"
            size="small"
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Add to Chrome</strong> — It's Free!
          </a>
        </div>
      ) : null}
    </div>
  </nav>
);
export default Navbar;
