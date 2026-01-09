import React, { useState } from 'react';
import './AddTeacherModal.css';
import { 
  ProfileIcon, 
  EmailIcon, 
  PhoneIcon, 
  CloseIcon, 
  LockIcon, 
  EyeIcon 
} from './Icons';

const AddTeacherModal = ({ isOpen, onClose, onAdd }) => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    pinCode: '',
    phone: '',
    stage: '',
    grades: [] 
  });
  const [showPin, setShowPin] = useState(false);

  
  const stageGrades = {
    'Elementary Stage': ['Grade One', 'Grade Two', 'Grade Three', 'Grade Four', 'Grade Five', 'Grade Six'],
    'Middle Stage': ['Grade One', 'Grade Two', 'Grade Three'],
    'High Stage': ['Grade One', 'Grade Two', 'Grade Three']
  };

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  
  const handleStageSelect = (stage) => {
    if (formData.stage === stage) return; 
    setFormData(prev => ({ ...prev, stage, grades: [] }));
  };

  
  const handleGradeToggle = (grade) => {
    setFormData(prev => {
      const newGrades = prev.grades.includes(grade)
        ? prev.grades.filter(g => g !== grade) 
        : [...prev.grades, grade]; 
      return { ...prev, grades: newGrades };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.stage) {
      alert("Please fill in the Name and select a Stage.");
      return;
    }
    
    
    onAdd(formData);
    
    
    setFormData({ name: '', email: '', pinCode: '', phone: '', stage: '', grades: [] });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          <CloseIcon />
        </button>
        <div className="modal-header">
          <h2>Add a New teacher</h2>
        </div>

        <form onSubmit={handleSubmit} className="add-teacher-form">
          
          <div className="form-group">
            <label>Name</label>
            <div className="input-wrapper">
              <span className="input-icon"><ProfileIcon /></span>
              <input 
                type="text" 
                name="name" 
                placeholder="Full Name" 
                value={formData.name}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          </div>

          
          <div className="form-group">
            <label>Email</label>
            <div className="input-wrapper">
              <span className="input-icon"><EmailIcon /></span>
              <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={formData.email}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          </div>

          
          <div className="form-group">
            <label>Pin Code</label>
            <div className="input-wrapper">
              <span className="input-icon"><LockIcon /></span>
              <input 
                type={showPin ? "text" : "password"} 
                name="pinCode" 
                placeholder="Set a pin code" 
                value={formData.pinCode}
                onChange={handleChange}
                className="form-input"
              />
              <button 
                type="button" 
                className="password-toggle"
                onClick={() => setShowPin(!showPin)}
              >
                <EyeIcon />
              </button>
            </div>
          </div>

          
          <div className="form-group">
            <label>Mobile Phone</label>
            <div className="input-wrapper">
              <span className="input-icon"><PhoneIcon /></span>
              <input 
                type="tel" 
                name="phone" 
                placeholder="mobile number" 
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          </div>

          
          <div className="form-group">
            <label>Select the stage</label>
            <div className="stage-options">
              {['Elementary Stage', 'Middle Stage', 'High Stage'].map((stage) => (
                <div key={stage} className="stage-wrapper">
                  
                  <div 
                    className={`stage-option ${formData.stage === stage ? 'selected' : ''}`}
                    onClick={() => handleStageSelect(stage)}
                  >
                    <div className="radio-circle">
                      {formData.stage === stage && <div className="radio-dot"></div>}
                    </div>
                    <span>{stage}</span>
                  </div>

                  
                  {formData.stage === stage && (
                    <div className="grades-list">
                      {stageGrades[stage].map((grade) => (
                        <div 
                          key={grade} 
                          className={`grade-item ${formData.grades.includes(grade) ? 'active' : ''}`}
                          onClick={() => handleGradeToggle(grade)}
                        >
                          
                          <div className="checkbox-square">
                            {formData.grades.includes(grade) && <div className="checkbox-tick">✔</div>}
                          </div>
                          <span className="grade-text">{grade}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <button type="submit" className="submit-add-btn">Add the Teacher</button>
        </form>
      </div>
    </div>
  );
};

export default AddTeacherModal;