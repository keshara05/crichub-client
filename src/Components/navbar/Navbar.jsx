import React from "react";
import "./navbar.css";
import logo from "../Assets/Cricketer logo.png"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <div className="navbar-logo">
          <img src={logo} alt="CricHub Logo" />
          <span className="logo-name">CricHub</span>
        </div>
      </Link>
      <ul className="navbar-links">
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/matches">Matches</Link>
        </li>
        <li>
          <Link to="/schedule">Schedule</Link>
        </li>
        <li>
          <Link to="/leaderboard">Leaderboard</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
      </ul>
      
    </nav>
  );
};

export default Navbar;
