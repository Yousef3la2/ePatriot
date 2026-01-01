import React from 'react';
import SchoolNavbar from '../layout/SchoolNavbar';
import Footer from '../layout/Footer';
import '../layout/SchoolPage.css'; 

import { TeacherIcon, ContentIcon, ListIcon, ArrowRightIcon } from '../ui/Icons';


import { curriculums, teachersNotes, recentActivity } from '../../data/SchoolData';


const SchoolPage = () => {
  return (
    <>
      <SchoolNavbar />
      <div className="school-page-container">
        
        {/* Header Section */}
        <header className="school-header">
            {/* Sparkles or decorative SVGs can go here in CSS background */}
          <div className="header-content">
            <h1>School Management Center</h1>
            <p>Managing teachers and assigning customized content to them in simple steps</p>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="content-wrapper">
          
          {/* Top Actions Cards */}
          <div className="action-cards-container">
            <div className="action-card">
                <div className="card-content">
                <div className="card-icon blue-bg">
                    <TeacherIcon />
                </div>
                <h3>Teacher Management</h3>
                <p>oversee your complete roster of teaching staff</p>
                </div>
                <a href="#" className="card-link">Go To Teacher Direction <ArrowRightIcon /></a>
                
            </div>

            <div className="action-card">
                <div className="card-content">
                <div className="card-icon orange-bg">
                    <ContentIcon />
                </div>
                <h3>Educational Content Library</h3>
                <p>Review and customize, and assign lessons and activities for teachers</p>
                </div>
                <a href="#" className="card-link">Browse Content Library <ArrowRightIcon /></a>
            </div>
          </div>

          {/* Curriculums Section */}
          <section className="info-section">
            <div className="section-header">
              <h2>Curriculums</h2>
              <a href="#" className="see-all">See All</a>
            </div>
            <div className="list-container">
              {curriculums.map(item => (
                <div key={item.id} className="list-item">
                  <div className="item-left">
                    <span className="item-icon"><ListIcon /></span>
                    <span className="item-text">{item.text}</span>
                  </div>
                  <a href="#" className="item-link">{item.linkText} <ArrowRightIcon /></a>
                </div>
              ))}
            </div>
          </section>

          {/* Teacher's Notes Section */}
          <section className="info-section">
            <div className="section-header">
              <h2>Teacher's Notes</h2>
            </div>
            <div className="notes-container">
              {teachersNotes.map(note => (
                <div key={note.id} className="note-card">
                    <div className="note-avatar-col">
                        <img src={note.img} alt={note.name} />
                    </div>

                   <div className="note-content-col">
                        <div className="note-header-row">
                            <h4>{note.name}</h4>
                            <span className="note-date">{note.date}</span>
                        </div>
                        <p className="note-text">{note.note}</p>
                    </div>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Activity Section */}
          <section className="info-section">
            <div className="section-header">
              <h2>Recent Activity</h2>
              <a href="#" className="see-all">See All</a>
            </div>
             <div className="list-container">
              {recentActivity.map(item => (
                <div key={item.id} className="list-item">
                  <div className="item-left">
                     <span className="item-icon"><ListIcon /></span>
                    <span className="item-text">{item.text}</span>
                  </div>
                  <span className="item-time">{item.time}</span>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default SchoolPage;