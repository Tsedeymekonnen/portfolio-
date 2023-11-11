import React from 'react';
import './AboutUs.css'
import { FaFacebook, FaTelegram, FaLinkedin, FaInstagram } from 'react-icons/fa';

function ContactUs() {
  return (
    <div className='container'>
    <section id="contact-us">

      <h2 className='title'>Contact Us</h2>
      <div className='description'>
      <p>If you have any questions, feedback, or inquiries about my services,
         please don't hesitate to get in touch with me using the contact form below,
      </p>
      <pre> EMAIL: tsedey1993gmail.com </pre>
     <pre> PHONE NO: 0962828265</pre>
     </div>
     <div className="social-media-container">
        <a href="https://t.me/TsedeyMekonnen" target="_blank" rel="noopener noreferrer">
          <FaTelegram className="social-media-icon" />
        </a>

        <a href="https://www.linkedin.com/in/tsedey-mekonnen-118a92262/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-media-icon" />
        </a>
        <a href="https://www.instagram.com/tsedi_mak" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-media-icon"/>
        </a>
      </div>
    </section>
     </div>
  );
}

export default ContactUs;