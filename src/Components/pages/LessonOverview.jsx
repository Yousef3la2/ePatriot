import React from 'react';
import { Link } from 'react-router-dom';
import SchoolNavbar from '../layout/SchoolNavbar';
import Footer from '../layout/Footer';
import '../layout/LessonOverview.css';
import { HeaderDecor, ArrowRightMIcon } from '../ui/Icons.jsx';

const LessonOverview = () => {
  return (
    <>
      <SchoolNavbar />
      
      <div className="lesson-overview-container">
        <header className="lesson-header">
          <div className="header-content-inner">
            <h1>Lesson Overview</h1>
            <div className="breadcrumb">
              <Link to="/school-dashboard" className="breadcrumb-link">
                School Management center
              </Link>
              <ArrowRightMIcon />
              <Link to="/content-library" className="breadcrumb-link">
                Educational stages
              </Link>
              <ArrowRightMIcon />
              <Link to="/curriculum-overview" className="breadcrumb-link">
                Curriculum Content
              </Link>
              <ArrowRightMIcon />
              <span className="active-page">Lesson Overview</span>
            </div>
          </div>
          
          <div className="header-decor">
            <HeaderDecor />
          </div>
        </header>

        <main className="lesson-content">
          <div className="lesson-intro">
            <div className="lesson-title-section">
              <h2>Staying Safe Online</h2>
              <button className="assign-teacher-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 4.16667V15.8333M4.16667 10H15.8333" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Assign to teacher
              </button>
            </div>
            <p className="lesson-description">
              In this lesson, students will learn the essential rules for staying safe while using the internet. 
              We will explore how to protect personal information, recognize unsafe situations, and respond 
              appropriately if something online feels uncomfortable. The goal is to help students use the internet 
              with confidence, awareness, and complete safety.
            </p>
          </div>

          <div className="learning-objectives">
            <h3>Learning Objectives</h3>
            <ul className="objectives-list">
              <li>
                <span className="objective-icon pink">🎯</span>
                <div>
                  <strong>Understanding the Risks of Sharing Personal Data</strong>
                  <p>The student understands why they should not share their full name, address, or pictures with strangers.</p>
                </div>
              </li>
              <li>
                <span className="objective-icon green">🔒</span>
                <div>
                  <strong>Learning How to Create a Strong and Secure Password</strong>
                  <p>The student knows how to create a strong password that is hard to guess.</p>
                </div>
              </li>
              <li>
                <span className="objective-icon blue">⚡</span>
                <div>
                  <strong>Proper Actions When Facing Cyberbullying</strong>
                  <p>The student knows to report to a teacher or parent instead of responding or being afraid.</p>
                </div>
              </li>
              <li>
                <span className="objective-icon purple">👁️</span>
                <div>
                  <strong>Distinguishing Unsafe Websites and Links</strong>
                  <p>The student can differentiate between trustworthy links and those that may cause harm.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="lesson-materials-section">
            <h3>Lesson materials</h3>
            <div className="materials-grid">
              <div className="material-upload">
                <h4>Lesson File (PDF)</h4>
                <div className="upload-area">
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <path d="M20 50V56.6667C20 58.8768 20.8778 60.9964 22.4406 62.5592C24.0035 64.1221 26.1232 65 28.3333 65H51.6667C53.8768 65 55.9964 64.1221 57.5592 62.5592C59.1221 60.9964 60 58.8768 60 56.6667V50M46.6667 33.3333L40 26.6667M40 26.6667L33.3333 33.3333M40 26.6667V50" stroke="#93C5FD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p>Click to select the file</p>
                </div>
              </div>

              <div className="material-downloads">
                <h4>Downloads</h4>
                <div className="download-buttons">
                  <button className="download-btn orange">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5M5.83333 8.33333L10 12.5M10 12.5L14.1667 8.33333M10 12.5V2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Download PDF file
                  </button>
                  <button className="download-btn blue">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5M5.83333 8.33333L10 12.5M10 12.5L14.1667 8.33333M10 12.5V2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Download video
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="video-related-section">
            <div className="instructional-video">
              <h4>Instructional Video</h4>
              <div className="video-placeholder">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="30" r="30" fill="#93C5FD"/>
                  <path d="M25 20L40 30L25 40V20Z" fill="white"/>
                </svg>
                <p>Click to insert the video</p>
              </div>
            </div>

            <div className="related-files">
              <h4>Related Files</h4>
              <div className="file-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Workbook.xlsx</span>
                <button className="file-download-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10M4.66667 6.66667L8 10M8 10L11.3333 6.66667M8 10V2" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <div className="file-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Summary.pdf</span>
                <button className="file-download-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10M4.66667 6.66667L8 10M8 10L11.3333 6.66667M8 10V2" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="interactive-activities">
            <h3>Interactive Activities</h3>
            <div className="activities-grid">
              <div className="activity-card">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="#93C5FD"/>
                  <path d="M16 20H20V28H16V20ZM28 20H32V28H28V20Z" fill="#1E40AF"/>
                </svg>
                <h4>Multiple choice</h4>
                <p>Choose the correct choice among the options</p>
                <button className="activity-btn">Preview</button>
              </div>

              <div className="activity-card">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path d="M12 12H20V20H12V12Z" fill="#FCD34D"/>
                  <path d="M28 12H36V20H28V12Z" fill="#F59E0B"/>
                  <path d="M12 28H20V36H12V28Z" fill="#FCD34D"/>
                  <path d="M28 28H36V36H28V28Z" fill="#F59E0B"/>
                </svg>
                <h4>Puzzle</h4>
                <p>Complete the puzzle to show the picture</p>
                <button className="activity-btn">Preview</button>
              </div>

              <div className="activity-card">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="16" cy="16" r="8" fill="#86EFAC"/>
                  <circle cx="32" cy="32" r="8" fill="#22C55E"/>
                  <path d="M16 16L32 32" stroke="#16A34A" strokeWidth="2" strokeDasharray="4 4"/>
                </svg>
                <h4>Drag and drop</h4>
                <p>Match the items with their definitions</p>
                <button className="activity-btn">Preview</button>
              </div>

              <div className="activity-card">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path d="M8 8H40V40H8V8Z" fill="#FDE68A"/>
                  <path d="M12 16H36M12 24H36M12 32H28" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <h4>Short quiz</h4>
                <p>Choose your understanding of the lesson</p>
                <button className="activity-btn">Preview</button>
              </div>
            </div>
          </div>
        </main>
      </div>
      
      <Footer />
    </>
  );
};

export default LessonOverview;
