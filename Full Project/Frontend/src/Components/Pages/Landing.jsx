import { Link } from 'react-router-dom';
import '../Styles/Landing.css';
import logo1 from '../Assets/Logo1.png'

const Landing = () => {
  return (
    <div className="land-img">
        <img className='land-logo' src={logo1}/>
        <div className='land-div'>
          <h1 className='land-h1'>Welcome to Awesome Festivities!!!</h1>
          <h3 className='land-h3'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;There's no better way to celebrate your birthday than with the people you love. &nbsp;It's party time! We hope your birthday party is full of fun and friends; even if it's not, welcome to our 'Awesome Festivities' birthday party planners, where you are guaranteed fun.</h3>
          <h4 className='land-h4'>Happy Birthday!</h4>
          <Link to="/UserLogin"><button className='land-but1'>USER</button></Link>
          <Link to="/AdminLogin"><button className='land-but2'>ADMIN</button></Link>
        </div>
    </div>
      
  );
};

export default Landing;