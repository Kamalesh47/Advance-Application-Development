import React, { useState } from 'react'
import pic1 from "../assets/images/email.png"
import pic2 from "../assets/images/facebook.png"
import pic3 from "../assets/images/instagram.png"
import pic4 from "../assets/images/location.png"
import pic5 from "../assets/images/man.png"
import pic6 from "../assets/images/phone.png"
import Navbar from '../components/Navbar'
import pic7 from "../assets/images/message.png"
import "../assets/css/Contact.css"
import axios from 'axios'
function Contact() {

  const[email,setEmail]=useState("");
  const[name,setName]=useState("");
  const[phonenumber,setPhonenumber]=useState("");
  const[message,setMessage]=useState("");

  const handleEmail=(e)=>
  {
    setEmail(e.target.value);
  }
  const handleName=(e)=>
  {
    setName(e.target.value);
  }
  const handlePhonenumber=(e)=>
  {
    setPhonenumber(e.target.value);
  }
  const handleMessage=(e)=>
  {
    setMessage(e.target.value);
  }
  const handleSubmit=(e)=>
  {
    e.preventDefault();
    const data={
      "email":email,
      "name":name,
      "phonenumber":phonenumber,
      "message":message
    };
    console.log(data)
    if(email.length>10 && name.length>5 && phonenumber.length===13 && message.length>1)
    {
    axios.post('http://localhost:8082/postContact',data)
    try
    {
      alert("saved successful")
    }
    catch
    {
      alert("Error occur");
    }
  }
  else
  {
    alert("Fill the form properly")
  }
  }

  return (
    <div>
    <Navbar/>
    <div className='contact-container1'>
    <h1>Contact Us</h1>
    <div className='contact-containers'>
    
    <div className='contact-container2'>
    <div style={{display:"flex"}}>
    <img src={pic6} style={{height:"1cm",width:"1cm",marginTop:"1cm"}}></img><h1>+91 9468769563</h1>
    </div>
    <div style={{display:"flex"}}>
    <img src={pic1} style={{height:"1cm",width:"1cm",marginTop:"1cm"}}></img><h1>Kidsparty@gamil.com</h1>
    </div>
    <div style={{display:"flex"}}>
    <img src={pic4} style={{height:"1cm",width:"1cm",marginTop:"0.5cm"}}></img><p>#209/C, Rama Temple Rd,
    1st Stage, 2nd Block, HBR Layout,
    Bangalore - 43</p>
    </div>
    <div style={{display:"flex",padding:"1cm"}}>
    <img src={pic2} style={{height:"2cm",width:"2cm",marginTop:"-0.3cm"}}></img>
    <img src={pic3} style={{height:"1.8cm",width:"1.8cm",marginLeft:"1cm"}}></img>
    </div>
    </div>
    <div className='contact-form-container'>
    <img src={pic5} style={{height:"1cm",width:"1cm"}}></img><input placeholder='Your Name'value={name} id='name' type='text' onChange={handleName} required></input><br></br>
    <img src={pic6} style={{height:"1cm",width:"1cm"}}></img><input placeholder='Phone' value={phonenumber} id='phoneNo' type='text' onChange={handlePhonenumber} required></input><br></br>
    <img src={pic1} style={{height:"1cm",width:"1cm"}}></img><input placeholder='Email' value={email} id='email' type='text' onChange={handleEmail} required></input><br></br>
    <img src={pic7} style={{height:"1cm",width:"1cm"}}></img><input placeholder='Your Message...' value={message} id='message' onChange={handleMessage} type='text' required></input><br></br><br></br>
    <button onClick={handleSubmit}>Send</button>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Contact