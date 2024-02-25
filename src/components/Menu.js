//Angelica Lindström NET23
import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="container">
      <h2>Angelica Lindström</h2>
      <div className="menu-bar">
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/cv" className="nav-link">
              Cv
            </Link>
          </li>
          <li>
            <Link to="/project" className="nav-link">
              Project
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Menu;
