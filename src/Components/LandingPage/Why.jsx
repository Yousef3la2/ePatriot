import React from "react";
import { whyData } from "./data/whyData";
import whyCenter from "../../assets/Landing Page/Section 3/1.png";
import e from "../../assets/Landing Page/Section 3/e.png";

const Why = () => (
  <section className="why-section">
    <h2 className="why-heading">Why choose ePatriot?</h2>
    <div className="why-container">
      <div className="why-left left-box">
        {whyData.slice(0, 2).map((item, i) => (
          <div key={i} className="why-box">
            <img src={item.icon} alt="" className="why-icon" />
            <div>
              <h3 className="why-title">{item.title}</h3>
              <p className="why-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="why-center">
        <div className="center-images">
          <img src={whyCenter} alt="center 1" className="center-img top" />
          <img src={e} alt="center 2" className="center-img bottom" />
        </div>
      </div>
      <div className="why-right right-box">
        {whyData.slice(2).map((item, i) => (
          <div key={i} className="why-box">
            <img src={item.icon} alt="" className="why-icon" />
            <div>
              <h3 className="why-title">{item.title}</h3>
              <p className="why-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Why;
