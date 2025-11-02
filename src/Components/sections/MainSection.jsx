import React from "react";
import Card from "../ui/Card";
import { cardsData } from "../../data/cardsData";

const MainSection = () => {
  return (
    <div className="main-section">
      <h2 className="main-heading">
        Choose what applies to you and start your journey
      </h2>
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} index={index} />
        ))}
      </div>
    </div>
  );
};

export default MainSection;