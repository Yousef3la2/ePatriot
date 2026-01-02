import React from "react";
import { whyData } from "../../data/whyData";
import whyCenter from "../../assets/Landing Page/Section 3/1.png";
import e from "../../assets/Landing Page/Section 3/e.png";

const WhySection = () => {
  return (
    <section className="why-section">
      <h2 className="why-heading">Why choose ePatriot?</h2>
      
      
      <div className="why-container">
        
        
        <div className="why-box area-top-left">
          <img src={whyData[0].icon} alt="" className="why-icon" />
          <div>
            <h3 className="why-title">{whyData[0].title}</h3>
            <p className="why-desc">{whyData[0].desc}</p>
          </div>
        </div>

        
        <div className="why-box area-bottom-left">
          <img src={whyData[1].icon} alt="" className="why-icon" />
          <div>
            <h3 className="why-title">{whyData[1].title}</h3>
            <p className="why-desc">{whyData[1].desc}</p>
          </div>
        </div>

        
        <div className="why-center area-center">
          <div className="center-images">
            <img src={whyCenter} alt="center 1" className="center-img top" />
            <img src={e} alt="center 2" className="center-img bottom" />
          </div>
        </div>

        
        <div className="why-box area-top-right">
          <img src={whyData[2].icon} alt="" className="why-icon" />
          <div>
            <h3 className="why-title">{whyData[2].title}</h3>
            <p className="why-desc">{whyData[2].desc}</p>
          </div>
        </div>

        
        <div className="why-box area-bottom-right">
          <img src={whyData[3].icon} alt="" className="why-icon" />
          <div>
            <h3 className="why-title">{whyData[3].title}</h3>
            <p className="why-desc">{whyData[3].desc}</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhySection;