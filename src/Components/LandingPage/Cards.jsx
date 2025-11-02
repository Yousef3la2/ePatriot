import React from "react";
import { cardsData } from "./data/cardsData";

const Cards = () => (
  <div className="main-section">
    <h2 className="main-heading">Choose what applies to you and start your journey</h2>
    <div className="cards-container">
      {cardsData.map((card, index) => (
        <div key={index} className="main-card">
          <div className="image-container">
            <img src={card.image} alt={card.title} className="main-image" />
          </div>
          <h3 className="main-title">{card.title}</h3>
          <p className="main-desc">{card.desc}</p>
          <button className="main-btn">
            <span>Start your journey</span>
            {/* SVG icon here if needed */}
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default Cards;
