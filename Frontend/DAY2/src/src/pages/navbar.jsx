import React from 'react';
import '../assets/CSS/navbar.css'; 
import asce from "../assets/Images/asce.jpg"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <img src={asce} alt="Logo" className="navbar__logo" style={{height:"25px",width:"90px"}} />
      </div>
      <div className="navbar__center">
        <ul className="navbar__menu">
          <li><a href="/">Home</a></li>
          <li><a href="/venues">Venues</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
      <div className="navbar__right">
        <a href="/profile">Profile</a>
      </div>
    </nav>
  );
};

export default Navbar;
