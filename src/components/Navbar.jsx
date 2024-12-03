import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"; // Assuming you're using a separate CSS file for the navbar

const Navbar = () => {
  return (
    <div className="navbar">
      <img src="/logo.webp" alt="Logo" className="navbar-logo" />

      <ul className="navbar-list">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
