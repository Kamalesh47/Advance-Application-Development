// src/components/AboutUs.jsx
//import React from 'react';
//import Navbar from "./navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

const aboutUs = () => {
  return (
    <div className="about-us-container">
      <style>
        {`
          /* Add your custom CSS styles here */
          .about-us-container {
            background-color: #f8f9fa; /* Set your desired background color */
            padding: 40px 0; /* Adjust the padding as needed */
          }
          /* Add any additional styling for your About Us page */
        `}
      </style>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
          <div className="col-md-6">
            <img src="your-image-source.jpg" alt="About Us Image" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line no-irregular-whitespace
export default aboutUs;
