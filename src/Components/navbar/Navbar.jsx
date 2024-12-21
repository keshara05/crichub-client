import React from "react";
import "./navbar.css";
import logo from "../Assets/Cricketer logo.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/dashboard">
      <div className="navbar-logo">
      <img src={logo} alt="CricHub Logo" />
        <span className="logo-name">CricHub</span>
      </div></a>
      <ul className="navbar-links">
      <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/matches">Matches</a></li>
        <li><a href="/schedule">Schedule</a></li>
        <li><a href="/leaderboard">Leaderboard</a></li>
        <li><a href="/news">News</a></li>
      </ul>
      
    </nav>
  );
};

export default Navbar;
