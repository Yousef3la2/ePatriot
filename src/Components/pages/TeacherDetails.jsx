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
  const [assignedLessons, setAssignedLessons] = useState([]);

  const handleAssignLesson = (lessonId) => {
    setAssignedLessons([...assignedLessons, lessonId]);
  };

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
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
                              <path fillRule="evenodd" clipRule="evenodd" d="M10.103 0.000248563C10.4735 0.00124281 10.7969 0.00621407 11.075 0.0310704C11.4441 0.0640804 11.7882 0.13555 12.1224 0.30897C12.2545 0.3775 12.3808 0.45664 12.5001 0.54561C12.802 0.77075 13.0164 1.04917 13.2071 1.36688C13.3867 1.66618 13.5692 2.04263 13.7841 2.4861L14.2756 3.5H18.75C19.1642 3.5 19.5 3.83579 19.5 4.25C19.5 4.66422 19.1642 5 18.75 5H17.9551L17.3765 14.3601C17.2993 15.608 17.2381 16.5982 17.1127 17.3892C16.984 18.2004 16.778 18.876 16.366 19.4669C15.989 20.0074 15.5037 20.4637 14.9409 20.8065C14.3258 21.1813 13.6388 21.3452 12.8212 21.4236C12.024 21.5 11.0318 21.5 9.7815 21.5H9.7039C8.452 21.5 7.45858 21.5 6.66041 21.4235C5.84186 21.3449 5.15416 21.1807 4.53854 20.8053C3.97537 20.4618 3.48991 20.0047 3.11311 19.4633C2.70121 18.8714 2.49587 18.1949 2.36816 17.3825C2.24362 16.5904 2.18377 15.5988 2.10833 14.3491L1.54393 5H0.75C0.33579 5 0 4.66422 0 4.25C0 3.83579 0.33579 3.5 0.75 3.5H5.32055L5.73959 2.58073C5.94915 2.12095 6.12691 1.73095 6.30391 1.42073C6.49173 1.09153 6.70528 0.80248 7.01078 0.56811C7.13136 0.47561 7.25939 0.39326 7.39357 0.32192C7.73355 0.14114 8.0851 0.0667204 8.4626 0.0323604C8.8183 0 9.2469 0 9.7522 0L10.103 0.000248563ZM16.4522 5H3.04666L3.60327 14.22C3.68157 15.517 3.7379 16.4368 3.84996 17.1496C3.96012 17.8503 4.11439 18.2761 4.34431 18.6065C4.60213 18.9769 4.93428 19.2896 5.31961 19.5247C5.66325 19.7342 6.09758 19.8626 6.80365 19.9303C7.52186 19.9992 8.4434 20 9.7428 20C11.0405 20 11.9607 19.9992 12.678 19.9305C13.3832 19.8628 13.8171 19.7348 14.1605 19.5255C14.5456 19.2909 14.8777 18.9788 15.1356 18.6089C15.3656 18.2791 15.5202 17.8539 15.6312 17.1542C15.7441 16.4425 15.8017 15.5241 15.8817 14.2288L16.4522 5ZM7.25 8.5C7.66421 8.5 8 8.8358 8 9.25V15.25C8 15.6642 7.66421 16 7.25 16C6.83579 16 6.5 15.6642 6.5 15.25V9.25C6.5 8.8358 6.83579 8.5 7.25 8.5ZM12.25 8.5C12.6642 8.5 13 8.8358 13 9.25V15.25C13 15.6642 12.6642 16 12.25 16C11.8358 16 11.5 15.6642 11.5 15.25V9.25C11.5 8.8358 11.8358 8.5 12.25 8.5ZM10.1992 1.50071L9.40805 1.50051C9.06322 1.50191 8.8083 1.50709 8.5986 1.52618C8.3331 1.55035 8.1981 1.59298 8.0978 1.64633C8.0368 1.67876 7.9786 1.71619 7.9238 1.75823C7.8337 1.82739 7.73887 1.93253 7.60677 2.16407C7.4676 2.40798 7.31765 2.73523 7.09105 3.23234L6.96904 3.5H12.6087L12.4482 3.16888C12.2157 2.68926 12.062 2.37382 11.9209 2.13884C11.7871 1.91588 11.6926 1.81458 11.6033 1.74801C11.5491 1.70756 11.4917 1.67159 11.4316 1.64044C11.3328 1.58916 11.2004 1.54827 10.9414 1.52511C10.7464 1.50767 10.5117 1.50233 10.1992 1.50071Z" fill="white"/>
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
                              <path fillRule="evenodd" clipRule="evenodd" d="M10.103 0.000248563C10.4735 0.00124281 10.7969 0.00621407 11.075 0.0310704C11.4441 0.0640804 11.7882 0.13555 12.1224 0.30897C12.2545 0.3775 12.3808 0.45664 12.5001 0.54561C12.802 0.77075 13.0164 1.04917 13.2071 1.36688C13.3867 1.66618 13.5692 2.04263 13.7841 2.4861L14.2756 3.5H18.75C19.1642 3.5 19.5 3.83579 19.5 4.25C19.5 4.66422 19.1642 5 18.75 5H17.9551L17.3765 14.3601C17.2993 15.608 17.2381 16.5982 17.1127 17.3892C16.984 18.2004 16.778 18.876 16.366 19.4669C15.989 20.0074 15.5037 20.4637 14.9409 20.8065C14.3258 21.1813 13.6388 21.3452 12.8212 21.4236C12.024 21.5 11.0318 21.5 9.7815 21.5H9.7039C8.452 21.5 7.45858 21.5 6.66041 21.4235C5.84186 21.3449 5.15416 21.1807 4.53854 20.8053C3.97537 20.4618 3.48991 20.0047 3.11311 19.4633C2.70121 18.8714 2.49587 18.1949 2.36816 17.3825C2.24362 16.5904 2.18377 15.5988 2.10833 14.3491L1.54393 5H0.75C0.33579 5 0 4.66422 0 4.25C0 3.83579 0.33579 3.5 0.75 3.5H5.32055L5.73959 2.58073C5.94915 2.12095 6.12691 1.73095 6.30391 1.42073C6.49173 1.09153 6.70528 0.80248 7.01078 0.56811C7.13136 0.47561 7.25939 0.39326 7.39357 0.32192C7.73355 0.14114 8.0851 0.0667204 8.4626 0.0323604C8.8183 0 9.2469 0 9.7522 0L10.103 0.000248563ZM16.4522 5H3.04666L3.60327 14.22C3.68157 15.517 3.7379 16.4368 3.84996 17.1496C3.96012 17.8503 4.11439 18.2761 4.34431 18.6065C4.60213 18.9769 4.93428 19.2896 5.31961 19.5247C5.66325 19.7342 6.09758 19.8626 6.80365 19.9303C7.52186 19.9992 8.4434 20 9.7428 20C11.0405 20 11.9607 19.9992 12.678 19.9305C13.3832 19.8628 13.8171 19.7348 14.1605 19.5255C14.5456 19.2909 14.8777 18.9788 15.1356 18.6089C15.3656 18.2791 15.5202 17.8539 15.6312 17.1542C15.7441 16.4425 15.8017 15.5241 15.8817 14.2288L16.4522 5ZM7.25 8.5C7.66421 8.5 8 8.8358 8 9.25V15.25C8 15.6642 7.66421 16 7.25 16C6.83579 16 6.5 15.6642 6.5 15.25V9.25C6.5 8.8358 6.83579 8.5 7.25 8.5ZM12.25 8.5C12.6642 8.5 13 8.8358 13 9.25V15.25C13 15.6642 12.6642 16 12.25 16C11.8358 16 11.5 15.6642 11.5 15.25V9.25C11.5 8.8358 11.8358 8.5 12.25 8.5ZM10.1992 1.50071L9.40805 1.50051C9.06322 1.50191 8.8083 1.50709 8.5986 1.52618C8.3331 1.55035 8.1981 1.59298 8.0978 1.64633C8.0368 1.67876 7.9786 1.71619 7.9238 1.75823C7.8337 1.82739 7.73887 1.93253 7.60677 2.16407C7.4676 2.40798 7.31765 2.73523 7.09105 3.23234L6.96904 3.5H12.6087L12.4482 3.16888C12.2157 2.68926 12.062 2.37382 11.9209 2.13884C11.7871 1.91588 11.6926 1.81458 11.6033 1.74801C11.5491 1.70756 11.4917 1.67159 11.4316 1.64044C11.3328 1.58916 11.2004 1.54827 10.9414 1.52511C10.7464 1.50767 10.5117 1.50233 10.1992 1.50071Z" fill="white"/>
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
                              <path fillRule="evenodd" clipRule="evenodd" d="M10.103 0.000248563C10.4735 0.00124281 10.7969 0.00621407 11.075 0.0310704C11.4441 0.0640804 11.7882 0.13555 12.1224 0.30897C12.2545 0.3775 12.3808 0.45664 12.5001 0.54561C12.802 0.77075 13.0164 1.04917 13.2071 1.36688C13.3867 1.66618 13.5692 2.04263 13.7841 2.4861L14.2756 3.5H18.75C19.1642 3.5 19.5 3.83579 19.5 4.25C19.5 4.66422 19.1642 5 18.75 5H17.9551L17.3765 14.3601C17.2993 15.608 17.2381 16.5982 17.1127 17.3892C16.984 18.2004 16.778 18.876 16.366 19.4669C15.989 20.0074 15.5037 20.4637 14.9409 20.8065C14.3258 21.1813 13.6388 21.3452 12.8212 21.4236C12.024 21.5 11.0318 21.5 9.7815 21.5H9.7039C8.452 21.5 7.45858 21.5 6.66041 21.4235C5.84186 21.3449 5.15416 21.1807 4.53854 20.8053C3.97537 20.4618 3.48991 20.0047 3.11311 19.4633C2.70121 18.8714 2.49587 18.1949 2.36816 17.3825C2.24362 16.5904 2.18377 15.5988 2.10833 14.3491L1.54393 5H0.75C0.33579 5 0 4.66422 0 4.25C0 3.83579 0.33579 3.5 0.75 3.5H5.32055L5.73959 2.58073C5.94915 2.12095 6.12691 1.73095 6.30391 1.42073C6.49173 1.09153 6.70528 0.80248 7.01078 0.56811C7.13136 0.47561 7.25939 0.39326 7.39357 0.32192C7.73355 0.14114 8.0851 0.0667204 8.4626 0.0323604C8.8183 0 9.2469 0 9.7522 0L10.103 0.000248563ZM16.4522 5H3.04666L3.60327 14.22C3.68157 15.517 3.7379 16.4368 3.84996 17.1496C3.96012 17.8503 4.11439 18.2761 4.34431 18.6065C4.60213 18.9769 4.93428 19.2896 5.31961 19.5247C5.66325 19.7342 6.09758 19.8626 6.80365 19.9303C7.52186 19.9992 8.4434 20 9.7428 20C11.0405 20 11.9607 19.9992 12.678 19.9305C13.3832 19.8628 13.8171 19.7348 14.1605 19.5255C14.5456 19.2909 14.8777 18.9788 15.1356 18.6089C15.3656 18.2791 15.5202 17.8539 15.6312 17.1542C15.7441 16.4425 15.8017 15.5241 15.8817 14.2288L16.4522 5ZM7.25 8.5C7.66421 8.5 8 8.8358 8 9.25V15.25C8 15.6642 7.66421 16 7.25 16C6.83579 16 6.5 15.6642 6.5 15.25V9.25C6.5 8.8358 6.83579 8.5 7.25 8.5ZM12.25 8.5C12.6642 8.5 13 8.8358 13 9.25V15.25C13 15.6642 12.6642 16 12.25 16C11.8358 16 11.5 15.6642 11.5 15.25V9.25C11.5 8.8358 11.8358 8.5 12.25 8.5ZM10.1992 1.50071L9.40805 1.50051C9.06322 1.50191 8.8083 1.50709 8.5986 1.52618C8.3331 1.55035 8.1981 1.59298 8.0978 1.64633C8.0368 1.67876 7.9786 1.71619 7.9238 1.75823C7.8337 1.82739 7.73887 1.93253 7.60677 2.16407C7.4676 2.40798 7.31765 2.73523 7.09105 3.23234L6.96904 3.5H12.6087L12.4482 3.16888C12.2157 2.68926 12.062 2.37382 11.9209 2.13884C11.7871 1.91588 11.6926 1.81458 11.6033 1.74801C11.5491 1.70756 11.4917 1.67159 11.4316 1.64044C11.3328 1.58916 11.2004 1.54827 10.9414 1.52511C10.7464 1.50767 10.5117 1.50233 10.1992 1.50071Z" fill="white"/>
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
                              <path fillRule="evenodd" clipRule="evenodd" d="M10.103 0.000248563C10.4735 0.00124281 10.7969 0.00621407 11.075 0.0310704C11.4441 0.0640804 11.7882 0.13555 12.1224 0.30897C12.2545 0.3775 12.3808 0.45664 12.5001 0.54561C12.802 0.77075 13.0164 1.04917 13.2071 1.36688C13.3867 1.66618 13.5692 2.04263 13.7841 2.4861L14.2756 3.5H18.75C19.1642 3.5 19.5 3.83579 19.5 4.25C19.5 4.66422 19.1642 5 18.75 5H17.9551L17.3765 14.3601C17.2993 15.608 17.2381 16.5982 17.1127 17.3892C16.984 18.2004 16.778 18.876 16.366 19.4669C15.989 20.0074 15.5037 20.4637 14.9409 20.8065C14.3258 21.1813 13.6388 21.3452 12.8212 21.4236C12.024 21.5 11.0318 21.5 9.7815 21.5H9.7039C8.452 21.5 7.45858 21.5 6.66041 21.4235C5.84186 21.3449 5.15416 21.1807 4.53854 20.8053C3.97537 20.4618 3.48991 20.0047 3.11311 19.4633C2.70121 18.8714 2.49587 18.1949 2.36816 17.3825C2.24362 16.5904 2.18377 15.5988 2.10833 14.3491L1.54393 5H0.75C0.33579 5 0 4.66422 0 4.25C0 3.83579 0.33579 3.5 0.75 3.5H5.32055L5.73959 2.58073C5.94915 2.12095 6.12691 1.73095 6.30391 1.42073C6.49173 1.09153 6.70528 0.80248 7.01078 0.56811C7.13136 0.47561 7.25939 0.39326 7.39357 0.32192C7.73355 0.14114 8.0851 0.0667204 8.4626 0.0323604C8.8183 0 9.2469 0 9.7522 0L10.103 0.000248563ZM16.4522 5H3.04666L3.60327 14.22C3.68157 15.517 3.7379 16.4368 3.84996 17.1496C3.96012 17.8503 4.11439 18.2761 4.34431 18.6065C4.60213 18.9769 4.93428 19.2896 5.31961 19.5247C5.66325 19.7342 6.09758 19.8626 6.80365 19.9303C7.52186 19.9992 8.4434 20 9.7428 20C11.0405 20 11.9607 19.9992 12.678 19.9305C13.3832 19.8628 13.8171 19.7348 14.1605 19.5255C14.5456 19.2909 14.8777 18.9788 15.1356 18.6089C15.3656 18.2791 15.5202 17.8539 15.6312 17.1542C15.7441 16.4425 15.8017 15.5241 15.8817 14.2288L16.4522 5ZM7.25 8.5C7.66421 8.5 8 8.8358 8 9.25V15.25C8 15.6642 7.66421 16 7.25 16C6.83579 16 6.5 15.6642 6.5 15.25V9.25C6.5 8.8358 6.83579 8.5 7.25 8.5ZM12.25 8.5C12.6642 8.5 13 8.8358 13 9.25V15.25C13 15.6642 12.6642 16 12.25 16C11.8358 16 11.5 15.6642 11.5 15.25V9.25C11.5 8.8358 11.8358 8.5 12.25 8.5ZM10.1992 1.50071L9.40805 1.50051C9.06322 1.50191 8.8083 1.50709 8.5986 1.52618C8.3331 1.55035 8.1981 1.59298 8.0978 1.64633C8.0368 1.67876 7.9786 1.71619 7.9238 1.75823C7.8337 1.82739 7.73887 1.93253 7.60677 2.16407C7.4676 2.40798 7.31765 2.73523 7.09105 3.23234L6.96904 3.5H12.6087L12.4482 3.16888C12.2157 2.68926 12.062 2.37382 11.9209 2.13884C11.7871 1.91588 11.6926 1.81458 11.6033 1.74801C11.5491 1.70756 11.4917 1.67159 11.4316 1.64044C11.3328 1.58916 11.2004 1.54827 10.9414 1.52511C10.7464 1.50767 10.5117 1.50233 10.1992 1.50071Z" fill="white"/>
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
                      <button 
                        className={assignedLessons.includes(1) ? "assign-btn assigned-btn" : "assign-btn"}
                        onClick={() => handleAssignLesson(1)}
                        disabled={assignedLessons.includes(1)}
                      >
                        {assignedLessons.includes(1) ? 'Assigned' : 'Assign'}
                        {assignedLessons.includes(1) ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="white"/>
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="white"/>
                            <path d="M16 12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" fill="white"/>
                            <path d="M12 16.75C11.59 16.75 11.25 16.41 11.25 16V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V16C12.75 16.41 12.41 16.75 12 16.75Z" fill="white"/>
                          </svg>
                        )}
                      </button>
                    </div>

                    <div className="lesson-item">
                      <div className="lesson-info">
                        <h4>Introduction to the World of the Internet</h4>
                        <p>Second Grade - Preparatory</p>
                      </div>
                      <button className="assign-btn">
                        Assign
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="white"/>
                          <path d="M16 12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" fill="white"/>
                          <path d="M12 16.75C11.59 16.75 11.25 16.41 11.25 16V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V16C12.75 16.41 12.41 16.75 12 16.75Z" fill="white"/>
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="white"/>
                          <path d="M16 12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" fill="white"/>
                          <path d="M12 16.75C11.59 16.75 11.25 16.41 11.25 16V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V16C12.75 16.41 12.41 16.75 12 16.75Z" fill="white"/>
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="white"/>
                          <path d="M16 12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" fill="white"/>
                          <path d="M12 16.75C11.59 16.75 11.25 16.41 11.25 16V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V16C12.75 16.41 12.41 16.75 12 16.75Z" fill="white"/>
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M12 1.25C13.89 1.25 15.748 1.74845 17.376 2.68945C17.7347 2.89645 17.8571 3.35497 17.6504 3.71387C17.4434 4.07282 16.984 4.19518 16.625 3.98828C15.226 3.17928 13.627 2.75098 12.001 2.75098C6.90098 2.75098 2.75098 6.90098 2.75098 12.001C2.75098 17.101 6.90098 21.251 12.001 21.251C17.101 21.251 21.251 17.101 21.251 12.001C21.251 11.3781 21.1893 10.7552 21.0664 10.1504C20.9844 9.74439 21.2463 9.34762 21.6523 9.26562C22.0581 9.18391 22.454 9.44592 22.5361 9.85156C22.6791 10.5546 22.751 11.278 22.751 12.001C22.751 17.929 17.929 22.751 12.001 22.751L12 22.75C6.072 22.75 1.25 17.928 1.25 12C1.25 6.072 6.072 1.25 12 1.25ZM21.752 4.29688C22.1348 4.15287 22.561 4.35126 22.7031 4.73926C22.8452 5.12722 22.6504 5.55911 22.2676 5.70312C20.4114 6.40112 17.9703 8.51382 15.4717 11.6895C13.6629 14.1415 12.3224 16.3393 12.3105 16.3623C12.1813 16.599 11.9361 16.7469 11.6689 16.749H11.6641L11.6631 16.75C11.3977 16.75 11.0122 16.749 10.7939 16.3623C9.13811 13.4253 8.20898 13.239 8.20898 13.2617C8.20898 13.2617 7.37481 13.2431 7.47949 12.4023C7.56086 11.7499 8.20898 11.75 8.20898 11.75C8.49334 11.75 9.87251 11.8994 11.6426 14.5469C13.1622 12.0039 17.6637 5.83406 21.752 4.29688Z" fill="#1CB061"/>
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
                        <svg className="lesson-checkmark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M12 1.25C13.89 1.25 15.748 1.74845 17.376 2.68945C17.7347 2.89645 17.8571 3.35497 17.6504 3.71387C17.4434 4.07282 16.984 4.19518 16.625 3.98828C15.226 3.17928 13.627 2.75098 12.001 2.75098C6.90098 2.75098 2.75098 6.90098 2.75098 12.001C2.75098 17.101 6.90098 21.251 12.001 21.251C17.101 21.251 21.251 17.101 21.251 12.001C21.251 11.3781 21.1893 10.7552 21.0664 10.1504C20.9844 9.74439 21.2463 9.34762 21.6523 9.26562C22.0581 9.18391 22.454 9.44592 22.5361 9.85156C22.6791 10.5546 22.751 11.278 22.751 12.001C22.751 17.929 17.929 22.751 12.001 22.751L12 22.75C6.072 22.75 1.25 17.928 1.25 12C1.25 6.072 6.072 1.25 12 1.25ZM21.752 4.29688C22.1348 4.15287 22.561 4.35126 22.7031 4.73926C22.8452 5.12722 22.6504 5.55911 22.2676 5.70312C20.4114 6.40112 17.9703 8.51382 15.4717 11.6895C13.6629 14.1415 12.3224 16.3393 12.3105 16.3623C12.1813 16.599 11.9361 16.7469 11.6689 16.749H11.6641L11.6631 16.75C11.3977 16.75 11.0122 16.749 10.7939 16.3623C9.13811 13.4253 8.20898 13.239 8.20898 13.2617C8.20898 13.2617 7.37481 13.2431 7.47949 12.4023C7.56086 11.7499 8.20898 11.75 8.20898 11.75C8.49334 11.75 9.87251 11.8994 11.6426 14.5469C13.1622 12.0039 17.6637 5.83406 21.752 4.29688Z" fill="#1CB061"/>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none">
                <path opacity="0.4" d="M39.8125 11L38.5472 31.0502C38.224 36.1729 38.0623 38.7343 36.7515 40.5757C36.1035 41.4862 35.2691 42.2546 34.3014 42.832C32.3443 44 29.7246 44 24.4852 44C19.2389 44 16.6157 44 14.6572 42.8299C13.689 42.2513 12.8543 41.4816 12.2065 40.5697C10.8961 38.7252 10.738 36.1602 10.4219 31.0303L9.1875 11H39.8125Z" fill="#C90317"/>
                <path d="M24.6387 2.5C25.6448 2.49997 26.4991 2.50031 27.209 2.5625C27.9624 2.62853 28.6653 2.77135 29.3477 3.11816C29.6171 3.25512 29.8748 3.41308 30.1182 3.59082C30.7343 4.04101 31.1722 4.59813 31.5615 5.2334C31.9283 5.83193 32.3014 6.58487 32.7402 7.47168L33.7432 9.5H42.875C43.7207 9.5 44.4062 10.1716 44.4062 11C44.4062 11.8284 43.7207 12.5 42.875 12.5H41.252L40.0703 31.2197C39.9128 33.7154 39.7884 35.6963 39.5322 37.2783C39.2695 38.9007 38.8489 40.2519 38.0078 41.4336C37.2382 42.5148 36.2467 43.4275 35.0977 44.1133C33.8419 44.8626 32.4395 45.1899 30.7705 45.3467C29.1428 45.4995 27.117 45.5 24.5645 45.5H24.4062C21.8504 45.5 19.822 45.4998 18.1924 45.3467C16.5213 45.1896 15.1172 44.8612 13.8604 44.1104C12.7105 43.4234 11.7185 42.5097 10.9492 41.4268C10.1083 40.243 9.68945 38.8893 9.42871 37.2646C9.17449 35.6805 9.05243 33.6973 8.89844 31.1982L7.74609 12.5H6.125C5.27931 12.5 4.59375 11.8284 4.59375 11C4.59375 10.1716 5.27932 9.5 6.125 9.5H15.46L16.3154 7.66113C16.7432 6.74179 17.1065 5.96215 17.4678 5.3418C17.8512 4.6834 18.2874 4.10449 18.9111 3.63574C19.1572 3.45083 19.4186 3.28619 19.6924 3.14355C20.3865 2.78202 21.1044 2.63318 21.875 2.56445C22.6012 2.4997 23.4763 2.49997 24.5078 2.5H24.6387ZM11.9502 30.9395C12.1101 33.5334 12.2253 35.3734 12.4541 36.7988C12.679 38.2001 12.9936 39.0522 13.4629 39.7129C13.9891 40.4537 14.6676 41.0788 15.4541 41.5488C16.1557 41.968 17.0429 42.2249 18.4844 42.3604C19.9507 42.4982 21.8324 42.5 24.4854 42.5C27.1347 42.5 29.0141 42.4989 30.4785 42.3613C31.918 42.2261 32.8038 41.9692 33.5049 41.5508C34.291 41.0816 34.9686 40.4574 35.4951 39.7178C35.9647 39.0581 36.2812 38.2078 36.5078 36.8086C36.7383 35.3853 36.8551 33.5483 37.0186 30.958L38.1836 12.5H10.8145L11.9502 30.9395ZM19.3955 19.5C20.2412 19.5 20.9268 20.1716 20.9268 21V33C20.9268 33.8284 20.2412 34.5 19.3955 34.5C18.55 34.4998 17.8643 33.8283 17.8643 33V21C17.8643 20.1717 18.55 19.5002 19.3955 19.5ZM29.6045 19.5C30.45 19.5002 31.1357 20.1717 31.1357 21V33C31.1357 33.8283 30.45 34.4998 29.6045 34.5C28.7588 34.5 28.0732 33.8284 28.0732 33V21C28.0732 20.1716 28.7588 19.5 29.6045 19.5ZM24.5742 5.5C23.4588 5.5 22.7233 5.50181 22.1523 5.55273C21.6106 5.60108 21.3346 5.68631 21.1299 5.79297C21.0056 5.85775 20.8871 5.93266 20.7754 6.0166C20.5913 6.15491 20.3976 6.36508 20.1279 6.82812C19.8438 7.31595 19.5378 7.97062 19.0752 8.96484L18.8262 9.5H30.3398L30.0127 8.83789C29.538 7.87865 29.2235 7.2473 28.9355 6.77734C28.6625 6.33173 28.4693 6.1292 28.2871 5.99609C28.1765 5.91526 28.059 5.84351 27.9365 5.78125C27.7347 5.67873 27.4642 5.59612 26.9355 5.5498C26.3783 5.50102 25.662 5.5 24.5742 5.5Z" fill="#C90317"/>
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
