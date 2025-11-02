import React from "react";
import heroImage from "../../assets/Landing Page/Section 1/1.png";
import heroImage2 from "../../assets/Landing Page/Section 1/hero-bg.svg";

const Hero = () => (
  <div className="hero-section">
    <div className="left-part">
      <h1 className="hero-heading">
        Teach online <span className="hero-safety-word">safety</span> with simple and interactive steps
      </h1>
      <p className="hero-desc">
        An interactive platform that teaches children how to stay safe online through fun lessons, activities, and quizzes, and also provides parents and teachers with tools to monitor and ensure their progress.
      </p>
      <div className="buttons">
        <button className="start-btn"> Start now</button>
        <button className="learn-btn"> Learn more</button>
      </div>
    </div>
    <div className="right-part">
      <div className="hero-images">
        <img src={heroImage} alt="" className="hero-image top" />
        <img src={heroImage2} alt="" className="hero-image bottom" />
      </div>
    </div>
  </div>
);

export default Hero;
