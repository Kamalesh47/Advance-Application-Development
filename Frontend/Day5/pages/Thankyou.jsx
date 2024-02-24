// ThankYouPage.js
import React from 'react';
import "../assets/css/Thankyou.css";
import { useNavigate } from 'react-router-dom';

const Thankyou = () => {

    const navigate=useNavigate();
    const handleSubmit=()=>
    {
        navigate("/");
    }
  return (
    <div className="page-containerxx">
      <h1 style={{color:"#333"}}>Thank You!</h1>
      <p style={{color:"#333"}}>Event Booked successfully.</p>
      <button style={{backgroundColor:"pink",color:"black",border:"none"}} className="regBtn1" onClick={handleSubmit}>Back to home</button>
    </div>
  );
};

export default Thankyou;
