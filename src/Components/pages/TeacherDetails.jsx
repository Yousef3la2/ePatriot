import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SchoolNavbar from '../layout/SchoolNavbar';
import Footer from '../layout/Footer';
import '../layout/TeacherDetails.css';
import { teachersList } from '../../data/teachersData';
import { HeaderDecor, ArrowRightMIcon } from '../ui/Icons.jsx';

const TeacherDetails = () => {
  const { id } = useParams();
  const teacher = teachersList.find(t => t.id === parseInt(id));
  const [isActive, setIsActive] = useState(true);
  const [pinCode, setPinCode] = useState('');
  const [showPin, setShowPin] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [lessonToDelete, setLessonToDelete] = useState(null);
  const [activeTab, setActiveTab] = useState('assigned');
  const [searchLesson, setSearchLesson] = useState('');
  const [selectedStage, setSelectedStage] = useState('all');
  const [selectedLessonFilter, setSelectedLessonFilter] = useState('all');
  const [calendarView, setCalendarView] = useState('week');
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 0, 1)); // January 2025

  const handleDeleteClick = (lessonId, lessonTitle) => {
    setLessonToDelete({ id: lessonId, title: lessonTitle });
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    // هنا يتم حذف الدرس
    console.log('Deleting lesson:', lessonToDelete);
    setShowDeleteModal(false);
    setLessonToDelete(null);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setLessonToDelete(null);
  };

  if (!teacher) {
    return <div>Teacher not found</div>;
  }

  return (
    <>
      <SchoolNavbar />
      
      <div className="teacher-details-page">
        <header className="teacher-details-header">
          <div className="header-content-inner">
            <h1>Teacher Details</h1>
            <div className="breadcrumb">
              <Link 
                to="/school-dashboard" 
                className="breadcrumb-link"
                style={{ color: 'rgb(64, 64, 64)', textDecoration: 'none' }}
              >
                School Management center
              </Link>
              <ArrowRightMIcon />
              <Link 
                to="/teachers" 
                className="breadcrumb-link"
                style={{ color: 'rgb(64, 64, 64)', textDecoration: 'none' }}
              >
                Teachers
              </Link>
              <ArrowRightMIcon />
              <span className="active-page">Teacher Details</span>
            </div>
          </div>
          
          <div className="header-decor">
            <HeaderDecor />
          </div>
        </header>

        <div className="teacher-details-container">
          {/* Teacher Info Card */}
          <div className="teacher-info-card">
            <img src={teacher.img} alt={teacher.name} className="teacher-details-img" />
            <div className="teacher-main-info">
              <h2>{teacher.name}</h2>
              <p className="teacher-level">{teacher.level}</p>
              <div className="teacher-contact">
                <span className="contact-item">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.66667 2.66667H13.3333C14.0667 2.66667 14.6667 3.26667 14.6667 4V12C14.6667 12.7333 14.0667 13.3333 13.3333 13.3333H2.66667C1.93333 13.3333 1.33333 12.7333 1.33333 12V4C1.33333 3.26667 1.93333 2.66667 2.66667 2.66667Z" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14.6667 4L8 8.66667L1.33333 4" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  mohamed.ahmed@school.edu
                </span>
                <span className="contact-item">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.6667 11.28V13.28C14.6675 13.4657 14.6294 13.6494 14.555 13.8195C14.4807 13.9897 14.3716 14.1424 14.2348 14.2679C14.0979 14.3934 13.9364 14.489 13.7605 14.5485C13.5847 14.608 13.3983 14.6301 13.2133 14.6133C11.1619 14.3904 9.19137 13.6894 7.46 12.5667C5.84919 11.5431 4.48353 10.1774 3.46 8.56666C2.33334 6.82745 1.6322 4.84731 1.41333 2.78666C1.39667 2.60228 1.41862 2.41649 1.4777 2.24107C1.53679 2.06564 1.63175 1.90444 1.75655 1.76773C1.88134 1.63102 2.03324 1.52179 2.20256 1.44703C2.37189 1.37227 2.55493 1.33364 2.74 1.33333H4.74C5.06353 1.33013 5.37716 1.4447 5.62248 1.65568C5.8678 1.86665 6.02802 2.15961 6.07333 2.48C6.15774 3.12004 6.31428 3.74848 6.54 4.35333C6.62974 4.59193 6.64908 4.85126 6.59591 5.10058C6.54274 5.34989 6.41928 5.57872 6.24 5.76L5.39333 6.60666C6.34238 8.27568 7.72431 9.65761 9.39333 10.6067L10.24 9.76C10.4213 9.58072 10.6501 9.45726 10.8994 9.40409C11.1487 9.35092 11.4081 9.37026 11.6467 9.46C12.2515 9.68572 12.88 9.84226 13.52 9.92666C13.8438 9.97234 14.1396 10.1355 14.3511 10.385C14.5625 10.6345 14.6748 10.953 14.6667 11.28Z" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  0123456789
                </span>
                <span className="contact-item">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 6.66667C14 11.3333 8 15.3333 8 15.3333C8 15.3333 2 11.3333 2 6.66667C2 5.07536 2.63214 3.54925 3.75736 2.42403C4.88258 1.29881 6.4087 0.666672 8 0.666672C9.5913 0.666672 11.1174 1.29881 12.2426 2.42403C13.3679 3.54925 14 5.07536 14 6.66667Z" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 8.66667C9.10457 8.66667 10 7.77124 10 6.66667C10 5.5621 9.10457 4.66667 8 4.66667C6.89543 4.66667 6 5.5621 6 6.66667C6 7.77124 6.89543 8.66667 8 8.66667Z" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Joined on: March 15, 2025
                </span>
              </div>
            </div>
          </div>

          <div className="details-grid">
            {/* Educational Stage Section */}
            <div className="details-section educational-stage">
              <div className="section-header">
                <h3>The assigned educational stage</h3>
                <button className="edit-btn">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.33333 2.66666H2.66667C2.31304 2.66666 1.97391 2.80714 1.72386 3.05719C1.47381 3.30724 1.33333 3.64637 1.33333 3.99999V13.3333C1.33333 13.687 1.47381 14.0261 1.72386 14.2761C1.97391 14.5262 2.31304 14.6667 2.66667 14.6667H12C12.3536 14.6667 12.6928 14.5262 12.9428 14.2761C13.1929 14.0261 13.3333 13.687 13.3333 13.3333V8.66666" stroke="#FF8A00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.3333 1.66665C12.5986 1.40144 12.9582 1.25244 13.3333 1.25244C13.7085 1.25244 14.0681 1.40144 14.3333 1.66665C14.5985 1.93187 14.7475 2.29147 14.7475 2.66665C14.7475 3.04184 14.5985 3.40144 14.3333 3.66665L8 9.99999L5.33333 10.6667L6 7.99999L12.3333 1.66665Z" stroke="#FF8A00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <div className="stages-grid">
                <div className="stage-item">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6667 2.5H3.33333C2.41286 2.5 1.66667 3.24619 1.66667 4.16667V15.8333C1.66667 16.7538 2.41286 17.5 3.33333 17.5H16.6667C17.5871 17.5 18.3333 16.7538 18.3333 15.8333V4.16667C18.3333 3.24619 17.5871 2.5 16.6667 2.5Z" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.66667 7.5H13.3333" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.66667 12.5H13.3333" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>First Year of Middle School</span>
                </div>
                <div className="stage-item">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6667 2.5H3.33333C2.41286 2.5 1.66667 3.24619 1.66667 4.16667V15.8333C1.66667 16.7538 2.41286 17.5 3.33333 17.5H16.6667C17.5871 17.5 18.3333 16.7538 18.3333 15.8333V4.16667C18.3333 3.24619 17.5871 2.5 16.6667 2.5Z" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.66667 7.5H13.3333" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.66667 12.5H13.3333" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Second Year of Middle School</span>
                </div>
                <div className="stage-item">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6667 2.5H3.33333C2.41286 2.5 1.66667 3.24619 1.66667 4.16667V15.8333C1.66667 16.7538 2.41286 17.5 3.33333 17.5H16.6667C17.5871 17.5 18.3333 16.7538 18.3333 15.8333V4.16667C18.3333 3.24619 17.5871 2.5 16.6667 2.5Z" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.66667 7.5H13.3333" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.66667 12.5H13.3333" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Third Year of Middle School</span>
                </div>
              </div>
            </div>

            {/* Account Status Section */}
            <div className="details-section account-status">
              <h3>Account status</h3>
              
              <div className="status-toggle">
                <div className="status-indicator">
                  <span className={`status-dot ${isActive ? 'active' : 'inactive'}`}></span>
                  <span>{isActive ? 'Active' : 'Not Active'}</span>
                </div>
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={isActive}
                    onChange={() => setIsActive(!isActive)}
                  />
                  <span className="slider"></span>
                </label>
              </div>

              <div className="pin-section">
                <label>Change Pin Code</label>
                <div className="pin-input-wrapper">
                  <span className="pin-icon">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.6667 7.33333H3.33333C2.59695 7.33333 2 7.93029 2 8.66667V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V8.66667C14 7.93029 13.403 7.33333 12.6667 7.33333Z" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4.66667 7.33333V4.66667C4.66667 3.78261 5.01786 2.93477 5.64298 2.30964C6.2681 1.68452 7.11595 1.33333 8 1.33333C8.88406 1.33333 9.7319 1.68452 10.357 2.30964C10.9821 2.93477 11.3333 3.78261 11.3333 4.66667V7.33333" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <input 
                    type={showPin ? "text" : "password"}
                    value={pinCode}
                    onChange={(e) => setPinCode(e.target.value)}
                    placeholder="••••••"
                    className="pin-input"
                  />
                  <button 
                    className="show-pin-btn"
                    onClick={() => setShowPin(!showPin)}
                  >
                    {showPin ? (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.66667 10C1.66667 10 4.16667 4.16667 10 4.16667C15.8333 4.16667 18.3333 10 18.3333 10C18.3333 10 15.8333 15.8333 10 15.8333C4.16667 15.8333 1.66667 10 1.66667 10Z" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.95 14.95C13.5255 16.0358 11.7909 16.6374 10 16.6667C4.16667 16.6667 1.66667 10.8333 1.66667 10.8333C2.52586 9.10836 3.72927 7.57334 5.2 6.31667M8.25 4.53334C8.8229 4.3725 9.41018 4.29063 10 4.29167C15.8333 4.29167 18.3333 10.125 18.3333 10.125C17.9286 10.9463 17.4403 11.7249 16.875 12.45M11.7667 11.7667C11.5378 12.0123 11.2617 12.2093 10.9551 12.346C10.6485 12.4826 10.3176 12.5563 9.9823 12.5625C9.64698 12.5688 9.31374 12.5075 9.00215 12.3821C8.69056 12.2568 8.40697 12.0698 8.16908 11.8319C7.9312 11.594 7.74423 11.3104 7.61888 10.9988C7.49354 10.6872 7.43218 10.354 7.43843 10.0187C7.44468 9.68334 7.51841 9.35245 7.65506 9.04583C7.7917 8.73921 7.98869 8.46316 8.23433 8.23417" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M1.66667 1.66667L18.3333 18.3333" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <button className="confirmation-btn">Confirmation</button>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="teacher-tabs">
            <div className="tabs-header">
              <button 
                className={`tab-btn ${activeTab === 'assigned' ? 'active' : ''}`}
                onClick={() => setActiveTab('assigned')}
              >
                Assigned Lessons
              </button>
              <button 
                className={`tab-btn ${activeTab === 'assign' ? 'active' : ''}`}
                onClick={() => setActiveTab('assign')}
              >
                Assign a new lesson
              </button>
              <button 
                className={`tab-btn ${activeTab === 'timetable' ? 'active' : ''}`}
                onClick={() => setActiveTab('timetable')}
              >
                Teacher's timetable
              </button>
            </div>
            <div className="tabs-content">
              {activeTab === 'assigned' && (
                <div className="lessons-section">
                  <h3>Assigned Lessons</h3>
                
                <table className="lessons-table">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Lesson Title</th>
                      <th>The stage</th>
                      <th>The status</th>
                      <th>Procedures</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Introduction to the World of the Internet</td>
                      <td>Second Grade - Middle</td>
                      <td>
                        <span className="status-badge completed">Completed</span>
                      </td>
                      <td>
                        <div className="action-buttons">
                          <button className="view-details-btn">View Details</button>
                          <button className="delete-btn" onClick={() => handleDeleteClick(1, 'Introduction to the World of the Internet')}>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2.25 4.5H3.75H15.75" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M6 4.5V3C6 2.60218 6.15804 2.22064 6.43934 1.93934C6.72064 1.65804 7.10218 1.5 7.5 1.5H10.5C10.8978 1.5 11.2794 1.65804 11.5607 1.93934C11.842 2.22064 12 2.60218 12 3V4.5M14.25 4.5V15C14.25 15.3978 14.092 15.7794 13.8107 16.0607C13.5294 16.342 13.1478 16.5 12.75 16.5H5.25C4.85218 16.5 4.47064 16.342 4.18934 16.0607C3.90804 15.7794 3.75 15.3978 3.75 15V4.5H14.25Z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Creative Expression Through Digital Art</td>
                      <td>Second Grade - Middle</td>
                      <td>
                        <span className="status-badge in-progress">In Progress</span>
                      </td>
                      <td>
                        <div className="action-buttons">
                          <button className="view-details-btn">View Details</button>
                          <button className="delete-btn" onClick={() => handleDeleteClick(5, 'Creative Expression Through Digital Art')}>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2.25 4.5H3.75H15.75" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M6 4.5V3C6 2.60218 6.15804 2.22064 6.43934 1.93934C6.72064 1.65804 7.10218 1.5 7.5 1.5H10.5C10.8978 1.5 11.2794 1.65804 11.5607 1.93934C11.842 2.22064 12 2.60218 12 3V4.5M14.25 4.5V15C14.25 15.3978 14.092 15.7794 13.8107 16.0607C13.5294 16.342 13.1478 16.5 12.75 16.5H5.25C4.85218 16.5 4.47064 16.342 4.18934 16.0607C3.90804 15.7794 3.75 15.3978 3.75 15V4.5H14.25Z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Exploring Basic Computer Skills</td>
                      <td>Second Grade - Middle</td>
                      <td>
                        <span className="status-badge in-progress">In Progress</span>
                      </td>
                      <td>
                        <div className="action-buttons">
                          <button className="view-details-btn">View Details</button>
                          <button className="delete-btn" onClick={() => handleDeleteClick(3, 'Exploring Basic Computer Skills')}>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2.25 4.5H3.75H15.75" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M6 4.5V3C6 2.60218 6.15804 2.22064 6.43934 1.93934C6.72064 1.65804 7.10218 1.5 7.5 1.5H10.5C10.8978 1.5 11.2794 1.65804 11.5607 1.93934C11.842 2.22064 12 2.60218 12 3V4.5M14.25 4.5V15C14.25 15.3978 14.092 15.7794 13.8107 16.0607C13.5294 16.342 13.1478 16.5 12.75 16.5H5.25C4.85218 16.5 4.47064 16.342 4.18934 16.0607C3.90804 15.7794 3.75 15.3978 3.75 15V4.5H14.25Z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Understanding Online Safety and Etiquette</td>
                      <td>Second Grade - Middle</td>
                      <td>
                        <span className="status-badge not-started">Not Started</span>
                      </td>
                      <td>
                        <div className="action-buttons">
                          <button className="view-details-btn">View Details</button>
                          <button className="delete-btn" onClick={() => handleDeleteClick(4, 'Understanding Online Safety and Etiquette')}>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2.25 4.5H3.75H15.75" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M6 4.5V3C6 2.60218 6.15804 2.22064 6.43934 1.93934C6.72064 1.65804 7.10218 1.5 7.5 1.5H10.5C10.8978 1.5 11.2794 1.65804 11.5607 1.93934C11.842 2.22064 12 2.60218 12 3V4.5M14.25 4.5V15C14.25 15.3978 14.092 15.7794 13.8107 16.0607C13.5294 16.342 13.1478 16.5 12.75 16.5H5.25C4.85218 16.5 4.47064 16.342 4.18934 16.0607C3.90804 15.7794 3.75 15.3978 3.75 15V4.5H14.25Z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              )}

              {activeTab === 'assign' && (
                <div className="assign-lesson-section">
                  <h3>Select a lesson to assign</h3>
                  
                  <div className="filters-row">
                    <div className="search-wrapper-lesson">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M19 19L14.65 14.65" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <input 
                        type="text" 
                        placeholder="Search for a lesson" 
                        value={searchLesson}
                        onChange={(e) => setSearchLesson(e.target.value)}
                        className="search-input-lesson"
                      />
                    </div>

                    <select 
                      className="filter-select"
                      value={selectedStage}
                      onChange={(e) => setSelectedStage(e.target.value)}
                    >
                      <option value="all">All stages</option>
                      <option value="first">First Year of Middle School</option>
                      <option value="second">Second Year of Middle School</option>
                      <option value="third">Third Year of Middle School</option>
                    </select>

                    <select 
                      className="filter-select"
                      value={selectedLessonFilter}
                      onChange={(e) => setSelectedLessonFilter(e.target.value)}
                    >
                      <option value="all">All classes</option>
                      <option value="assigned">Assigned</option>
                      <option value="unassigned">Unassigned</option>
                    </select>
                  </div>

                  <div className="lessons-list">
                    <div className="lesson-item">
                      <div className="lesson-info">
                        <h4>Introduction to the World of the Internet</h4>
                        <p>Second Grade - Preparatory</p>
                      </div>
                      <button className="assign-btn">
                        Assign
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 3.33334V12.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M3.33334 8H12.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>

                    <div className="lesson-item">
                      <div className="lesson-info">
                        <h4>Introduction to the World of the Internet</h4>
                        <p>Second Grade - Preparatory</p>
                      </div>
                      <button className="assign-btn">
                        Assign
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 3.33334V12.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M3.33334 8H12.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>

                    <div className="lesson-item">
                      <div className="lesson-info">
                        <h4>Introduction to the World of the Internet</h4>
                        <p>Second Grade - Preparatory</p>
                      </div>
                      <button className="assign-btn">
                        Assign
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 3.33334V12.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M3.33334 8H12.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>

                    <div className="lesson-item">
                      <div className="lesson-info">
                        <h4>Introduction to the World of the Internet</h4>
                        <p>Second Grade - Preparatory</p>
                      </div>
                      <button className="assign-btn">
                        Assign
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 3.33334V12.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M3.33334 8H12.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>

                    <div className="lesson-item assigned">
                      <div className="lesson-info">
                        <h4>Introduction to the World of the Internet</h4>
                        <p>Second Grade - Preparatory</p>
                      </div>
                      <div className="assigned-label">
                        Assigned
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'timetable' && (
                <div className="timetable-section">
                  <div className="timetable-container">
                    {/* Lessons Sidebar */}
                    <div className="lessons-sidebar">
                      <div className="lesson-card">
                        <svg className="lesson-checkmark" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="10" fill="#10b981"/>
                          <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <div className="lesson-number">1</div>
                        <div className="lesson-details">
                          <h4>Introduction to the World of the Internet</h4>
                          <p>Second Grade - Preparatory</p>
                        </div>
                      </div>
                      <div className="lesson-card">
                        <div className="lesson-number">2</div>
                        <div className="lesson-details">
                          <h4>Introduction to the World of the Internet</h4>
                          <p>Second Grade - Preparatory</p>
                        </div>
                      </div>
                      <div className="lesson-card">
                        <div className="lesson-number">3</div>
                        <div className="lesson-details">
                          <h4>Introduction to the World of the Internet</h4>
                          <p>Second Grade - Preparatory</p>
                        </div>
                      </div>
                      <div className="lesson-card">
                        <div className="lesson-number">4</div>
                        <div className="lesson-details">
                          <h4>Introduction to the World of the Internet</h4>
                          <p>Second Grade - Preparatory</p>
                        </div>
                      </div>
                      <div className="lesson-card">
                        <div className="lesson-number">5</div>
                        <div className="lesson-details">
                          <h4>Exploring Basic Computer Skills</h4>
                          <p>Second Grade - Preparatory</p>
                        </div>
                      </div>
                      <div className="lesson-card">
                        <div className="lesson-number">6</div>
                        <div className="lesson-details">
                          <h4>Understanding Online Safety</h4>
                          <p>Second Grade - Preparatory</p>
                        </div>
                      </div>
                    </div>

                    {/* Calendar Section */}
                    <div className="calendar-section">
                      {/* Calendar Header */}
                      <div className="calendar-header">
                        {calendarView === 'week' && (
                          <div className="month-navigation">
                            <button className="nav-btn" onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}>
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5 15L7.5 10L12.5 5" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </button>
                            <h3>{currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h3>
                            <button className="nav-btn" onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}>
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 15L12.5 10L7.5 5" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </button>
                          </div>
                        )}
                        <div className="view-toggle">
                          <button 
                            className={`toggle-btn ${calendarView === 'week' ? 'active' : ''}`}
                            onClick={() => setCalendarView('week')}
                          >
                            Week
                          </button>
                          <button 
                            className={`toggle-btn ${calendarView === 'month' ? 'active' : ''}`}
                            onClick={() => setCalendarView('month')}
                          >
                            Month
                          </button>
                        </div>
                      </div>

                      {/* Weekday Headers */}
                      {calendarView === 'week' && (
                        <div className="weekdays-row">
                          <div className="weekday-header">Saturday</div>
                          <div className="weekday-header">Sunday</div>
                          <div className="weekday-header">Monday</div>
                          <div className="weekday-header">Tuesday</div>
                          <div className="weekday-header">Wednesday</div>
                          <div className="weekday-header">Thursday</div>
                          <div className="weekday-header">Friday</div>
                        </div>
                      )}

                      {/* Week View - Single Month Calendar */}
                      {calendarView === 'week' && (
                        <div className="calendar-grid">                        
                          {/* Week 1 */}
                          <div className="calendar-day">1</div>
                          <div className="calendar-day">2</div>
                          <div className="calendar-day">3</div>
                          <div className="calendar-day">4</div>
                          <div className="calendar-day">5</div>
                          <div className="calendar-day">6</div>
                          <div className="calendar-day">7</div>
                          
                          {/* Week 2 */}
                          <div className="calendar-day">8</div>
                          <div className="calendar-day">9</div>
                          <div className="calendar-day">10</div>
                          <div className="calendar-day">11</div>
                          <div className="calendar-day">12</div>
                          <div className="calendar-day">13</div>
                          <div className="calendar-day">14</div>
                          
                          {/* Week 3 */}
                          <div className="calendar-day">15</div>
                          <div className="calendar-day">16</div>
                          <div className="calendar-day">17</div>
                          <div className="calendar-day">18</div>
                          <div className="calendar-day">19</div>
                          <div className="calendar-day">20</div>
                          <div className="calendar-day">21</div>
                          
                          {/* Week 4 */}
                          <div className="calendar-day">22</div>
                          <div className="calendar-day">23</div>
                          <div className="calendar-day">24</div>
                          <div className="calendar-day">25</div>
                          <div className="calendar-day">26</div>
                          <div className="calendar-day">27</div>
                          <div className="calendar-day">28</div>
                        </div>
                      )}

                      {/* Month View - Multiple Months */}
                      {calendarView === 'month' && (
                        <div className="months-view">
                          {/* January 2025 */}
                          <div className="month-block">
                            <h4 className="month-title">January 2025</h4>
                            <div className="month-calendar-grid">
                              {/* Week 1 */}
                              <div className="calendar-day-month">
                                <div className="lesson-badge">
                                  <div className="lesson-badge-number">1</div>
                                  <div className="lesson-badge-text">Introduction to the World of the Internet</div>
                                </div>
                              </div>
                              <div className="calendar-day-month"></div>
                              <div className="calendar-day-month"></div>
                              <div className="calendar-day-month"></div>
                              <div className="calendar-day-month"></div>
                              <div className="calendar-day-month"></div>
                              <div className="calendar-day-month"></div>
                              {/* Week 2 */}
                              <div className="calendar-day-month"></div>
                              <div className="calendar-day-month"></div>
                              <div className="calendar-day-month"></div>
                              <div className="calendar-day-month"></div>
                              <div className="calendar-day-month"></div>
                              <div className="calendar-day-month"></div>
                              <div className="calendar-day-month"></div>
                            </div>
                          </div>

                          {/* February 2025 */}
                          <div className="month-block">
                            <h4 className="month-title">February 2025</h4>
                            <div className="month-calendar-grid">
                              {/* Week 1 */}
                              <div className="calendar-day-month"></div>
                              <div className="calendar-day-month"></div>
                              <div className="calendar-day-month"></div>
                              <div className="calendar-day-month"></div>
                              <div className="calendar-day-month"></div>
                              <div className="calendar-day-month"></div>
                              <div className="calendar-day-month"></div>
                              {/* Week 2 */}
                              <div className="calendar-day-month"></div>
                              <div className="calendar-day-month"></div>
                              <div className="calendar-day-month"></div>
                              <div className="calendar-day-month"></div>
                              <div className="calendar-day-month"></div>
                              <div className="calendar-day-month"></div>
                              <div className="calendar-day-month"></div>
                            </div>
                          </div>

                          {/* March 2025 */}
                          <div className="month-block">
                            <h4 className="month-title">March 2025</h4>
                            <div className="month-calendar-grid">
                              {/* Week 1 */}
                              <div className="calendar-day-month"></div>
                              <div className="calendar-day-month"></div>
                              <div className="calendar-day-month"></div>
                              <div className="calendar-day-month"></div>
                              <div className="calendar-day-month"></div>
                              <div className="calendar-day-month"></div>
                              <div className="calendar-day-month"></div>
                              {/* Week 2 */}
                              <div className="calendar-day-month"></div>
                              <div className="calendar-day-month"></div>
                              <div className="calendar-day-month"></div>
                              <div className="calendar-day-month"></div>
                              <div className="calendar-day-month"></div>
                              <div className="calendar-day-month"></div>
                              <div className="calendar-day-month"></div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Confirmation Button */}
                  <div className="confirmation-wrapper">
                    <button className="confirmation-btn-calendar">Confirmation</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="modal-overlay" onClick={handleCancelDelete}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-icon">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 16H13.3333H56" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21.3333 16V10.6667C21.3333 9.25218 21.8952 7.89562 22.8954 6.89543C23.8956 5.89523 25.2522 5.33334 26.6667 5.33334H37.3333C38.7478 5.33334 40.1044 5.89523 41.1046 6.89543C42.1048 7.89562 42.6667 9.25218 42.6667 10.6667V16M50.6667 16V53.3333C50.6667 54.7478 50.1048 56.1044 49.1046 57.1046C48.1044 58.1048 46.7478 58.6667 45.3333 58.6667H18.6667C17.2522 58.6667 15.8956 58.1048 14.8954 57.1046C13.8952 56.1044 13.3333 54.7478 13.3333 53.3333V16H50.6667Z" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="modal-title">Delete this lesson?</h2>
            <p className="modal-description">
              This lesson will be removed from the teacher's materials.<br />
              You can add it again later from the available lessons.
            </p>
            <div className="modal-actions">
              <button className="modal-cancel-btn" onClick={handleCancelDelete}>Cancel</button>
              <button className="modal-delete-btn" onClick={handleConfirmDelete}>Delete lesson</button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default TeacherDetails;
