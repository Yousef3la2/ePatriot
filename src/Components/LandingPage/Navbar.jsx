import React from "react";
import logo from "../../assets/logo.png";
import { SlArrowDown } from "react-icons/sl";
import "../LandingPage.css";

const Navbar = ({ isMenuOpen, setIsMenuOpen, showCategories, setShowCategories, showOurStory, setOurStory }) => (
  <nav className={`navbar-container ${isMenuOpen ? "menu-active" : ""}`}>
    <div className="navbar-left">
      <img src={logo} alt="Patroit Logo" className="navbar-logo" />
      <span className="navbar-title">Patroit </span>
    </div>
    <button className="burger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
      ☰
    </button>
    <div className="navbar-center">
      <ul className="navbar-ul">
        <li><a href="#">Home Page</a></li>
        <li className="dropdown" onClick={() => { setShowCategories(!showCategories); setOurStory(false); }}>
          <span><SlArrowDown className="navbar-arrow" /> Categories </span>
          {showCategories && (
            <ul className="dropdown-menu">
              <li><a href="#">Technology</a></li>
              <li><a href="#">Politics</a></li>
              <li><a href="#">Sports</a></li>
            </ul>
          )}
        </li>
        <li><a href="#">Subscribe</a></li>
        <li className="dropdown" onClick={() => { setOurStory(!showOurStory); setShowCategories(false); }}>
          <span><SlArrowDown className="navbar-arrow" /> Our Story</span>
          {showOurStory && (
            <ul className="dropdown-menu">
              <li><a href="#"> Our Story</a></li>
              <li><a href="#"> Join Us </a></li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
