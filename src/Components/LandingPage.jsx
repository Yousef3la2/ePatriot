import React, { useState } from "react";
import { useRef } from "react";
import "@fontsource/ibm-plex-sans"; 
import logo from "../assets/logo.png";
import "./LandingPage.css";
import { SlArrowDown } from "react-icons/sl";
import heroImage from "../assets/Landing Page/Section 1/1.png";
import heroImage2 from "../assets/Landing Page/Section 1/hero-bg.svg";
import mainImag1 from "../assets/Landing Page/Section 2/Parents.png";
import mainImag2 from "../assets/Landing Page/Section 2/Teachers.png";
import mainImag3 from "../assets/Landing Page/Section 2/Teenagers.png";
import mainImag4 from "../assets/Landing Page/Section 2/Children.png";
import whyCenter from "../assets/Landing Page/Section 3/1.png";
import e from "../assets/Landing Page/Section 3/e.png";
import whyParent from "../assets/Landing Page/Section 3/parent.svg";
import whyDate from "../assets/Landing Page/Section 3/date.svg";
import whyBurgerIcon from "../assets/Landing Page/Section 3/burger.svg";
import whyUni from "../assets/Landing Page/Section 3/uni.svg";
import imagesec4 from "../assets/Landing Page/Section 4/Fake image.png";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { CiClock2 } from "react-icons/ci";
import { TiDocumentText } from "react-icons/ti";
import { FaStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import sparkle from "../assets/Landing Page/Section 3/sparkle.svg";
import opTop from "../assets/Landing Page/Section 5/op-top.svg";
import avatar from "../assets/Landing Page/Section 4/avatar.jpg"
import {
  FaEnvelope,
  FaPhone,
  FaComments,
  FaChevronRight,
} from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

//Logic///
const LandingPage = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showOurStory, setOurStory] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollRef = useRef(null);
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };
  //  const leftColumn = opinionsData.slice(0, 3);
  // const rightColumn = opinionsData.slice(3);

  //// Objects////
  const cardsData = [
    {
      image: mainImag1,
      title: "Parents",
      desc: "Practical resources and tracking boards to help you monitor your children's progress.",
    },
    {
      image: mainImag2,
      title: "Teachers",
      desc: "Ready-made tools and interactive lessons to teach your students about online safety.",
    },
    {
      image: mainImag3,
      title: "Teenagers",
      desc: "Challenges, videos, and quizzes suitable for their age to make them smarter online.",
    },
    {
      image: mainImag4,
      title: "Children",
      desc: "Simple lessons and fun games to learn about digital safety.",
    },
  ];
  const data = [
    {
      icon: whyParent,
      title: "Full support for parents and teachers",
      desc: "Tracking boards and reports that help you monitor and guide your children and students with easy steps.",
    },
    {
      icon: whyDate,
      title: "Examples from our daily lives",
      desc: "Content aligned with our values, featuring examples from the Middle East so education feels relevant to them.",
    },
    {
      icon: whyBurgerIcon,
      title: "Age-appropriate content for your child",
      desc: "Simple lessons for kids, and smart challenges for teenagers... each has their own path.",
    },
    {
      icon: whyUni,
      title: "Learning through interaction",
      desc: "No boring lectures — just games, quizzes, and hands-on experiences that make learning fun.",
    },
  ];
  const courses = [
    {
      id: 1,
      tag: "For Teachers",
      image: imagesec4,
      discount: "50%",
      duration: "20 hours",
      lessons: "50 lessons",
      title: "Parents' guide to monitoring internet use",
      desc: "Tools and practical guidelines for parents to monitor their children's activity on smart devices.",
      rating: 4.0,
      reviews: "1.5k",
      price: 350,
      oldPrice: 500,
      btnText: "Register for the course",
    },
    {
      id: 2,
      tag: "For Children",
      image: imagesec4,
      discount: "Free",
      duration: "15 hours",
      lessons: "30 lessons",
      title: "Learn the basics of safe internet usage",
      desc: "Engaging lessons that teach children how to use the internet wisely and safely.",
      rating: 4.5,
      reviews: "1.2k",
      price: 280,
      oldPrice: 400,
      btnText: "Register for the course",
    },
    {
      id: 3,
      tag: "For Children",
      image: imagesec4,
      discount: "Free",
      duration: "15 hours",
      lessons: "30 lessons",
      title: "Learn the basics of safe internet usage",
      desc: "Engaging lessons that teach children how to use the internet wisely and safely.",
      rating: 4.5,
      reviews: "1.2k",
      price: 280,
      oldPrice: 400,
      btnText: "Register for the course",
    },
    {
      id: 4,
      tag: "For Teachers",
      image: imagesec4,
      discount: "50%",
      duration: "20 hours",
      lessons: "50 lessons",
      title: "Parents' guide to monitoring internet use",
      desc: "Tools and practical guidelines for parents to monitor their children's activity on smart devices.",
      rating: 4.0,
      reviews: "1.5k",
      price: 350,
      oldPrice: 500,
      btnText: "Register for the course",
    },
    {
      id: 5,
      tag: "For Teachers",
      image: imagesec4,
      discount: "50%",
      duration: "20 hours",
      lessons: "50 lessons",
      title: "Parents' guide to monitoring internet use",
      desc: "Tools and practical guidelines for parents to monitor their children's activity on smart devices.",
      rating: 4.0,
      reviews: "1.5k",
      price: 350,
      oldPrice: 500,
      btnText: "Register for the course",
    },
    {
      id: 6,
      tag: "For Teachers",
      image: imagesec4,
      discount: "50%",
      duration: "20 hours",
      lessons: "50 lessons",
      title: "Parents' guide to monitoring internet use",
      desc: "Tools and practical guidelines for parents to monitor their children's activity on smart devices.",
      rating: 4.0,
      reviews: "1.5k",
      price: 350,
      oldPrice: 500,
      btnText: "Register for the course",
    },
  ];

  const opinionsData = [
    {
      id: 1,
      name: "Ahmed Mohamed",
      role: "Teacher",
      date: "02/08/2025",
      img:avatar,
      feedback:
        "I have followed the excellent content and presented it practically to the students, which greatly impacted their knowledge about online safety.",
    },
    {
      id: 2,
      name: "Sara Ali",
      role: "Parent",
      date: "02/08/2025",
      img: avatar,
      feedback:
        "This platform made it easy to monitor my children’s progress and made them love learning again!",
    },
    {
      id: 3,
      name: "Mohamed Tarek",
      role: "Teacher",
      date: "02/08/2025",
      img: avatar,
      feedback:
        "Great content! My students were very engaged and excited to learn online safety through fun lessons.",
    },
    {
      id: 4,
      name: "Mona Adel",
      role: "Parent",
      date: "02/08/2025",
      img: avatar,
      feedback:
        "It helped me understand how to keep my kids safe online. Totally recommended!",
    },
    {
      id: 5,
      name: "Omar Hassan",
      role: "Teacher",
      date: "02/08/2025",
      img:avatar,
      feedback:
        "The resources provided are detailed and very useful for classroom activities.",
    },
    {
      id: 6,
      name: "Nour Youssef",
      role: "Parent",
      date: "02/08/2025",
      img: avatar,
      feedback:
        "I loved how simple and practical the platform is. My children learned safely and happily!",
    },
    {
      id: 7,
      name: "Nour Youssef",
      role: "Parent",
      date: "02/08/2025",
      img: avatar,
      feedback:
        "I loved how simple and practical the platform is. My children learned safely and happily!",
    },
    {
      id: 8,
      name: "Nour Youssef",
      role: "Parent",
      date: "02/08/2025",
      img: avatar,
      feedback:
        "I loved how simple and practical the platform is. My children learned safely and happily!",
    },
    {
      id: 9,
      name: "Nour Youssef",
      role: "Parent",
      date: "02/08/2025",
      img: avatar,
      feedback:
        "I loved how simple and practical the platform is. My children learned safely and happily!",
    },
  ];

  const faqData = [
    {
      question:
        "What is the appropriate age to start learning about digital security?",
      answer:
        "Children can start learning basic digital safety concepts as early as age 5-6 with age-appropriate content. Our platform offers different learning paths tailored for children (6-12), teenagers (13-17), and adults, ensuring the content matches their understanding level and needs.",
    },
    {
      question: "Is the platform suitable for teachers as well?",
      answer:
        "Yes, absolutely! We provide specialized resources for teachers including lesson plans, interactive activities, and progress tracking tools. Teachers can monitor student progress, assign lessons, and access ready-made educational materials to teach digital safety effectively in classrooms.",
    },
    {
      question: "Do I need prior experience to use the platform?",
      answer:
        "No prior experience is needed. Our platform is designed to be user-friendly for everyone. We provide step-by-step guides, intuitive interfaces, and support resources to help parents, teachers, and students navigate the platform easily, regardless of their technical background.",
    },
    {
      question: "How does a guardian know their child's level of progress?",
      answer:
        "Guardians can track progress through our comprehensive dashboard that shows completed lessons, quiz scores, and skill development. We provide detailed reports, achievement badges, and regular progress updates. Parents and teachers can also set up notifications to stay informed about their child's learning journey.",
    },
    {
      question: "Is the content available in multiple languages?",
      answer:
        "Currently, our platform is available in Arabic and English, with more languages coming soon. All content is culturally relevant and adapted to suit different regional contexts while maintaining the core digital safety principles.",
    },
    {
      question: "Can I use the platform on mobile devices?",
      answer:
        "Yes, our platform is fully responsive and works seamlessly on smartphones, tablets, and desktop computers. You can access all features, track progress, and complete lessons from any device with an internet connection.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  // const half = Math.ceil(opinionsData.length / 2);
  const leftColumn = opinionsData;
  const rightColumn = opinionsData;

  return (
    <>
      <div className="landing-container">
        <nav className={`navbar-container ${isMenuOpen ? "menu-active" : ""}`}>
          {" "}
          <div className="navbar-left">
            <img src={logo} alt="Patroit Logo" className="navbar-logo" />
            <span className="navbar-title">Patroit </span>
          </div>
          <button
            className="burger-menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
          <div className="navbar-center">
            <ul className="navbar-ul">
              <li>
                <a href="#">Home Page</a>
              </li>
              <li
                className="dropdown"
                onClick={() => {
                  setShowCategories(!showCategories);
                  setOurStory(false);
                }}
              >
                <span>
                  {" "}
                  <SlArrowDown className="navbar-arrow" /> Categories{" "}
                </span>
                {showCategories && (
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">Technology</a>
                    </li>
                    <li>
                      <a href="#">Politics</a>
                    </li>
                    <li>
                      <a href="#">Sports</a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a href="#">Subscribe</a>
              </li>
              <li
                className="dropdown"
                onClick={() => {
                  setOurStory(!showOurStory);
                  setShowCategories(false);
                }}
              >
                <span>
                  {" "}
                  <SlArrowDown className="navbar-arrow" /> Our Story
                </span>
                {showOurStory && (
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#"> Our Story</a>
                    </li>
                    <li>
                      <a href="#"> Join Us </a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </nav>
        <div className="hero-section">
          <div className="left-part">
            <h1 className="hero-heading">
              Teach online <span className="hero-safety-word">safety</span> with
              simple and interactive steps
            </h1>
            <p className="hero-desc">
              An interactive platform that teaches children how to stay safe
              online through fun lessons, activities, and quizzes, and also
              provides parents and teachers with tools to monitor and ensure
              their progress.
            </p>
            <div className="buttons">
              <button className="start-btn"> Start now</button>
              <button className="learn-btn"> Learn more</button>
            </div>
          </div>
          <div className="right-part">
            <div className="hero-images">
              <img src={heroImage} alt="" className="hero-image top" />
              <img src={heroImage2} alt="" className="hero-image bottom" />
            </div>
          </div>
        </div>
        <div className="main-section">
          <h2 className="main-heading">
            Choose what applies to you and start your journey
          </h2>
          <div className="cards-container">
            {cardsData.map((card, index) => (
              <div key={index} className="main-card">
                <div className="image-container">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="main-image"
                  />
                </div>
                <h3 className="main-title">{card.title}</h3>
                <p className="main-desc">{card.desc}</p>
                <button class="main-btn">
                  <span>Start your journey</span> <svg width="24" height="24" style={{ transform: 'rotateY(180deg)' }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.56994 18.82C9.37994 18.82 9.18994 18.75 9.03994 18.6L2.96994 12.53C2.67994 12.24 2.67994 11.76 2.96994 11.47L9.03994 5.4C9.32994 5.11 9.80994 5.11 10.0999 5.4C10.3899 5.69 10.3899 6.17 10.0999 6.46L4.55994 12L10.0999 17.54C10.3899 17.83 10.3899 18.31 10.0999 18.6C9.95994 18.75 9.75994 18.82 9.56994 18.82Z" fill="currentColor"/>
<path d="M20.4999 12.75H3.66992C3.25992 12.75 2.91992 12.41 2.91992 12C2.91992 11.59 3.25992 11.25 3.66992 11.25H20.4999C20.9099 11.25 21.2499 11.59 21.2499 12C21.2499 12.41 20.9099 12.75 20.4999 12.75Z" fill="currentColor"/>
</svg></button>
              </div>
            ))}
          </div>
        </div>
        <section className="why-section">
          <h2 className="why-heading">Why choose ePatriot?</h2>
          <div className="why-container">
            <div className="why-left left-box">
              {data.slice(0, 2).map((item, i) => (
                <div key={i} className="why-box">
                  <img src={item.icon} alt="" className="why-icon" />
                  <div>
                    <h3 className="why-title">{item.title}</h3>
                    <p className="why-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="why-center">
              <div className="center-images">
                <img
                  src={whyCenter}
                  alt="center 1"
                  className="center-img top"
                />
                <img src={e} alt="center 2" className="center-img bottom" />
              </div>
            </div>

            <div className="why-right right-box">
              {data.slice(2).map((item, i) => (
                <div key={i} className="why-box">
                  <img src={item.icon} alt="" className="why-icon" />
                  <div>
                    <h3 className="why-title">{item.title}</h3>
                    <p className="why-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="discover-section">
          <h2 className="discover-heading">Discover Our Courses</h2>

          <div className="slider-container">
            <button className="arrow left" onClick={scrollLeft}>
              <SlArrowLeft />
            </button>

            <div className="discover-container" ref={scrollRef}>
              {courses.map((course) => (
                <div key={course.id} className="discover-card">
                  <div className="image-wrapper">
                    <span
                      className="tag"
                      style={{
                        background:
                          course.tag === "For Children" ? "#FFD9F9" : "#E5FFE0",
                        color:
                          course.tag === "For Children"
                            ? "#FF00D4E3"
                            : "#1DC500E3",
                      }}
                    >
                      {course.tag}
                    </span>
                    <img
                      src={course.image}
                      alt={course.title}
                      className="course-img"
                    />
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
                            className={
                              i < Math.round(course.rating) ? "filled" : ""
                            }
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
              ))}
            </div>

            <button className="arrow right" onClick={scrollRight}>
              <SlArrowRight />
            </button>
          </div>
        </section>
        <section className="opinions-section">
          <div className="opinions-left">
            <h2>User opinions</h2>
            <div className="opinions-tag">+600 parents and teachers</div>
            <p className="opinions-desc">
              More than 600 parents and teachers confirmed that the platform has
              transformed the educational experience, making it enjoyable and
              easy for their children. Join them now and start your digital
              safety journey with your family.
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
        <section className="faq-section">
          <h2 className="faq-heading">Frequently Asked Questions</h2>
          <div className="faq-container">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
              >
                <div className="faq-border-wrapper">
                  <button
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span>{faq.question}</span>
                    <div className={`faq-question-arrow ${
                        activeIndex === index ? "open" : ""
                      }`}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.0001 21.2501C11.8101 21.2501 11.6201 21.1801 11.4701 21.0301L5.40012 14.9601C5.11012 14.6701 5.11012 14.1901 5.40012 13.9001C5.69012 13.6101 6.17012 13.6101 6.46012 13.9001L12.0001 19.4401L17.5401 13.9001C17.8301 13.6101 18.3101 13.6101 18.6001 13.9001C18.8901 14.1901 18.8901 14.6701 18.6001 14.9601L12.5301 21.0301C12.3801 21.1801 12.1901 21.2501 12.0001 21.2501Z" fill="white"/>
                      <path d="M12 21.08C11.59 21.08 11.25 20.74 11.25 20.33L11.25 3.5C11.25 3.09 11.59 2.75 12 2.75C12.41 2.75 12.75 3.09 12.75 3.5L12.75 20.33C12.75 20.74 12.41 21.08 12 21.08Z" fill="white"/>
                    </svg></div>
                  </button>
                  <div
                    className={`faq-answer ${
                      activeIndex === index ? "open" : ""
                    }`}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <footer className="footer-section">
          <div className="footer-top">
            <div className="footer-main">
              <div className="footer-brand">
                <div className="brand-logo">
                  <img src={logo} alt="ePatroit Logo" />
                  <span>Patroit</span>
                </div>
                <p className="brand-tagline">Keep your children safe online</p>
                <div className="soical">
                  <a href="">
                    <FaSquareFacebook className="socail-icon" />
                  </a>
                  <a href="">
                    {" "}
                    <FaInstagramSquare className="socail-icon" />
                  </a>
                  <a href="">
                    <FaLinkedin className="socail-icon" />
                  </a>
                  <a href="">
                    <FaSquareWhatsapp className="socail-icon" />
                  </a>
                </div>
              </div>

              <div className="footer-links footer-links2 footer-legal">
                <h4>Legal</h4>
                <ul>
                  <li>
                    <a href="#">Terms of Service</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Cookie Policy</a>
                  </li>
                </ul>
              </div>

              <div className="footer-links footer-resource">
                <h4>Resources</h4>
                <ul>
                  <li>
                    <a href="#">Help Center</a>
                  </li>
                  <li>
                    <a href="#">For Parents</a>
                  </li>
                  <li>
                    <a href="#">For Teachers</a>
                  </li>
                  <li>
                    <a href="#">For Students</a>
                  </li>
                </ul>
              </div>

              <div className="footer-links footer-links2">
                <h4>Quick Links</h4>
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Frequently Asked Questions</a>
                  </li>
                  <li>
                    <a href="#">Programs</a>
                  </li>
                  <li>
                    <a href="#">Courses</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-contact">
              <h3>Contact us</h3>
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-info">
                    <h4>via email at</h4>
                    <p>Support-ePatroit@gmail.com</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <div className="contact-info">
                    <h4>Call us at</h4>
                    <p>+20123456789</p>
                  </div>
                </div>

                <button className="contact-method">
                  <div className="contact-icon">
                    <FaComments />
                  </div>
                  <div className="contact-info">
                    <h4>Chat with us</h4>
                    <p>Available 24/7</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              &copy; 2024 ePatroit. All rights reserved. Keeping children safe
              in the digital world.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;
