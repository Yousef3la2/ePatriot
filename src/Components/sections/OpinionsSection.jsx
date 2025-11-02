import React from "react";
import OpinionCard from "../ui/OpinionCard";
import { opinionsData } from "../../data/opinionsData";
import sparkle from "../../assets/Landing Page/Section 3/sparkle.svg";

const OpinionsSection = () => {
  const leftColumn = opinionsData;
  const rightColumn = opinionsData;

  return (
    <section className="opinions-section">
      <div className="opinions-left">
        <h2>User opinions</h2>
        <div className="opinions-tag">+600 parents and teachers</div>
        <p className="opinions-desc">
          More than 600 parents and teachers confirmed that the platform has
          transformed the educational experience, making it enjoyable and easy
          for their children. Join them now and start your digital safety
          journey with your family.
        </p>
        <img src={sparkle} alt="decor" className="opinions-decor" />
      </div>

      <div className="opinions-right">
        <div className="column column-up">
          {[...leftColumn, ...leftColumn].map((item, index) => (
            <OpinionCard key={`left-${item.id}-${index}`} item={item} />
          ))}
        </div>
        <div className="column column-down">
          {[...rightColumn, ...rightColumn].map((item, index) => (
            <OpinionCard key={`right-${item.id}-${index}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpinionsSection;