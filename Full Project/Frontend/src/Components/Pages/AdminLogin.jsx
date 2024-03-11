// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../Styles/Login.css'
import {Link} from 'react-router-dom'
import { useState} from 'react';
import logo1 from '../Assets/Logo1.png'
import {useNavigate} from "react-router-dom"

const SigninPage = () => {


  const navigate=useNavigate();
  const [username,setUsername]=useState("");
  const [password, setPassword] = useState('');
  // const dispatch = useDispatch();
  
  const handleSubmit= async (e)=>{
    // e.preventDefault();
    // dispatch(
    //   login({
    //    name:username
    //   })
    //   )
      // navigate('/Home');
//   

if(username==="Admin" && password==="Admin@123"){
  alert("Login Successful!");
  navigate("/AdHome");
}
else{
  alert("Invalid Username or Password!");
  window.location.href("/AdHome");
}
}


  return (
    <div className="over">
      <img className='land-logo' src={logo1}/>

        <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
        </div>
        <form className='frm' onSubmit={handleSubmit}>
        {/* <form className='frm'> */}
            <h3 className="htag"><b>ADMIN LOGIN</b></h3>
           
            

            <label className='lab'>Username</label>
            <input className="in" 
            type="text" 
            value={username}
            name="username"
            onChange={(event) => setUsername(event.target.value)} 
            placeholder="Enter your Username" 
            id="username" required/>

            <label className="lab">Password</label>
            <input className="in" 
            type="password" 
            value={password}
          name="password" 
          onChange={(e) => setPassword(e.target.value)} 
            placeholder="Enter your Password" 
            id="password" required/>

            {/* <center><button onSubmit={(e) => handleSubmit(e) } className='but'>Login</button></center> */}
            {/* <Link to="/Home"><center><button className='but'>Login</button></center></Link> */}
            <center><button className='but'>Login</button></center>
            <br></br>
            
            
            <h4>Don't have an Account?  <Link className="login-txt" to="/AdminRegister"><div className='reg'>REGISTER</div></Link></h4>

            <Link className="login-txt" to="/"><p className="user-p1">&lt;&nbsp;Go Back!</p></Link>
        </form>
    </div>
  );
  };


export default SigninPage;