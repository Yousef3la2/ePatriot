import React from "react";
import { opinionsData } from "./data/opinionsData";
import sparkle from "../../assets/Landing Page/Section 3/sparkle.svg";
import opTop from "../../assets/Landing Page/Section 5/op-top.svg";

const Opinions = () => {
  const leftColumn = opinionsData;
  const rightColumn = opinionsData;
  return (
    <section className="opinions-section">
      <div className="opinions-left">
        <h2>User opinions</h2>
        <div className="opinions-tag">+600 parents and teachers</div>
        <p className="opinions-desc">
          More than 600 parents and teachers confirmed that the platform has transformed the educational experience, making it enjoyable and easy for their children. Join them now and start your digital safety journey with your family.
        </p>
        <img src={sparkle} alt="decor" className="opinions-decor" />
      </div>
      <div className="opinions-right">
        <div className="column column-up">
          {[...leftColumn, ...leftColumn].map((item, index) => (
            <div key={`left-${item.id}-${index}`} className="opinion-card">
              <div className="opinion-header">
                <img src={item.img} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
                <p className="date">{item.date}</p>
              </div>
              <div className="opinion-body">
                <img src={opTop} className="quote-icon" />
                <p>{item.feedback}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="column column-down">
          {[...rightColumn, ...rightColumn].map((item, index) => (
            <div key={`right-${item.id}-${index}`} className="opinion-card">
              <div className="opinion-header">
                <img src={item.img} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
                <p className="date">{item.date}</p>
              </div>
              <div className="opinion-body">
                <img src={opTop} className="quote-icon" />
                <p>{item.feedback}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Opinions;
