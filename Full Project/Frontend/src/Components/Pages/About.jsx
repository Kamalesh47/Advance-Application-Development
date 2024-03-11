import React from 'react'
import '../Styles/Navbar.css'; 
import '../Styles/About.css'; 
import logo1 from '../Assets/Logo1.png'
import {  Avatar, IconButton,Box,Menu,MenuItem,Divider,ListItemIcon} from '@mui/material'
import { AccountBox,  Logout} from '@mui/icons-material';
import {Link} from 'react-router-dom'
import Footer from './Footer';


function UserBookings() {

  
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    let uname=localStorage.getItem('user');

    return (
      <div className="">
      <div className='home-b'>
        <nav className='home-nav'>
          <div className="menu">
            <div className="logo">
              <img className="img1" src={logo1}/>
            </div>
            <ul className='home-ul'>
              <li><a href="/Home">Home</a></li>
              <li><a href="/BookEvents">All Events</a></li>
              <li><a href="/ViewEvents">My Bookings</a></li>
              <li><a className="active1" href="/About">About us</a></li>
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
            <Avatar sx={{ width: 45, height: 45 ,bgcolor : "black"}}/> <b>{uname}</b>
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
        <div className="full-page">
            <div className="half-page1">
                <div className="hf1">
                    <div className='hf1-inner'></div>
                </div>
                <div className="hf2">
                    <div className="hf2-inner"><h1>Our Story</h1>
                        <br></br>
                        At <b>Awesome Festivities</b>, we believe that every birthday deserves to be celebrated in a unique and special way. Our journey began with a simple idea to create a platform that makes organizing birthday events hassle-free and joyous. We understand the importance of birthdays, the joy they bring, and the memories that last a lifetime.
                   <br></br><br></br>
                        We prioritize understanding the needs and desires of our customers. By listening attentively to their preferences, we tailor our services to ensure each birthday celebration is personalized and meaningful.
                    </div>
                </div>
            </div>
            <div className="half-page2">
                <div className="hf3">
                    <div className="hf3-inner"><h1>Our Mission</h1>
                        <br></br>
                        Our ultimate goal is to create memorable experiences that leave a lasting impression on our customers and their guests. Whether it's a small intimate gathering or a large extravagant bash, we strive to exceed expectations and make every birthday celebration unforgettable.
                        <br></br><br></br>
                        We actively engage with our community by organizing workshops, events, and charitable initiatives related to birthday celebrations. By giving back and fostering a sense of community, we aim to spread joy and positivity beyond just the parties we organize.
                    </div>
                </div>
                <div className="hf4">
                    <div className="hf4-inner"></div>
                </div>
            </div>
                <br></br>
       </div>
    
        
       <Footer/>
        </div>
       
        
      </div>
  )
}


export default UserBookings