import React from "react";
import { coursesData } from "./data/coursesData";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { CiClock2 } from "react-icons/ci";
import { TiDocumentText } from "react-icons/ti";
import { FaStar } from "react-icons/fa";
import { useScroll } from "./utils/scrollUtils";

const Discover = () => {
  const { scrollRef, scrollLeft, scrollRight } = useScroll();
  return (
    <section className="discover-section">
      <h2 className="discover-heading">Discover Our Courses</h2>
      <div className="slider-container">
        <button className="arrow left" onClick={scrollLeft}>
          <SlArrowLeft />
        </button>
        <div className="discover-container" ref={scrollRef}>
          {coursesData.map((course) => (
            <div key={course.id} className="discover-card">
              <div className="image-wrapper">
                <span className="tag" style={{ background: course.tag === "For Children" ? "#FFD9F9" : "#E5FFE0", color: course.tag === "For Children" ? "#FF00D4E3" : "#1DC500E3" }}>{course.tag}</span>
                <img src={course.image} alt={course.title} className="course-img" />
                <div className="discount-badge">{course.discount}</div>
              </div>
              <div className="course-info">
                <div className="details-row">
                  <span><CiClock2 className="discover-icon" /> {course.duration}</span>
                  <span>| <TiDocumentText className="discover-icon" />{course.lessons}</span>
                </div>
                <h3 className="course-title">{course.title}</h3>
                <p className="course-desc">{course.desc}</p>
                <div className="rating">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < Math.round(course.rating) ? "filled" : ""} />
                    ))}
                  </div>
                  <span>{course.rating.toFixed(1)} ({course.reviews} reviews)</span>
                </div>
                <div className="price-row">
                  <span className="price">${course.price}</span>
                  <span className="old-price">${course.oldPrice}</span>
                </div>
                <button className="register-btn" style={{ marginTop: course.tag === "For Children" ? "22px" : "" }}>{course.btnText}</button>
              </div>
            </div>
          ))}
        </div>
        <button className="arrow right" onClick={scrollRight}>
          <SlArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Discover;
