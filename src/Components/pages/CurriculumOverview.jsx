import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SchoolNavbar from '../layout/SchoolNavbar';
import Footer from '../layout/Footer';
import '../layout/CurriculumOverview.css';
import { HeaderDecor, ArrowRightMIcon } from '../ui/Icons.jsx';

const CurriculumOverview = () => {
  const [openGrade, setOpenGrade] = useState(null);

  const grades = [
    { id: 1, name: 'First Grade Lessons', lessons: [] },
    { id: 2, name: 'Second Grade Lessons', lessons: [] },
    { id: 3, name: 'Third Grade Lessons', lessons: [] },
    { id: 4, name: 'Fourth Grade Lessons', lessons: [] },
    { id: 5, name: 'Fifth Grade Lessons', lessons: [] },
    { id: 6, name: 'Sixth Grade Lessons', lessons: [] },
  ];

  const toggleGrade = (gradeId) => {
    setOpenGrade(openGrade === gradeId ? null : gradeId);
  };

  return (
    <>
      <SchoolNavbar />
      
      <div className="curriculum-overview-container">
        <header className="curriculum-header">
          <div className="header-content-inner">
            <h1>Curriculum Overview – Elementary Stage</h1>
            <div className="breadcrumb">
              <Link 
                to="/school-dashboard" 
                className="breadcrumb-link"
              >
                School Management center
              </Link>
              <ArrowRightMIcon />
              <Link 
                to="/content-library" 
                className="breadcrumb-link"
              >
                Educational stages
              </Link>
              <ArrowRightMIcon />
              <span className="active-page">Curriculum Content</span>
            </div>
          </div>
          
          <div className="header-decor">
            <HeaderDecor />
          </div>
        </header>

        <main className="curriculum-content">
          <div className="curriculum-header-section">
            <div>
              <h2>Elementary Stage Curriculum</h2>
              <p>Browse all grades and explore lessons for each level</p>
            </div>
            <button className="assign-grade-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 4.16667V15.8333M4.16667 10H15.8333" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Assign grade to teacher
            </button>
          </div>

          <div className="grades-accordion">
            {grades.map((grade) => (
              <div key={grade.id} className="grade-item">
                <button 
                  className={`grade-header ${openGrade === grade.id ? 'open' : ''}`}
                  onClick={() => toggleGrade(grade.id)}
                >
                  <span>{grade.name}</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none"
                    className={`chevron ${openGrade === grade.id ? 'rotated' : ''}`}
                  >
                    <path d="M6 9L12 15L18 9" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {openGrade === grade.id && (
                  <div className="grade-content">
                    <p>No lessons available yet.</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </main>
      </div>
      
      <Footer />
    </>
  );
};

export default CurriculumOverview;
