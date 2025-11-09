import React, { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
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

    if (!password) {
      newErrors.password = "كلمة المرور مطلوبة";
    } else if (password.length < 6) {
      newErrors.password = "كلمة المرور يجب أن تكون 6 أحرف على الأقل";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      console.log("Login successful:", { email, password });
      alert("تم تسجيل الدخول بنجاح!");
    }
  };

  return (
    <div className="login-page">
      {/* Language Toggle */}
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

      {/* Logo Header */}
      <div className="top-logo-header">
        <Link to="/" className="top-logo-link">
          <div className="top-logo-icon">e</div>
          <span className="top-logo-text">Patroit</span>
        </Link>
      </div>

      {/* Decorative elements */}
      <div className="decoration decoration-top-left"></div>
      <div className="decoration decoration-top-right"></div>
      <div className="decoration decoration-bottom-left"></div>
      <div className="decoration decoration-bottom-right"></div>
      <div className="sparkle sparkle-1"></div>
      <div className="sparkle sparkle-2"></div>
      <div className="sparkle sparkle-3"></div>
      <div className="sparkle sparkle-4"></div>

      <div className="login-container">
        <div className="login-card">
          <div className="login-body">
            <h2 className="login-title">Login</h2>
            <p className="login-subtitle">Welcome back! Please log in to continue.</p>

            <form onSubmit={handleSubmit} className="login-form">
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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

              <div className="forgot-password">
                <Link to="/forgot-password" className="forgot-link">
                  Forgot your password?
                </Link>
              </div>

              <button type="submit" className="login-button">
                Login
              </button>

              <div className="signup-prompt">
                <span>Not a member yet? </span>
                <Link to="/signup" className="signup-link">
                  Create an account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
