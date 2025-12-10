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
        <div className="discount-badge">
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="discount-svg"
  >
    <path
      d="M57.3404 14.6606C43.6396 20.8758 34.1057 15.616 34.2553 0C31.2641 16.2039 20.5539 20.4169 6.75532 12.2715C18.536 23.3394 14.3813 34.1502 0 39.5294C15.4074 36.9756 24.3188 43.9946 24.8404 60C31.7648 43.2653 43.8041 38.6705 60 46.0995C45.6686 37.2392 42.6906 24.7064 57.3404 14.6606Z"
      fill="#FF8000"
    />
  </svg>

  <span className="discount-text">{course.discount}</span>
</div>

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