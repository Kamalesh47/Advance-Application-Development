import React, { useEffect } from 'react'
import AdminNav from '../components/AdminNav'
import dash1 from "../assets/images/dash1.png"
import dash2 from "../assets/images/dash2.png"
import dash3 from "../assets/images/dash3.png"
import { useState } from 'react';
import about1 from "../assets/images/theme1.jpg"

import CollegeList from '../pages/CollegeList';
import "../assets/css/Admin.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Admin() {
  const[flag,setFlag]=useState(true);
  const navigate=useNavigate();
  const [data,setData]=useState();
  useEffect(() => {
    axios.get('http://localhost:8082/getThemes')
      .then(response => {
        
        setFlag(false)
        setData(response.data);
        
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  const handleDelete=()=>
  {
    console.log("vgh");
     
  }
  const addtheme=()=>
  {
    navigate("/addtheme")
  }
  return (
    <div>
    <AdminNav/>
    <div>
    <div className='dddash-topcontainer'>
    <div className='dddash-subcontainer1'>
    <img src={dash2}/>
    <h1>Events Booked</h1>
    <h2>20</h2>
    </div>
    <div className='dddash-subcontainer1' style={{backgroundColor:"rgb(80, 27, 80)"}}>
    <img src={dash3}/>
    <h1>Upcoming Events</h1>
    <h2>8</h2>
    </div>
    <div className='dddash-subcontainer1' style={{backgroundColor:"rgb(0, 71, 30)"}}>
    <img src={dash1}/>
    <h1>Events History</h1>
    <h2>26</h2>
    </div>
    <div className='dddash-subcontainer1' style={{backgroundColor:"rgb(25, 20, 9)"}}>
    <img src={dash2}/>
    <h1>Events Canceled</h1>
    <h2>10</h2>
    </div>
    </div>
    <div className='Add-form'>
    {flag?<div><h1 style={{fontSize:"1.5cm",fontFamily:"cursive",color:"rgb(123, 16, 16)",textAlign:"center"}}>No Theme added yet</h1></div>:
    <div style={{display:"flex",flexWrap:"wrap"}}>
    {data.map(((event,index)=>
      (
        <div className='xplay-container' style={{marginRight:"1cm",height:"10cm",width:"6cm"}}>
        <img style={{height:"4cm",width:"5cm",marginLeft:"0.5cm"}} src={about1}/>
        <h1 style={{fontFamily:"monospace",fontSize:"0.7cm",textAlign:"center",backgroundColor:"green",color:"white"}}>{event.name}</h1>
        <h2 style={{fontFamily:"monospace",fontSize:"0.8cm",textAlign:"center"}}>{event.description}</h2>
        <h2 style={{textAlign:"center",backgroundColor:"aqua"}}>Rs/-{event.cost}</h2>
        </div>
        )))}
        </div>}
        <button onClick={addtheme}>Add Theme/Delete Theme</button>
    </div>
    </div>
    </div>
  )
}

export default Admin