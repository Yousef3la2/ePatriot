import React, { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaUser, FaCheckCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "../layout/SignUpPage.css";
import ParentsImg from "../../assets/Landing Page/Section 2/Parents.png";
import TeachersImg from "../../assets/Landing Page/Section 2/Teachers.png";
import TeenagersImg from "../../assets/Landing Page/Section 2/Teenagers.png";
import ChildrenImg from "../../assets/Landing Page/Section 2/Children.png";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [customizePage, setCustomizePage] = useState(1); // For Step 4 sub-pages
  const [formData, setFormData] = useState({
    category: "",
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    code: "",
    childrenCount: "",
    childrenAges: "",
    learnedInternet: "",
    enjoySitting: "",
    practicedParenting: "",
    importantThing: "",
    expectFromSite: "",
    readyToEducate: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [language, setLanguage] = useState("en");

  const categories = [
    { 
      id: "parent", 
      label: "Parents", 
      subtitle: "For fathers and mothers",
      description: "Monitor tools and detailed reports to help you have better and guide your child's internet usage.",
      color: "#007bff",
      image: ParentsImg
    },
    { 
      id: "teacher", 
      label: "Teacher", 
      subtitle: "For teachers in schools",
      description: "Easily lesson plans and interactive tools for teaching digital safety in the classroom.",
      color: "#26ff00",
      image: TeachersImg
    },
    { 
      id: "teenager", 
      label: "Teenager", 
      subtitle: "Aged 10 to 15 years",
      description: "Challenges and interactive videos that makes teenagers' interests.",
      color: "#00ddff",
      image: TeenagersImg
    },
    { 
      id: "child", 
      label: "Child", 
      subtitle: "Aged 5 to 10 years",
      description: "Engaging and simple educational content, filled with games and interactive activities.",
      color: "#ff00e4",
      image: ChildrenImg
    }
  ];

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateStep = () => {
    const newErrors = {};

    if (currentStep === 1) {
      if (!formData.category) {
        newErrors.category = "يرجى اختيار الفئة";
      }
    } else if (currentStep === 2) {
      if (!formData.fullName) {
        newErrors.fullName = "الاسم الكامل مطلوب";
      } else if (formData.fullName.length < 3) {
        newErrors.fullName = "الاسم يجب أن يكون 3 أحرف على الأقل";
      }

      if (!formData.email) {
        newErrors.email = "البريد الإلكتروني مطلوب";
      } else if (!validateEmail(formData.email)) {
        newErrors.email = "البريد الإلكتروني غير صحيح";
      }

      if (!formData.password) {
        newErrors.password = "كلمة المرور مطلوبة";
      } else if (formData.password.length < 6) {
        newErrors.password = "كلمة المرور يجب أن تكون 6 أحرف على الأقل";
      }

      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "تأكيد كلمة المرور مطلوب";
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "كلمة المرور غير متطابقة";
      }
    } else if (currentStep === 3) {
      if (!formData.code) {
        newErrors.code = "الكود مطلوب";
      } else if (formData.code.length < 4) {
        newErrors.code = "الكود غير صحيح";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      if (currentStep < 5) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      console.log("Sign up successful:", formData);
      setCurrentStep(4);
    }
  };

  const handleCategorySelect = (categoryId) => {
    setFormData({ ...formData, category: categoryId });
    setErrors({ ...errors, category: "" });
  };

  return (
    <div className="signup-page">
      
      <div className="language-toggle-top">
        <button
          className={`lang-btn ${language === "en" ? "active" : ""}`}
          onClick={() => setLanguage("en")}
        >
          <span className="flag-icon">🇺🇸</span>
          <span className="lang-text">English</span>
        </button>
        <button
          className={`lang-btn ${language === "ar" ? "active" : ""}`}
          onClick={() => setLanguage("ar")}
        >
          <span className="flag-icon">🇸🇦</span>
          <span className="lang-text">عربي</span>
        </button>
      </div>

      
      <div className="top-logo-header">
        <Link to="/" className="top-logo-link">
          <div className="top-logo-icon">e</div>
          <span className="top-logo-text">Patroit</span>
        </Link>
      </div>

      
      <div className="decoration decoration-top-left"></div>
      <div className="decoration decoration-top-right"></div>
      <div className="decoration decoration-bottom-left"></div>
      <div className="decoration decoration-bottom-right"></div>
      <div className="sparkle sparkle-1"></div>
      <div className="sparkle sparkle-2"></div>
      <div className="sparkle sparkle-3"></div>
      <div className="sparkle sparkle-4"></div>

      <div className="signup-container">
        <div className="signup-card">
          <div className="signup-body">
            
            <div className="progress-steps">
              <div className={`step ${currentStep >= 1 ? "active" : ""} ${currentStep > 1 ? "completed" : ""}`}>
                <div className="step-circle">
                  {currentStep > 1 ? <FaCheckCircle /> : "1"}
                </div>
                <span className="step-label">Select the category</span>
              </div>
              <div className="step-line"></div>
              <div className={`step ${currentStep >= 2 ? "active" : ""} ${currentStep > 2 ? "completed" : ""}`}>
                <div className="step-circle">
                  {currentStep > 2 ? <FaCheckCircle /> : "2"}
                </div>
                <span className="step-label">Enter your data</span>
              </div>
              <div className="step-line"></div>
              <div className={`step ${currentStep >= 3 ? "active" : ""} ${currentStep > 3 ? "completed" : ""}`}>
                <div className="step-circle">
                  {currentStep > 3 ? <FaCheckCircle /> : "3"}
                </div>
                <span className="step-label">Confirm the code</span>
              </div>
              <div className="step-line"></div>
              <div className={`step ${currentStep >= 4 ? "active" : ""}`}>
                <div className="step-circle">4</div>
                <span className="step-label">Some information</span>
              </div>
            </div>

            
            {currentStep === 1 && (
              <div className="step-content category-selection">
                <h2 className="category-main-title">Choose the category you want to enter</h2>
                <p className="category-main-subtitle">Select the user category to continue</p>

                <div className="categories-grid-new">
                  {categories.map((category, index) => (
                    <div
                      key={category.id}
                      className={`category-card-new ${formData.category === category.id ? "selected" : ""}`}
                      onClick={() => handleCategorySelect(category.id)}
                      style={{ '--category-color': category.color }}
                    >
                      <div className="category-card-top">
                        <div className="category-decorations">
                          <span className="star-decoration">✦</span>
                          <span className="plus-decoration">✚</span>
                        </div>
                        <img 
                          src={category.image} 
                          alt={category.label} 
                          className="category-image"
                        />
                      </div>
                      <div className="category-card-bottom" data-category={index + 1}>
                        <h3 className="category-title">{category.label}</h3>
                        <p className="category-subtitle">{category.subtitle}</p>
                        <p className="category-description">{category.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {errors.category && <span className="error-message">{errors.category}</span>}

                <button onClick={handleNext} className="select-category-button">
                  Select category
                </button>
              </div>
            )}

            
            {currentStep === 2 && (
              <div className="step-content">
                <h2 className="signup-title">Create a new account</h2>
                <p className="signup-subtitle">Welcome! Please enter your details to continue</p>

                <form onSubmit={handleSubmit} className="signup-form">
                  <div className="form-group">
                    <label htmlFor="fullName" className="form-label">
                      Name
                    </label>
                    <div className="input-wrapper">
                      <FaUser className="input-icon" />
                      <input
                        type="text"
                        id="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`form-input ${errors.fullName ? "input-error" : ""}`}
                      />
                    </div>
                    {errors.fullName && <span className="error-message">{errors.fullName}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <div className="input-wrapper">
                      <FaEnvelope className="input-icon" />
                      <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`form-input ${errors.email ? "input-error" : ""}`}
                      />
                    </div>
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <div className="input-wrapper">
                      <FaLock className="input-icon" />
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className={`form-input ${errors.password ? "input-error" : ""}`}
                      />
                      <button
                        type="button"
                        className="password-toggle"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                    {errors.password && <span className="error-message">{errors.password}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="confirmPassword" className="form-label">
                      Confirm Password
                    </label>
                    <div className="input-wrapper">
                      <FaLock className="input-icon" />
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        className={`form-input ${errors.confirmPassword ? "input-error" : ""}`}
                      />
                      <button
                        type="button"
                        className="password-toggle"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                    {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                  </div>

                  <button type="button" onClick={handleNext} className="create-account-button">
                    Create an account
                  </button>

                  <div className="login-prompt">
                    <span>Already a member? </span>
                    <Link to="/login" className="login-link">
                      Log in
                    </Link>
                  </div>
                </form>
              </div>
            )}

            
            {currentStep === 3 && (
              <div className="step-content">
                <h2 className="signup-title">Confirm verification code</h2>
                <p className="signup-subtitle">
                  Enter the code that was sent to <strong style={{ color: '#1e90ff' }}>{formData.email}</strong>
                </p>

                <form onSubmit={handleSubmit} className="signup-form">
                  <div className="form-group">
                    <div className="code-inputs-wrapper">
                      <input
                        type="text"
                        maxLength="1"
                        className="code-box"
                        onChange={(e) => {
                          if (e.target.value && e.target.nextSibling) {
                            e.target.nextSibling.focus();
                          }
                          const code = Array.from(document.querySelectorAll('.code-box'))
                            .map(input => input.value)
                            .join('');
                          setFormData({ ...formData, code });
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Backspace' && !e.target.value && e.target.previousSibling) {
                            e.target.previousSibling.focus();
                          }
                        }}
                      />
                      <input
                        type="text"
                        maxLength="1"
                        className="code-box"
                        onChange={(e) => {
                          if (e.target.value && e.target.nextSibling) {
                            e.target.nextSibling.focus();
                          }
                          const code = Array.from(document.querySelectorAll('.code-box'))
                            .map(input => input.value)
                            .join('');
                          setFormData({ ...formData, code });
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Backspace' && !e.target.value && e.target.previousSibling) {
                            e.target.previousSibling.focus();
                          }
                        }}
                      />
                      <input
                        type="text"
                        maxLength="1"
                        className="code-box"
                        onChange={(e) => {
                          if (e.target.value && e.target.nextSibling) {
                            e.target.nextSibling.focus();
                          }
                          const code = Array.from(document.querySelectorAll('.code-box'))
                            .map(input => input.value)
                            .join('');
                          setFormData({ ...formData, code });
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Backspace' && !e.target.value && e.target.previousSibling) {
                            e.target.previousSibling.focus();
                          }
                        }}
                      />
                      <input
                        type="text"
                        maxLength="1"
                        className="code-box"
                        onChange={() => {
                          const code = Array.from(document.querySelectorAll('.code-box'))
                            .map(input => input.value)
                            .join('');
                          setFormData({ ...formData, code });
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Backspace' && !e.target.value && e.target.previousSibling) {
                            e.target.previousSibling.focus();
                          }
                        }}
                      />
                    </div>
                    {errors.code && <span className="error-message">{errors.code}</span>}
                  </div>

                  <div className="resend-prompt">
                    <span>Did not receive the code? Resend in 30 seconds</span>
                  </div>

                  <button type="submit" className="verify-button">
                    Confirm
                  </button>
                </form>
              </div>
            )}

            
            {currentStep === 4 && (
              <div className="step-content">
                <h2 className="customize-title">Let's customize your experience.</h2>
                <p className="customize-subtitle">Answer a few quick questions to help us serve you better.</p>

                
                <div className="question-progress">
                  <div className={`progress-dot ${customizePage >= 1 ? "active" : ""}`}></div>
                  <div className="progress-line"></div>
                  <div className={`progress-dot ${customizePage >= 2 ? "active" : ""}`}></div>
                  <div className="progress-line"></div>
                  <div className={`progress-dot ${customizePage >= 3 ? "active" : ""}`}></div>
                  <div className="progress-line"></div>
                  <div className={`progress-dot ${customizePage >= 4 ? "active" : ""}`}></div>
                </div>

                <form className="customize-form">
                  
                  {customizePage === 1 && (
                    <>
                      <div className="form-section">
                        <h3 className="section-title">Information about children</h3>

                        <div className="form-group">
                          <label htmlFor="childrenCount" className="form-label">
                            How many children do you have?
                          </label>
                          <input
                            type="number"
                            id="childrenCount"
                            placeholder="Enter number"
                            value={formData.childrenCount}
                            onChange={(e) => setFormData({ ...formData, childrenCount: e.target.value })}
                            className="form-input customize-input"
                            min="0"
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="childrenAges" className="form-label">
                            What are their ages? (Separate the ages with a comma)
                          </label>
                          <input
                            type="text"
                            id="childrenAges"
                            placeholder="Example: 5, 12, 8"
                            value={formData.childrenAges}
                            onChange={(e) => setFormData({ ...formData, childrenAges: e.target.value })}
                            className="form-input customize-input"
                          />
                        </div>
                      </div>

                      <div className="customize-buttons">
                        <button 
                          type="button" 
                          className="previous-button"
                          onClick={() => setCurrentStep(3)}
                        >
                          previous
                        </button>
                        <button 
                          type="button" 
                          className="next-button-customize"
                          onClick={() => setCustomizePage(2)}
                        >
                          Next
                        </button>
                      </div>
                    </>
                  )}

                  
                  {customizePage === 2 && (
                    <>
                      <div className="form-section">
                        <h3 className="section-title">Information about children</h3>

                        <div className="form-group">
                          <label htmlFor="learnedInternet" className="form-label">
                            Have your children learned about the internet before?
                          </label>
                          <input
                            type="text"
                            id="learnedInternet"
                            placeholder="Your answer"
                            value={formData.learnedInternet}
                            onChange={(e) => setFormData({ ...formData, learnedInternet: e.target.value })}
                            className="form-input customize-input"
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="enjoySitting" className="form-label">
                            Do your children enjoy sitting on the phone and the internet?
                          </label>
                          <input
                            type="text"
                            id="enjoySitting"
                            placeholder="Your answer"
                            value={formData.enjoySitting}
                            onChange={(e) => setFormData({ ...formData, enjoySitting: e.target.value })}
                            className="form-input customize-input"
                          />
                        </div>
                      </div>

                      <div className="customize-buttons">
                        <button 
                          type="button" 
                          className="previous-button"
                          onClick={() => setCustomizePage(1)}
                        >
                          previous
                        </button>
                        <button 
                          type="button" 
                          className="next-button-customize"
                          onClick={() => setCustomizePage(3)}
                        >
                          Next
                        </button>
                      </div>
                    </>
                  )}

                  
                  {customizePage === 3 && (
                    <>
                      <div className="form-section">
                        <h3 className="section-title">Information about you (the parents)</h3>

                        <div className="form-group">
                          <label htmlFor="practicedParenting" className="form-label">
                            Have you ever practiced parenting through the internet?
                          </label>
                          <input
                            type="text"
                            id="practicedParenting"
                            placeholder="Your answer"
                            value={formData.practicedParenting}
                            onChange={(e) => setFormData({ ...formData, practicedParenting: e.target.value })}
                            className="form-input customize-input"
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="importantThing" className="form-label">
                            What is the most important thing you are interested in learning about the internet?
                          </label>
                          <input
                            type="text"
                            id="importantThing"
                            placeholder="Your answer"
                            value={formData.importantThing}
                            onChange={(e) => setFormData({ ...formData, importantThing: e.target.value })}
                            className="form-input customize-input"
                          />
                        </div>
                      </div>

                      <div className="customize-buttons">
                        <button 
                          type="button" 
                          className="previous-button"
                          onClick={() => setCustomizePage(2)}
                        >
                          previous
                        </button>
                        <button 
                          type="button" 
                          className="next-button-customize"
                          onClick={() => setCustomizePage(4)}
                        >
                          Next
                        </button>
                      </div>
                    </>
                  )}

                  
                  {customizePage === 4 && (
                    <>
                      <div className="form-section">
                        <h3 className="section-title">Information about you (the parents)</h3>

                        <div className="form-group">
                          <label htmlFor="expectFromSite" className="form-label">
                            What do you expect the site to help you with?
                          </label>
                          <input
                            type="text"
                            id="expectFromSite"
                            placeholder="Your answer"
                            value={formData.expectFromSite}
                            onChange={(e) => setFormData({ ...formData, expectFromSite: e.target.value })}
                            className="form-input customize-input"
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="readyToEducate" className="form-label">
                            Are you ready to read articles and watch videos to educate children?
                          </label>
                          <input
                            type="text"
                            id="readyToEducate"
                            placeholder="Your answer"
                            value={formData.readyToEducate}
                            onChange={(e) => setFormData({ ...formData, readyToEducate: e.target.value })}
                            className="form-input customize-input"
                          />
                        </div>
                      </div>

                      <div className="customize-buttons">
                        <button 
                          type="button" 
                          className="previous-button"
                          onClick={() => setCustomizePage(3)}
                        >
                          previous
                        </button>
                        <button 
                          type="button" 
                          className="next-button-customize"
                          onClick={() => setCurrentStep(5)}
                        >
                          Next
                        </button>
                      </div>
                    </>
                  )}
                </form>
              </div>
            )}

            
            {currentStep === 5 && (
              <div className="step-content success-content">
                <div className="success-icon-large">✓</div>
                <h2 className="success-title">Account Created Successfully!</h2>
                <p className="success-message">
                  Welcome to Patroit! Your account has been created and verified.
                </p>
                <button onClick={() => navigate("/login")} className="go-to-login-button">
                  Go to Login
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
