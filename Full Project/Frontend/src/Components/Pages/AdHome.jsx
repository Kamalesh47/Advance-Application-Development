import React from 'react'
import '../Styles/Navbar.css'; 
import '../Styles/Home.css'; 
import logo1 from '../Assets/Logo1.png'
import {  Avatar, IconButton,Box,Menu,MenuItem,Divider,ListItemIcon} from '@mui/material'
import { AccountBox,  Logout} from '@mui/icons-material';
import {Link} from 'react-router-dom'
import Footer from './Footer';


// Create a functional component
function AdHome() {
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className='home-b'>
      <header>
      <nav className='home-nav'>
        <div className="menu">
          <div className="logo">
            <img className="img1" src={logo1}/>
          </div>
          <ul className='home-ul'>
            <li><a className="active1" href="/AdHome">Home</a></li>
            <li><a href="/AdEvents">All Events</a></li>
            <li><a href="/FoodMenu">Food Menu</a></li>
            <li><a href="Addons">Add Ons</a></li>
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
      </header>
      <div className="h-img2">
          <h1 className='h1-tag'>Welcome to Awesome Festivities!!!</h1>
          <br></br>
          <p className="home-ptag">Create and Manage your own Events Now to Host Birthday Party!</p>
          <p className="home-ptag">Just 3 simple steps and you can manage Awesome Birthday Party celebration!</p>
 

            <p className="home-ptag">1. Manage your Theme<br></br>
              2. Manage the Food Menu and Add Ons<br></br>
              3. Accept or Reject the Booking Status of the User</p>

              <a href="/AdEvents"><button className="home-but"><b>Get Started</b></button></a>          
        <Footer/>
        </div>
        
      </div>
     
      
  );
};

export default AdHome;