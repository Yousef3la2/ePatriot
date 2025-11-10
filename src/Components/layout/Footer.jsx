import React from "react";
import logo from "../../assets/logo.png";
import "./Footer.css";
import {
  FaEnvelope,
  FaPhone,
  FaComments,
} from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";


const Footer = () => {
  return (
    <>
      {/* Contact Section - White Background */}
      <div className="footer-contact-section" style={{
        background: 'white',
        padding: '30px 80px',
        borderTop: '1px solid #e5e7eb'
      }}>
        <div className="footer-contact-container" style={{
          marginRight: '100px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1400px',
          margin: '0 auto',
          gap: '40px'
        }}>
          {/* Contact us via email */}
          <div className="footer-contact-item" style={{ flex: 1 }}>
            <p style={{ fontSize: '13px', color: '#6b7280', margin: '0 0 4px 0' }}>
              Contact us via email at
            </p>
            <p style={{ fontSize: '15px', fontWeight: 'bold', color: '#111827', margin: 0 }}>
              Support+ePatroit@gmail.com
            </p>
          </div>


          {/* Call us at */}
          <div className="footer-contact-item" style={{ flex: 1 }}>
            <p style={{ fontSize: '13px', color: '#6b7280', margin: '0 0 4px 0' }}>
              Call us at
            </p>
            <p style={{ fontSize: '15px', fontWeight: 'bold', color: '#111827', margin: 0 }}>
              +201234565789
            </p>
          </div>


          {/* Chat with us button */}
          <button className="footer-chat-button" style={{
            background: 'white',
            color: '#FF8C00',
            border: '2px solid #FF8C00',
            padding: '10px 22px',
            borderRadius: '25px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer',
            whiteSpace: 'nowrap'
          }}>
            <span>Chat with us</span>
            <FaComments style={{ fontSize: '16px' }} />
          </button>
        </div>
      </div>


      {/* Footer - Blue Background */}
      <footer className="footer-main" style={{
        background: '#0066FF',
        padding: '40px 80px',
        width: '100%'
      }}>
        <div className="footer-main-container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          maxWidth: '1400px',
          margin: '0 auto',
          gap: '80px'
        }}>
          {/* Left: Logo and Social */}
          <div className="footer-brand-section" style={{ flex: '0 0 auto', maxWidth: '250px' }}>
            <div className="footer-brand-header" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <img src={logo} alt="ePatroit Logo" className="footer-logo" style={{ width: '35px', height: '35px', borderRadius: '8px' }} />
              <span className="footer-brand-name" style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>Patroit</span>
            </div>
            <p className="footer-tagline" style={{ fontSize: '14px', color: 'white', margin: '0 0 20px 0', lineHeight: 1.5 }}>
              Keep your children safe online.
            </p>
           
            <div className="footer-social-links" style={{ display: 'flex', gap: '12px' }}>
              <a href="#" className="footer-social-icon" style={{ color: 'white', fontSize: '24px', textDecoration: 'none' }}>
                <FaSquareWhatsapp />
              </a>
              <a href="#" className="footer-social-icon" style={{ color: 'white', fontSize: '24px', textDecoration: 'none' }}>
                <FaLinkedin />
              </a>
              <a href="#" className="footer-social-icon" style={{ color: 'white', fontSize: '24px', textDecoration: 'none' }}>
                <FaInstagramSquare />
              </a>
              <a href="#" className="footer-social-icon" style={{ color: 'white', fontSize: '24px', textDecoration: 'none' }}>
                <FaSquareFacebook />
              </a>
            </div>
          </div>


          {/* Right: Links Columns */}
          <div className="footer-links-section" style={{
            display: 'flex',
            gap: '80px',
            flex: 1,
            justifyContent: 'flex-end'
          }}>
            {/* Legal */}
            <div className="footer-links-column">
              <h4 className="footer-column-title" style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', margin: '0 0 20px 0' }}>
                Legal
              </h4>
              <ul className="footer-column-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '12px' }}>
                  <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '15px' }}>
                    Terms of Service
                  </a>
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '15px' }}>
                    Privacy Policy
                  </a>
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '15px' }}>
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>


            {/* Resources */}
            <div className="footer-links-column">
              <h4 className="footer-column-title" style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', margin: '0 0 20px 0' }}>
                Resources
              </h4>
              <ul className="footer-column-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '12px' }}>
                  <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '15px' }}>
                    Help Center
                  </a>
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '15px' }}>
                    For Parents
                  </a>
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '15px' }}>
                    For Teachers
                  </a>
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '15px' }}>
                    For Students
                  </a>
                </li>
              </ul>
            </div>


            {/* Quick Links */}
            <div className="footer-links-column">
              <h4 className="footer-column-title" style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', margin: '0 0 20px 0' }}>
                Quick Links
              </h4>
              <ul className="footer-column-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '12px' }}>
                  <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '15px' }}>
                    About Us
                  </a>
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '15px' }}>
                    Frequently Asked Questions
                  </a>
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '15px' }}>
                    Programs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};


export default Footer;