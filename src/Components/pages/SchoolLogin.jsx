import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../layout/SchoolLogin.css";

import Navbar from "../layout/Navbar";

// ------------------- Icons Components -------------------
const CourthouseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 21.2499H20.75V10.9999C20.75 8.57994 19.42 7.24994 17 7.24994H12.75V6.01994C13.33 6.15994 13.91 6.23994 14.5 6.23994C15.44 6.23994 16.38 6.05994 17.28 5.69994C17.56 5.58994 17.75 5.30994 17.75 4.99994V1.99994C17.75 1.74994 17.63 1.51994 17.42 1.37994C17.21 1.23994 16.95 1.20994 16.72 1.29994C15.29 1.86994 13.71 1.86994 12.28 1.29994C12.05 1.20994 11.79 1.23994 11.58 1.37994C11.37 1.51994 11.25 1.74994 11.25 1.99994V4.99994V7.24994H7C4.58 7.24994 3.25 8.57994 3.25 10.9999V21.2499H2C1.59 21.2499 1.25 21.5899 1.25 21.9999C1.25 22.4099 1.59 22.7499 2 22.7499H4H20H22C22.41 22.7499 22.75 22.4099 22.75 21.9999C22.75 21.5899 22.41 21.2499 22 21.2499ZM7.24 21.2499H4.75V12.7499H7.24V21.2499ZM11.24 21.2499H8.74V12.7499H11.24V21.2499ZM15.24 21.2499H12.74V12.7499H15.24V21.2499ZM19.25 21.2499H16.74V12.7499H19.25V21.2499Z" fill="#555555"/>
  </svg>
);

const LockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.9991 17.3501C12.8994 17.3501 13.6291 16.6203 13.6291 15.7201C13.6291 14.8199 12.8994 14.0901 11.9991 14.0901C11.0989 14.0901 10.3691 14.8199 10.3691 15.7201C10.3691 16.6203 11.0989 17.3501 11.9991 17.3501Z" fill="#555555"/>
    <path d="M18.28 9.53V8.28C18.28 5.58 17.63 2 12 2C6.37 2 5.72 5.58 5.72 8.28V9.53C2.92 9.88 2 11.3 2 14.79V16.65C2 20.75 3.25 22 7.35 22H16.65C20.75 22 22 20.75 22 16.65V14.79C22 11.3 21.08 9.88 18.28 9.53ZM12 18.74C10.33 18.74 8.98 17.38 8.98 15.72C8.98 14.05 10.34 12.7 12 12.7C13.66 12.7 15.02 14.06 15.02 15.72C15.02 17.39 13.67 18.74 12 18.74ZM7.35 9.44C7.27 9.44 7.2 9.44 7.12 9.44V8.28C7.12 5.35 7.95 3.4 12 3.4C16.05 3.4 16.88 5.35 16.88 8.28V9.45C16.8 9.45 16.73 9.45 16.65 9.45H7.35V9.44Z" fill="#555555"/>
  </svg>
);

const ArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.9995 16.7999C11.2995 16.7999 10.5995 16.5299 10.0695 15.9999L3.54953 9.47989C3.25953 9.18989 3.25953 8.70989 3.54953 8.41989C3.83953 8.12989 4.31953 8.12989 4.60953 8.41989L11.1295 14.9399C11.6095 15.4199 12.3895 15.4199 12.8695 14.9399L19.3895 8.41989C19.6795 8.12989 20.1595 8.12989 20.4495 8.41989C20.7395 8.70989 20.7395 9.18989 20.4495 9.47989L13.9295 15.9999C13.3995 16.5299 12.6995 16.7999 11.9995 16.7999Z" fill="#555555"/>
  </svg>
);

