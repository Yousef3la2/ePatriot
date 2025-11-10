import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";


const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showOurStory, setOurStory] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <nav className={`navbar-container ${isMenuOpen ? "menu-active" : ""}`}>
      <div className="navbar-left">
        <img src={logo} alt="Patroit Logo" className="navbar-logo" />
        <span className="navbar-title">Patroit </span>
      </div>
      <div className="navbar-center">
        <ul className="navbar-ul">
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li
            className="dropdown"
            onClick={() => {
              setShowCategories(!showCategories);
              setOurStory(false);
            }}
          >
            <span>
              <SlArrowDown className="navbar-arrow" /> Categories
            </span>
            {showCategories && (
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Technology</a>
                </li>
                <li>
                  <a href="#">Politics</a>
                </li>
                <li>
                  <a href="#">Sports</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#">Subscribe</a>
          </li>
          <li
            className="dropdown"
            onClick={() => {
              setOurStory(!showOurStory);
              setShowCategories(false);
            }}
          >
            <span>
              <SlArrowDown className="navbar-arrow" /> Our Story
            </span>
            {showOurStory && (
              <ul className="dropdown-menu">
                <li>
                  <a href="#"> Our Story</a>
                </li>
                <li>
                  <a href="#"> Join Us </a>
                </li>
              </ul>
            )}
          </li>
          <li className="mobile-auth-buttons">
            <Link to="/login" className="login-btn">
              Login
            </Link>
          </li>
          <li className="mobile-auth-buttons">
            <Link to="/signup" className="signup-btn">
              Signup
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <Link to="/login" className="login-btn">
          Login
        </Link>
        <Link to="/signup" className="signup-btn">
          Signup
        </Link>
      </div>
      <button
        className="burger-menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>
    </nav>
  );
};


export default Navbar;