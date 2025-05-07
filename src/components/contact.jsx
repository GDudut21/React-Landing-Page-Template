import React from "react";
import { Link } from "react-scroll";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import "./contact.css"; // Import your CSS file for styling

export const Contact = () => {
  return (
    <>
      {/* Background Image (optional) */}
      <div className="footer-bg-container"></div>

      {/* Footer Content */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-container">
            {/* Quick Links */}
            <div className="footer-links">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="hero" smooth={true} duration={500}>Home</Link></li>
                <li><Link to="services" smooth={true} duration={500}>Services</Link></li>
                <li><Link to="about" smooth={true} duration={500}>About Us</Link></li>
                <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
                <li><Link to="contact" smooth={true} duration={500}>Contact Us</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-contact">
              <h3>Contact Us</h3>
              <p><FaMapMarkerAlt className="contact-icon" /> Kaybitin Road Corner C. Diaz St., San Gabriel, Santa Maria, Bulacan</p>
              <p><FaPhone className="contact-icon" /> 044 4920756</p>
              <p>
                <FaEnvelope className="contact-icon" />{" "}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=archiwallcorp@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#fff', textDecoration: 'none' }}
                >
                  archiwallcorp@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Subsidiaries */}
        <div className="footer-subsidiaries">
          <h3>Our Subsidiaries</h3>
          <div className="subsidiary-logos">
            <img src="/images/archiwalllogo.png" alt="Subsidiary 1" />
            <img src="/images/subsidiary2.png" alt="Subsidiary 2" />
            <img src="/images/subsidiary3.png" alt="Subsidiary 3" />
            <img src="/images/subsidiary4.png" alt="Subsidiary 4" />
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Archiwall. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};