const EyeIcon = ({ isVisible }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.9999 16.3299C9.60992 16.3299 7.66992 14.3899 7.66992 11.9999C7.66992 9.60992 9.60992 7.66992 11.9999 7.66992C14.3899 7.66992 16.3299 9.60992 16.3299 11.9999C16.3299 14.3899 14.3899 16.3299 11.9999 16.3299ZM11.9999 9.16992C10.4399 9.16992 9.16992 10.4399 9.16992 11.9999C9.16992 13.5599 10.4399 14.8299 11.9999 14.8299C13.5599 14.8299 14.8299 13.5599 14.8299 11.9999C14.8299 10.4399 13.5599 9.16992 11.9999 9.16992Z" fill={isVisible ? "#007bff" : "#A6A6A6"}/>
    <path d="M12.0001 21.02C8.24008 21.02 4.69008 18.82 2.25008 15C1.19008 13.35 1.19008 10.66 2.25008 8.99998C4.70008 5.17998 8.25008 2.97998 12.0001 2.97998C15.7501 2.97998 19.3001 5.17998 21.7401 8.99998C22.8001 10.65 22.8001 13.34 21.7401 15C19.3001 18.82 15.7501 21.02 12.0001 21.02ZM12.0001 4.47998C8.77008 4.47998 5.68008 6.41998 3.52008 9.80998C2.77008 10.98 2.77008 13.02 3.52008 14.19C5.68008 17.58 8.77008 19.52 12.0001 19.52C15.2301 19.52 18.3201 17.58 20.4801 14.19C21.2301 13.02 21.2301 10.98 20.4801 9.80998C18.3201 6.41998 15.2301 4.47998 12.0001 4.47998Z" fill={isVisible ? "#007bff" : "#A6A6A6"}/>
  </svg>
);

// ------------------- Main Component -------------------
const SchoolLogin = () => {
  const navigate = useNavigate(); // initialize hook
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const dropdownRef = useRef(null);

  // Dummy Data for schools (Notice I used a placeholder image URL for the list items)
  // You can replace the 'img' src with your real logos
  const schools = [
    { id: 1, name: "Cairo English School" },
    { id: 2, name: "British International School" },
    { id: 3, name: "Modern Academy" },
    { id: 4, name: "Smart Village School" },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (school) => {
    setSelectedSchool(school);
    setIsOpen(false);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/school-dashboard");
  };

  return (
    <>
      <Navbar />
    
    <div className="login-wrapper">
      <div className="login-container">
        
        <div className="tabs-header">
          <button className="tab-btn inactive">Register as a Teacher</button>
          <button className="tab-btn active">Register as a Admin</button>
        </div>

        
        <div className="form-card">
          <h2 className="form-title">Admin Login</h2>
          <p className="form-subtitle">Please enter your details to continue</p>

          <form className="login-form" onSubmit={handleLogin}>
            
            
            <div className="input-group">
              <label>School Name</label>
              <div className="custom-select-container" ref={dropdownRef}>
                <div 
                  className={`select-trigger ${isOpen ? 'open' : ''}`} 
                  onClick={toggleDropdown}
                >
                  <div className="trigger-left">
                    <span className="icon-wrapper"><CourthouseIcon /></span>
                    <span className={`selected-text ${selectedSchool ? 'active' : ''}`}>
                      {selectedSchool ? selectedSchool.name : "Select Your School"}
                    </span>
                  </div>
                  <span className={`arrow-wrapper ${isOpen ? 'rotated' : ''}`}>
                    <ArrowIcon />
                  </span>
                </div>

                
                {isOpen && (
                  <div className="dropdown-menu">
                    {schools.map((school) => (
                      <div 
                        key={school.id} 
                        className="dropdown-item" 
                        onClick={() => handleSelect(school)}
                      >
                         
                        <img 
                          src="https://via.placeholder.com/30?text=S" 
                          alt=" " 
                          className="school-list-logo"
                        /> 
                        <span>{school.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            
            <div className="input-group">
              <label>Password</label>
              <div className="password-wrapper">
                <span className="icon-wrapper left"><LockIcon /></span>
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Password"
                  className="custom-input"
                />
                <button 
                  type="button"
                  className="icon-wrapper right eye-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <EyeIcon isVisible={showPassword} />
                </button>
              </div>
            </div>

            
            <button type="submit" className="submit-btn">Login</button>

          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default SchoolLogin;