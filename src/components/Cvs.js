import React from 'react';
import photo1 from '../images/photo_2023-11-09_11-48-51.jpg';
import photo2 from '../images/photo_2023-11-09_11-48-03.jpg';
import resume from '../images/tsed.pdf';
import './Cvs.css'; // Import the CSS file

const Cvs = () => {
  return (
    <div>
        <div className="pdf-container">
        <iframe src={resume} title="Resume" className="pdf-iframe" />
      </div>
      <div className="cvs-container">
        <img src={photo1} alt="My Photo" className="cvs-image" />
        <img src={photo2} alt="My Photo" className="cvs-image" />
      </div>
      <br />
    
    </div>
  );
};

export default Cvs;