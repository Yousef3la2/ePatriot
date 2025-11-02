import React, { useRef } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import CourseCard from "../ui/CourseCard";
import { coursesData } from "../../data/coursesData";

const DiscoverSection = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <section className="discover-section">
      <h2 className="discover-heading">Discover Our Courses</h2>

      <div className="slider-container">
        <button className="arrow left" onClick={scrollLeft}>
          <SlArrowLeft />
        </button>

        <div className="discover-container" ref={scrollRef}>
          {coursesData.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <button className="arrow right" onClick={scrollRight}>
          <SlArrowRight />
        </button>
      </div>
    </section>
  );
};

export default DiscoverSection;