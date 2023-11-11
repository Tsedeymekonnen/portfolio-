import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import download from '../images/download.jpg';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="branding">
        <h4>Tsedey Mekonnen Software Developer</h4>
       
      </div>

      <div className="link-container">
        <ul>
          <li>
            <Link to="/">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/Aboutus.js">
              <span>About Me</span>
            </Link>
          </li>
          <li>
            <Link to="/Contactus.js">
              <span>Contact Me</span>
            </Link>
          </li>
          <li>
            <Link to="/Experience.js">
              <span> Experience</span>
            </Link>
          </li>
          <li>
            <Link to="/cv.js">
              <span> CV</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;