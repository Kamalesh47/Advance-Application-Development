import React from 'react'
import '../Styles/Navbar.css'; 
import '../Styles/Home.css'; 
import '../Styles/BookEvents.css'; 
import logo1 from '../Assets/Logo1.png'
import {  Avatar, IconButton,Box,Menu,MenuItem,Divider,ListItemIcon} from '@mui/material'
import { AccountBox,  Logout,AddCircle} from '@mui/icons-material';
import {Link} from 'react-router-dom'
import { useState,useEffect} from 'react';
import Footer from './Footer';
import '../Styles/ViewEvents.css'
import axios from 'axios';
import AddonBox from './AddonBox';
import DelAddon from './DelAddon';
import EditAddon from './EditAddon';


function Addons() {

  const[open1,setOpen1] = useState('');
  const[open2,setOpen2] = useState('');

  const [addon, setAddon] = useState('');
 
  const handleOpen1 = (addon) => {
    setOpen1(true);
    setAddon(addon);
}

  const handleClose1 = () => {
    setOpen1(false);
}

const[open3,setOpen3] = useState('');
const [addon1, setAddon1] = useState('');
const handleOpen3 = (addon1) => {
  setOpen3(true);
  setAddon1(addon1);
}

const handleCloseForm = () => {
  setOpen3(false);
};

// const [id1, setId1] = useState('');

const handleOpen2 = ( ) => {
  setOpen2(true);

};


  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/addon")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
              <li><a  href="/FoodMenu">Food Menu</a></li>
              <li><a className="active1" href="/Addons">Add Ons</a></li>
              <li><a href="/Status">User Bookings</a></li>
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
        <div className='be-h111'>
            <h2>Manage Add-Ons:</h2>
        </div>

        <div className='ad-add11'>
            <div className="ad-pointer" onClick={handleOpen2}>
            <AddCircle style={{ fontSize: 35, marginTop:0 }}/><h2 className='ad-poih'>Add Features</h2>
      </div> </div>
       {open2 && (<AddonBox />)}

      
       
        {filteredEvents.length === 0 && (
      <div className="be-none">
        <img className="be-noevents1" src="https://img.freepik.com/free-vector/illustrated-appointment-booking-with-calendar-concept_52683-38825.jpg?w=900&t=st=1706329469~exp=1706330069~hmac=d600cf38880c18cf106c110391f4466bdc9a93adbfcaed0132d4c89e9516c6d0"></img>
        <h3>Oops! No Add-Ons available for Now...</h3>
        <p>Use this space for Managing Add-Ons!</p>
      </div>
        )}

      
        <br></br><br></br>

        {filteredEvents.length!==0 && (
         
         <table className='tab6'>
        <thead>
          <tr>
            <th className='th6'>Addon Name</th>
            <th className='th6'>Rating</th>
            <th className='th6'>Total Price</th>
            <th className='th6'>Actions</th>
          </tr>
        </thead>
        <tbody>
             {filteredEvents.map(event => (
            <tr key={event.id}>
              <td className='td6'>{event.name}</td>
              <td className='td6'>{event.rating}</td>
              <td className='td6'>Rs. {event.price}</td>
              <td className='td6'><img onClick={() => handleOpen3(event.name)} className="ve-img111" src="https://cdn-icons-png.flaticon.com/512/5996/5996708.png"></img>
              <img onClick={() => handleOpen1(event.name)} className="ve-img211" src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"></img></td>
            </tr>
            ))}
              {open1 && (<DelAddon addon={addon} handleClose1={handleClose1}/>)} 
              {open3 && (
        < EditAddon
          addon1={addon1}
          handleCloseForm={handleCloseForm}
        />
      )}
            
      
        </tbody>
       </table>
       )}


      <br></br><br></br> <br></br> <br></br>

       <Footer/>
        </div>
       
        
      </div>
  )
}


export default Addons