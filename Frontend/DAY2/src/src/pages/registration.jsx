
import '../assets/CSS/login.css';
import p5 from '../assets/Images/loginimg.jpg'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';

const Registration = () => {
  return (
    <div className="login-container">
      <div className="image-half">
        <img src={p5} alt="Login" style={{height:'90%'}}/>
      </div>
      <div className="form-half">
        <Card className='Card'>
        <h2>Registration</h2>
        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          
          <label htmlFor="cname">Company Name:</label>
          <input type="cname" id="cname" name="cname" />
          
          <label htmlFor="revenue">Revenue:</label>
          <input type="revenue" id="revenue" name="revenue" />



          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />

          <button type="submit">Register</button>
          <h4>Already have an account?</h4>
          <Link to='/login'>Login here</Link> 
        </form>
        </Card>
      </div>
    </div>
  );
};

export default Registration;