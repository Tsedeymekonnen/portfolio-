import React from 'react';
import './App.css';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Experience from './components/Experience';
import Header from './components/Header';
import Home from './components/Home'
import { BrowserRouter,  Route, Link } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route  path="/portfolio-" element={<Home/>} />
        <Route  path="/" element={<Home/>} />
        <Route  path="/AboutUs.js" element={<AboutUs/>} />
        <Route  path = "/ContactUs.js" element = {<ContactUs/>}/> 
        <Route  path = "/Experience.js" element = {<Experience/>}/> 

      </Routes>
      <Footer/>
    </BrowserRouter> 
    </div>
  );
}

export default App;