import React from 'react';
import { FaFacebook, FaTelegram, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="links-container">
        <ul className="vertical-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Aboutus.js">About Me</Link></li>
          <li><Link to="/Contactus.js">Contact Me</Link></li>
          <li><Link to="/Experience.js">Experience</Link></li>
        </ul>
      </div>
      <div className="social-media-container">
           
        <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="social-media-icon" />
        </a>
        <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaTelegram className="social-media-icon" />
        </a>

        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-media-icon" />
        </a>
        <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-media-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;