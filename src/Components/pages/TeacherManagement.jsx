import React, { useState } from 'react';
import SchoolNavbar from '../layout/SchoolNavbar';
import { Link } from 'react-router-dom';
import Footer from '../layout/Footer';
import '../layout/TeacherManagement.css';
import { SearchIcon, PlusIcon, ArrowRightMIcon, HeaderDecor } from '../ui/Icons.jsx';
import { teachersList as initialData } from '../../data/teachersData'; 
import AddTeacherModal from '../ui/AddTeacherModal'; 
import teacherImgPlaceholder from '../../assets/School Page/Ahmed Mohamed.png'; 

const TeacherManagement = () => {

  const [teachers, setTeachers] = useState(initialData);
  

  const [isModalOpen, setIsModalOpen] = useState(false);




  const handleAddTeacher = (newTeacherData) => {

      const lessonsCount = newTeacherData.grades.length > 0 
        ? `${newTeacherData.grades.length} Lessons` 
        : "No lessons assigned";

      const newTeacher = {
        id: teachers.length + 1,
        name: newTeacherData.name,
        level: newTeacherData.stage, 
        lessons: lessonsCount, 
        progress: 0, 
        img: teacherImgPlaceholder
      };

      setTeachers([...teachers, newTeacher]);
  };

  return (
    <>
      <SchoolNavbar />
      
      <div className="teacher-page-container">
        
        <header className="teacher-header">
          <div className="header-content-inner">
            <h1>Teacher Management</h1>
            <div className="breadcrumb">
              <Link 
                to="/school-dashboard" 
                className="breadcrumb-link"
                style={{ color: 'rgb(64, 64, 64)', textDecoration: 'none' }}
              >
                School Management center
              </Link>
              <ArrowRightMIcon /> 
              <span className="active-page">Teachers</span>
            </div>
          </div>
          
          <div className="header-decor">
             <HeaderDecor />
          </div>
        </header>

        <div className="action-bar-container">
          <div className="search-wrapper">
            <span className="search-icon"><SearchIcon /></span>
            <input type="text" placeholder="Finding a teacher" className="search-input" />
          </div>
          
          
          <button className="add-teacher-btn" onClick={() => setIsModalOpen(true)}>
            <span className="plus-icon"><PlusIcon /></span>
            Add a New Teacher
          </button>
        </div>

        <div className="teachers-grid">
          {teachers.map((teacher) => (
            <div key={teacher.id} className="teacher-card">
              
              <div className="teacher-card-header">
                <img src={teacher.img} alt={teacher.name} className="teacher-img" />
                <div className="teacher-info">
                  <h3>{teacher.name}</h3>
                  <p>{teacher.level}</p>
                </div>
              </div>

              <div className="teacher-stats">
                <div className="stat-row">
                  <span className="stat-label">Responsibilities of the month :</span>
                  <span className="stat-value">{teacher.lessons}</span>
                </div>
                
                <div className="stat-row progress-row">
                  <span className="stat-label">Current progress</span>
                  <span className="progress-percentage">{teacher.progress}%</span>
                </div>
                
                <div className="progress-bar-bg">
                  <div 
                    className="progress-bar-fill" 
                    style={{ width: `${teacher.progress}%` }}
                  ></div>
                </div>
              </div>

              <button className="show-details-btn">Show Details</button>
            </div>
          ))}
        </div>

      </div>
      
      <Footer />

      
      <AddTeacherModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onAdd={handleAddTeacher}
      />
    </>
  );
};

export default TeacherManagement;