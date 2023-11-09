import React from 'react';
// import profileImage from '../images/profile-image.jpg';
import image from '../images/image.jpg';

import './Home.css';

const Home = () => {
  return (
    <div className="container">
      <div className="image-container">
        <img src={image} className="profile-image" alt="Profile" />
      </div>
      <div className="content-container">
        {/* <h1 className="title">Software Engineer</h1> */}
        <p className="description">
          Welcome to my portfolio! I am a passionate software engineer with expertise in building scalable and efficient web applications. 
          I have experience working with various programming languages and frameworks, and I enjoy solving complex problems. Take a look at
          my projects and feel free to get in touch!
        </p>
      </div>
    </div>
  );
};

export default Home;