import React from "react";
import { CiClock2 } from "react-icons/ci";
import { TiDocumentText } from "react-icons/ti";
import { FaStar } from "react-icons/fa";

const CourseCard = ({ course }) => {
  return (
    <div className="discover-card">
      <div className="image-wrapper">
        <span
          className="tag"
          style={{
            background: course.tag === "For Children" ? "#FFD9F9" : "#E5FFE0",
            color: course.tag === "For Children" ? "#FF00D4E3" : "#1DC500E3",
          }}
        >
          {course.tag}
        </span>
        <img src={course.image} alt={course.title} className="course-img" />
        <div className="discount-badge">{course.discount}</div>
      </div>

      <div className="course-info">
        <div className="details-row">
          <span>
            <CiClock2 className="discover-icon" /> {course.duration}
          </span>
          <span>
            | <TiDocumentText className="discover-icon" />
            {course.lessons}
          </span>
        </div>

        <h3 className="course-title">{course.title}</h3>
        <p className="course-desc">{course.desc}</p>

        <div className="rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={i < Math.round(course.rating) ? "filled" : ""}
              />
            ))}
          </div>
          <span>
            {course.rating.toFixed(1)} ({course.reviews} reviews)
          </span>
        </div>

        <div className="price-row">
          <span className="price">${course.price}</span>
          <span className="old-price">${course.oldPrice}</span>
        </div>

        <button
          className="register-btn"
          style={{
            marginTop: course.tag === "For Children" ? "22px" : "",
          }}
        >
          {course.btnText}
        </button>
      </div>
    </div>
  );
};

export default CourseCard;