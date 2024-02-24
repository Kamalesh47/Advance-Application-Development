import React, { useState,useEffect} from 'react'

import AdminNav from '../components/AdminNav'
import axios from 'axios';

export default function() {
  const[data,setData]=useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8082/getBooking`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 
  return (
    <div>
    <AdminNav/>
    <h1 style={{textAlign:"center"}}>View Events</h1>

    <div>
    <div style={{display:"grid",gridTemplateColumns:"auto auto auto",gap:"10px"}}>
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
    </div>
  )
}
