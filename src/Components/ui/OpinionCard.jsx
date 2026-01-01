import React from "react";
import opTop from "../../assets/Landing Page/Section 5/op-top.svg";

const OpinionCard = ({ item }) => {
  return (
    <div className="opinion-card">
      <div className="opinion-header">
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={item.img} alt={item.name} />
            <div>
            <h4>{item.name}</h4>
            <span>{item.role}</span>
            </div>
        </div>
        <p className="date">{item.date}</p>
      </div>
      
      <div className="opinion-body">
        <img src={opTop} className="quote-icon" alt="quote" />
        <p>{item.feedback}</p>
      </div>
    </div>
  );
};

export default OpinionCard;