import React from 'react';
import './SchoolNavbar.css';

const UserAvatarIcon = () => (
  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 22.3135C15.4525 22.3135 10.9375 17.7985 10.9375 12.251C10.9375 6.70348 15.4525 2.18848 21 2.18848C26.5475 2.18848 31.0625 6.70348 31.0625 12.251C31.0625 17.7985 26.5475 22.3135 21 22.3135ZM21 4.81348C16.905 4.81348 13.5625 8.15598 13.5625 12.251C13.5625 16.346 16.905 19.6885 21 19.6885C25.095 19.6885 28.4375 16.346 28.4375 12.251C28.4375 8.15598 25.095 4.81348 21 4.81348Z" fill="#F5F8FF"/>
    <path d="M36.0337 39.8125C35.3162 39.8125 34.7212 39.2175 34.7212 38.5C34.7212 32.4625 28.5612 27.5625 21.0012 27.5625C13.4412 27.5625 7.28125 32.4625 7.28125 38.5C7.28125 39.2175 6.68625 39.8125 5.96875 39.8125C5.25125 39.8125 4.65625 39.2175 4.65625 38.5C4.65625 31.0275 11.9887 24.9375 21.0012 24.9375C30.0137 24.9375 37.3462 31.0275 37.3462 38.5C37.3462 39.2175 36.7512 39.8125 36.0337 39.8125Z" fill="#F5F8FF"/>
  </svg>
);

const SchoolNavbar = () => {
  return (
    <nav className="school-navbar">
      <div className="navbar-container-inner">
        
        <div className="navbar-user-section">
          <div className="user-avatar-circle">
            <UserAvatarIcon />
          </div>
          <div className="user-details">
            <h3 className="user-name">Ahmed Mohamed</h3>
            <span className="user-role">Admin</span>
          </div>
        </div>

        <div className="navbar-school-section">
           <div className="school-logo-circle">
              <span className="school-name-text">Name of school</span>
           </div>
        </div>

      </div>
    </nav>
  );
};

export default SchoolNavbar;