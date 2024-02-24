// Footer.js

//import React from 'react';
import '../assets/CSS/footer.css'
import logo from '../assets/Images/asce.jpg'
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="ACE D EVENT MANAGEMENT" />
        </div>
        
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>123 Main Street, City</p>
          <p>Email: info@acedevents.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 ACE D EVENT ORGANIZERS. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
