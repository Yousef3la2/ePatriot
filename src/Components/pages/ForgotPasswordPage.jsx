import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./ForgotPasswordPage.css";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [language, setLanguage] = useState("en");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!email) {
      newErrors.email = "البريد الإلكتروني مطلوب";
    } else if (!validateEmail(email)) {
      newErrors.email = "البريد الإلكتروني غير صحيح";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      console.log("Password reset link sent to:", email);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="forgot-password-page">
      
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

      <div className="forgot-password-container">
        <div className="forgot-password-card">
          <div className="forgot-password-body">
            {!isSubmitted ? (
              <>
                <h2 className="forgot-password-title">Forgot your password?</h2>
                <p className="forgot-password-subtitle">
                  No problem. Enter your email address below and we'll send you a link to reset it.
                </p>

                <form onSubmit={handleSubmit} className="forgot-password-form">
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`form-input ${errors.email ? "input-error" : ""}`}
                      />
                    </div>
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>

                  <button type="submit" className="send-link-button">
                    Send the link
                  </button>

                  <Link to="/login" className="back-to-login-button">
                    Back to login
                  </Link>
                </form>
              </>
            ) : (
              <div className="success-message-container">
                <div className="success-icon">✓</div>
                <h2 className="success-title">Check your email!</h2>
                <p className="success-message">
                  We've sent a password reset link to <strong>{email}</strong>
                </p>
                <Link to="/login" className="back-to-login-button">
                  Back to login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
