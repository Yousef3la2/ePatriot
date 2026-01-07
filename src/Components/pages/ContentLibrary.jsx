import React from 'react';
import { Link } from 'react-router-dom';
import SchoolNavbar from '../layout/SchoolNavbar';
import Footer from '../layout/Footer';
import '../layout/ContentLibrary.css';
import { stagesData } from '../../data/StagesData';
import { HeaderDecor , ArrowRightMIcon } from '../ui/Icons.jsx';

const ContentLibrary = () => {
  return (
    <>
      <SchoolNavbar />
      
      <div className="edu-library-container">
        
        
        <header className="edu-header">
          <div className="header-content-inner">
            <h1>Educational Content Library</h1>
            <div className="breadcrumb">
              <Link 
                to="/school-dashboard" 
                className="breadcrumb-link"
                style={{ color: 'rgb(64, 64, 64)', textDecoration: 'none' }}
              >
                School Management center
              </Link>
              <ArrowRightMIcon />
              <span className="active-page">Educational stages</span>
            </div>
          </div>
          
          <div className="header-decor">
              <HeaderDecor />
          </div>
        </header>

        
        <main className="stages-section">
          <div className="section-titles">
            <h2>Select the educational stage</h2>
            <p>Choose the stage you wish to reach the content designated for it</p>
          </div>

          <div className="stages-grid">
            {stagesData.map((stage) => (
              <div key={stage.id} className="stage-card">
                
                
                <div className="stage-image-container">
                  
                  <img src={stage.img} alt={stage.title} />
                </div>

                <h3 className="stage-title">{stage.title}</h3>
                <p className="stage-desc">{stage.desc}</p>
                
                <button className="lessons-btn">Lessons Overview</button>
              </div>
            ))}
          </div>
        </main>

      </div>
      
      <Footer />
    </>
  );
};

export default ContentLibrary;