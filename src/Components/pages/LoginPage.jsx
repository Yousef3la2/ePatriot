import React, { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../layout/LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [language, setLanguage] = useState("en");

  const translations = {
  en: {
    title: "Login",
    subtitle: "Welcome back! Please log in to continue.",
    emailLabel: "Email",
    emailPlaceholder: "Email",
    passwordLabel: "Password",
    passwordPlaceholder: "Password",
    forgotPassword: "Forgot your password?",
    loginButton: "Login",
    notMember: "Not a member yet?",
    createAccount: "Create an account",
    errorEmailRequired: "Email is required",
    errorInvalidEmail: "Invalid email address",
    errorPasswordRequired: "Password is required",
    errorPasswordLength: "Password must be at least 6 characters",
    alertSuccess: "Login successful!"
  },
  ar: {
    title: "تسجيل الدخول",
    subtitle: "مرحباً بعودتك! يرجى تسجيل الدخول للمتابعة.",
    emailLabel: "البريد الإلكتروني",
    emailPlaceholder: "البريد الإلكتروني",
    passwordLabel: "كلمة المرور",
    passwordPlaceholder: "كلمة المرور",
    forgotPassword: "هل نسيت كلمة المرور؟",
    loginButton: "دخول",
    notMember: "ألست عضواً بعد؟",
    createAccount: "أنشئ حساباً جديداً",
    errorEmailRequired: "البريد الإلكتروني مطلوب",
    errorInvalidEmail: "صيغة البريد الإلكتروني غير صالحة",
    errorPasswordRequired: "كلمة المرور مطلوبة",
    errorPasswordLength: "يجب أن تتكون كلمة المرور من 6 أحرف على الأقل",
    alertSuccess: "تم تسجيل الدخول بنجاح!"
  }
};

 
  const t = translations[language];

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!email) {
      newErrors.email = t.errorEmailRequired;
    } else if (!validateEmail(email)) {
      newErrors.email = t.errorInvalidEmail;
    }

    if (!password) {
      newErrors.password = t.errorPasswordRequired;
    } else if (password.length < 6) {
      newErrors.password = t.errorPasswordLength;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      console.log("Login successful:", { email, password });
      alert(t.alertSuccess);
    }
  };

  return (
    <div className="login-page" dir={language === "ar" ? "rtl" : "ltr"}>
      
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

      
      <div className="top-logo-left">
              <img src={logo} alt="Patroit Logo" className="top-logo-logo" />
              <span className="top-logo-title">Patroit </span>
      </div>

      
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
            <h2 className="login-title">{t.title}</h2>
            <p className="login-subtitle">{t.subtitle}</p>

            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  {t.emailLabel} 
                </label>
                <div className="input-wrapper">
                  <FaEnvelope className="input-icon" />
                  <input
                    type="email"
                    id="email"
                    placeholder={t.emailPlaceholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`form-input ${errors.email ? "input-error" : ""}`}
                  />
                </div>
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  {t.passwordLabel} 
                </label>
                <div className="input-wrapper">
                  <FaLock className="input-icon" />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder={t.passwordPlaceholder}
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
                  {t.forgotPassword}
                </Link>
              </div>

              <button type="submit" className="login-button">
                {t.loginButton}
              </button>

              <div className="signup-prompt">
                <span>{t.notMember} </span>
                <Link to="/signup" className="signup-link">
                  {t.createAccount}
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
