import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import "./LanguageToggle.css";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="language-toggle-container">
      <button
        className={`lang-button ${language === "en" ? "active" : ""}`}
        onClick={language === "ar" ? toggleLanguage : undefined}
      >
        <span className="flag-icon">🇺🇸</span>
        <span className="lang-text">English</span>
      </button>
      <button
        className={`lang-button ${language === "ar" ? "active" : ""}`}
        onClick={language === "en" ? toggleLanguage : undefined}
      >
        <span className="flag-icon">🇸🇦</span>
        <span className="lang-text">عربي</span>
      </button>
    </div>
  );
};

export default LanguageToggle;
