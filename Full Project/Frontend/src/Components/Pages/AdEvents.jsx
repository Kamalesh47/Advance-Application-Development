import React from 'react'
import '../Styles/Navbar.css'; 
import '../Styles/Home.css'; 
import '../Styles/BookEvents.css'; 
import '../Styles/AdEvents.css'; 
import logo1 from '../Assets/Logo1.png'
import {  Avatar, IconButton,Box,Menu,MenuItem,Divider,ListItemIcon} from '@mui/material'
import { AccountBox,  Logout, AddCircle} from '@mui/icons-material';
import {Link} from 'react-router-dom'
import { useState,useEffect} from 'react';
import Footer from './Footer';
import EventBox from './EventBox';
import AdEventsBox from './AdEventsBox';
import AdUpEventBox from './AdUpEventBox';
import AdDelEventBox from './AdDelEvent';
import axios from 'axios';

function AdEvents() {

  const[open1,setOpen] = useState('');
  const[open3,setOpen3] = useState('');
  const[open2,setOpen2] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [eventName, setEventName] = useState('');
  const [eventName1, setEventName1] = useState('');
  
  const handleOpen = (eventName) => {
      setOpen(true);
      setEventName(eventName);
  }

  const handleClose2 = () => {
      setOpen(false);
  }

  
  const handleOpen2 = () => {
      setOpen2(true);
  }
  const handleOpen3 = (eventName1) => {
      setEventName1(eventName1);
      setOpen3(true);
  }
  const handleClose1 = () => {
      setOpen3(false);
  }

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/events")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  const filteredEvents = data.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );



    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle the search submission (e.g., send search query to the server)
    console.log('Search term submitted:', searchTerm);
  };

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
                <li><a className="active1" href="/AdEvents">All Events</a></li>
                <li><a href="/FoodMenu">Food Menu</a></li>
                <li><a href="/Addons">Add Ons</a></li>
                <li><a href="/Status">User Bookings</a></li>
                {/* <li><a href="#">About us</a></li> */}
                {/* <li><a href="#">Contact</a></li> */}

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
        <div className='ad-h1'>
            <h2>Manage your Themes:</h2>
        </div>
        <form className="ad-search-form" onSubmit={handleSearchSubmit}>
        <input
          className="search-input"
          type="text"
          placeholder="Type here to Search...."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="search-button" type="submit">
          <b>Search</b>
        </button>
      </form>
      <div className='ad-add'>
            <div className="ad-pointer" onClick={handleOpen2}>
            <AddCircle style={{ fontSize: 35, marginTop:0 }}/><h2 className='ad-poih'>Add Themes</h2>
      </div> 
      </div>    
        {/* {open2 && (<AdEventsBox />)} */}

      {filteredEvents.length === 0 && (
      <div className="be-none">
        <img className="be-noevents" src="https://img.freepik.com/free-vector/illustrated-appointment-booking-with-calendar-concept_52683-38825.jpg?w=900&t=st=1706329469~exp=1706330069~hmac=d600cf38880c18cf106c110391f4466bdc9a93adbfcaed0132d4c89e9516c6d0"></img>
        <h3>Oops! No Events for Now...</h3>
        <p>Use this space for Managing your Events!</p>
      </div>
        )}
      
        <br></br><br></br>
        

        <div className='be-grid1'>
        {filteredEvents.map(event => (
          <div key={event.id}>
            <section className="pb-51">
        
            <div className="container text-center" >
            <div className="gallery-wrapper1">
                <div className="grid-sizer col-lg-4 col-md-6"></div>

                <div className="col-lg-4 col-md-6 grid-item1 mb-4">
                <img className="img-fluid w-100 mb-3 img-thumbnail shadow-sm rounded-0" src={event.image} alt="" />
                <h2 className="h4">{event.name}</h2>
                <p className="small text-muted font-italic">Theme cost: Rs. {event.price}</p>
                <p className="small text-muted font-italic">Rating: {event.rating}</p>
                <p className="small text-muted font-italic">Photographer Status: {event.photographer}</p>
                <p className="small text-muted font-italic">Description: {event.description}</p>
                <button onClick={() => handleOpen3(event.name)} className='ab-up'>Update</button><button onClick={() => handleOpen(event.name)} className='ab-del'>Delete</button>
                </div>

            </div>
            </div>
        </section> 
       </div>
       ))}
       {open1 && (<AdDelEventBox eventName={eventName} handleClose2={handleClose2} />)} 
        {open3 && (<AdUpEventBox eventName1={eventName1} handleClose1={handleClose1}/>)} 
        {open2 && (<AdEventsBox />)}
            

        
        </div>
      <br></br>

       <Footer/>
        </div>
       
        
      </div>
  )
}

export default AdEvents