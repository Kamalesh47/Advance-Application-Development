import React, { useEffect, useState } from 'react'
import dash1 from "../assets/images/dash1.png"
import dash2 from "../assets/images/dash2.png"
import dash3 from "../assets/images/dash3.png"
import dashimg from "../assets/images/dashimage.jpg"
import Navbar from '../components/Navbar'
import del from "../assets/images/delete.png"
import "../assets/css/Dashboard.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
export default function Dashboard() {

  const [flag,setFlag]=useState(false);
  const username=useState(localStorage.getItem('username'))
  const[total,setTotal]=useState(0)
  const[pastevent,setPastevent]=useState(0)
  const[future,setFutureevent]=useState(0)
  const[data,setData]=useState([])
  const navigate=useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:8082/gettotalevent/727721euit099@skcet.ac.in`)
      .then(response => {
        setTotal(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 
  
  useEffect(() => {
    axios.get(`http://localhost:8082/getpastevent/727721euit099@skcet.ac.in`)
      .then(response => {
        setPastevent(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 
  
  useEffect(() => {
    axios.get(`http://localhost:8082/getfutureevent/727721euit099@skcet.ac.in`)
      .then(response => {
        setFutureevent(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  useEffect(() => {
    axios.get(`http://localhost:8082/getBookingByid/727721euit099@skcet.ac.in`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 


  const handlebook=()=>
  {
    localStorage.clear();
    navigate("/")
  }

  return (
    <div>
    <Navbar/>
    <div className='dash-topcontainer'>
    <div className='dash-subcontainer1'>
    <img src={dash2}/>
    <h1>Events Booked</h1>
    <h2>{total}</h2>
    </div>
    <div className='dash-subcontainer1' style={{backgroundColor:"rgb(80, 27, 80)",boxShadow:"10px 10px rgb(250, 183, 248)"}}>
    <img src={dash3}/>
    <h1>Upcoming Events</h1>
    <h2>{future}</h2>
    </div>
    <div className='dash-subcontainer1' style={{backgroundColor:"rgb(0, 71, 30)",boxShadow:"10px 10px rgb(133, 233, 133)"}}>
    <img src={dash1}/>
    <h1>Past Events</h1>
    <h2>{pastevent}</h2>
    </div>
    </div>
    <div className='dash-sidepanel'>
    <h1>View events</h1>
    <h1>Profile</h1>
    <h1>History</h1>
    <Link to="/login"><h1 onClick={handlebook}>Logout</h1></Link>
    </div>
    <div className='dash-container'>
    {data.map((event=>
      (
        <div className='xplay-container' style={{marginRight:"3cm"}}>
        <div>
        <h1>Name : {event.name}</h1>
        <h1>Event Name : {event.eventname}</h1>
        <h1>Time : {event.time}</h1>
        <h1>Date : {event.date}</h1>

        </div>
        </div>
  )))}
    </div>
    </div>
  )
}
