import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../layout/SchoolLogin.css";

import Navbar from "../layout/Navbar";

import { CourthouseIcon, LockIcon, EyeIcon, ArrowIcon } from "../ui/Icons.jsx";

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