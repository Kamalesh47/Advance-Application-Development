import React from 'react'
import '../Styles/Navbar.css'; 
import '../Styles/Home.css'; 
import '../Styles/BookEvents.css'; 
import logo1 from '../Assets/Logo1.png'
import {  Avatar, IconButton,Box,Menu,MenuItem,Divider,ListItemIcon} from '@mui/material'
import { AccountBox,  Logout} from '@mui/icons-material';
import {Link} from 'react-router-dom'
import { useState,useEffect} from 'react';
import Footer from './Footer';
import '../Styles/Status.css'
import axios from 'axios';
import DelUser from './DelUser';

function Status() {

  const[open1,setOpen1] = useState('');

  const [eventName, setEventName] = useState('');
  const [name, setName] = useState('');
  const [id, setId] = useState('');
 
  const handleOpen1 = (eventName,name,id) => {
    setOpen1(true);
    setEventName(eventName);
    setName(name);
    setId(id);
}

  const handleClose1 = () => {
    setOpen1(false);
}


  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/book")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  const handleStatusChange = async (eventId, status) => {
    console.log("Updating status for event ID:", eventId);
    console.log("New status:", status);
    try {
        await axios.put(`http://localhost:8080/book/update/${eventId}`, status, {
            headers: {
                'Content-Type': 'text/plain'
            }
        });
        window.location.href="/Status";
        alert("Booking Status Updated Successfully!");
        console.log("Booking status updated successfully!");
    } catch (error) {
        console.error("Error updating booking status:", error);
        alert("Updating Booking Status Failed...Please Try Again!");
    }
}

  const filteredEvents = data;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
      <div className="be-overall">
      <div className='home-b'>
        <nav className='home-nav'>
          <div className="menu">
            <div className="logo">
              <img className="img1" src={logo1}/>
            </div>
            <ul className='home-ul'>
              <li><a href="/AdHome">Home</a></li>
              <li><a href="/AdEvents">All Events</a></li>
              <li><a href="/FoodMenu">Food Menu</a></li>
              <li><a href="/Addons">Add Ons</a></li>
              <li><a className="active1" href="/Status">User Bookings</a></li>
              {/* <li><a href="#">About us</a></li> */}
              {/* <li><a href="#">Contact</a></li> */}
              {/* <li><a href="#">Feedback</a></li> */}
             
              <Box sx={{ flexGrow: 0 }}>
                       <li>
                        <IconButton
                          onClick={handleClick} sx={{ p: 0}}
                          size="small"
                        >
                        <Avatar sx={{ width: 45, height: 45 ,bgcolor : "black" ,marginLeft:"10px" , marginBottom:"-10px", marginTop:"-8px" }}></Avatar>
                        </IconButton></li></Box>
                  </ul>
                  <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={handleClose}>
            <Avatar sx={{ width: 45, height: 45 ,bgcolor : "black"}}/> <b>My Account</b>
          </MenuItem>
          <Divider />
         
          {/* <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <AccountBox fontSize="small" />
            </ListItemIcon>
            <b>Profile</b>
          </MenuItem> */}
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon><Link to="/">
            <div className='logout'><b>Logout</b></div></Link>
          </MenuItem>
        </Menu>
          
          </div>
        </nav>
        <div className='be-h1'>
            <h2>View Booked & Past Events:</h2>
        </div>
       
        {filteredEvents.length === 0 && (
      <div className="be-none">
        <img className="be-noevents1" src="https://img.freepik.com/free-vector/illustrated-appointment-booking-with-calendar-concept_52683-38825.jpg?w=900&t=st=1706329469~exp=1706330069~hmac=d600cf38880c18cf106c110391f4466bdc9a93adbfcaed0132d4c89e9516c6d0"></img>
        <h3>Oops! No Booked or Past Events available for Now...</h3>
        <p>Book your Awesome events now!</p>
      </div>
        )}

      
        <br></br><br></br><br></br>

        {filteredEvents.length!==0 && (
         
         <table className='tab11'>
        <thead>
          <tr>
            <th className='th11'>Applicant Name</th>
            <th className='th11'>Event Name</th>
            <th className='th11'>Applicant Mobile</th>
            <th className='th11'>Event Date</th>
            <th className='th11'>Event Time</th>
            <th className='th11'>Total Price</th>
            <th className='th11'>Booking Status</th>
            <th className='th11'>Actions</th>
          </tr>
        </thead>
        <tbody>
             {filteredEvents.map(event => (
            <tr key={event.id}>
              <td className='td11'>{event.name}</td>
              <td className='td11'>{event.ename}</td>
              <td className='td11'>{event.mobile}</td>
              <td className='td11'>{event.date}</td>
              <td className='td11'>{event.time}</td>
              <td className='td11'>Rs. {event.price}</td>
              <td className='td11'>

              <select
                      value={event.status}
                      onChange={(e) => {
                        handleStatusChange(event.id, e.target.value);
                      }}
                      className={event.status.toLowerCase() === 'pending' ? 'pe1' : event.status.toLowerCase() === 'confirmed' ? 'con1' : 're1'}
                    >
                      <option className="drop" value="Pending">Pending</option>
                      <option className="drop" value="Confirmed">Confirmed</option>
                      <option className="drop" value="Rejected">Rejected</option>
                    </select>
              </td>
              <td className='td11'>
              <img onClick={() => handleOpen1(event.ename,event.name,event.id)} className="ve-img211" src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"></img>
              </td>
            </tr>
            ))}
              {open1 && (<DelUser eventName={eventName} name={name} id={id} handleClose1={handleClose1}/>)} 

            {/* <button className={event.status.toLowerCase() === 'pending' ? 'pe' : event.status.toLowerCase() === 'confirmed' ? 'con' : 're'}>{event.status}</button> */}
      
        </tbody>
       </table>
       )}


      <br></br><br></br> <br></br> <br></br>

       <Footer/>
        </div>
       
        
      </div>
  )
}

export default Status