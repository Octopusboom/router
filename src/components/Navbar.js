import React from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        {/* <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li> */}

        {/* <NavLink /> is used for navigation when you want to highlight the active route */}
        <li>
          {/* Exact was use in V5 and lower to tell the match the exact path */}
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          {/* activeClassName is automaticaly given behind the scenes it was removed from router V6 */}
          {/* <NavLink to="/contact" activeClassName="selected">
            Contact
          </NavLink> */}

          {/* isActive parameter in React Router's <NavLink> component is implicit and provided automatically 
            by React Router v6 or later. */}
          <NavLink
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "selected" : "active")}
          >
            Blog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
