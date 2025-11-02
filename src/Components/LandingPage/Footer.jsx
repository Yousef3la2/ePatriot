import React from "react";
import logo from "../../assets/logo.png";
import { FaEnvelope, FaPhone, FaComments, FaInstagramSquare } from "react-icons/fa";
import { FaSquareFacebook, FaSquareWhatsapp, FaLinkedin } from "react-icons/fa6";

const Footer = () => (
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
            <a href=""><FaSquareFacebook className="socail-icon" /></a>
            <a href=""><FaInstagramSquare className="socail-icon" /></a>
            <a href=""><FaLinkedin className="socail-icon" /></a>
            <a href=""><FaSquareWhatsapp className="socail-icon" /></a>
          </div>
        </div>
        <div className="footer-links footer-links2 footer-legal">
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookie Policy</a></li>
          </ul>
        </div>
        <div className="footer-links footer-resource">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">For Parents</a></li>
            <li><a href="#">For Teachers</a></li>
            <li><a href="#">For Students</a></li>
          </ul>
        </div>
        <div className="footer-links footer-links2">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Frequently Asked Questions</a></li>
            <li><a href="#">Programs</a></li>
            <li><a href="#">Courses</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-contact">
        <h3>Contact us</h3>
        <div className="contact-methods">
          <div className="contact-method">
            <div className="contact-icon"><FaEnvelope /></div>
            <div className="contact-info">
              <h4>via email at</h4>
              <p>Support-ePatroit@gmail.com</p>
            </div>
          </div>
          <div className="contact-method">
            <div className="contact-icon"><FaPhone /></div>
            <div className="contact-info">
              <h4>Call us at</h4>
              <p>+20123456789</p>
            </div>
          </div>
          <button className="contact-method">
            <div className="contact-icon"><FaComments /></div>
            <div className="contact-info">
              <h4>Chat with us</h4>
              <p>Available 24/7</p>
            </div>
          </button>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2024 ePatroit. All rights reserved. Keeping children safe in the digital world.</p>
    </div>
  </footer>
);

export default Footer;
