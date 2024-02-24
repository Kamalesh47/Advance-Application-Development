import React, { useState } from 'react'
import "../assets/css/Login.css"
import Navbar from '../components/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import { Password } from '@mui/icons-material'
const Login = () => {
	
	const[email,setEmail]=useState();
	const[password,setPassword]=useState();
	const [role,setRole]=useState("admin");
	const navigate=useNavigate();

	const handleEmail=(e)=>
	{
		setEmail(e.target.value)
	}
	const handlePassword=(e)=>
	{
		setPassword(e.target.value)
	}
	const handleRole=(e)=>
	{
		setRole(e.target.name);
	}
	const handleSubmit=()=>
	{
		localStorage.setItem("username",email)
		console.log(email+" "+password)
		if(role==="user")
		{
			console.log(localStorage.getItem("username"))
			navigate("/")
		}
		else
		{
			navigate("/admin")
		}
	}
  return (
	<div>
	<Navbar/>
    <div className='bodyy' style={{paddingLeft:"390px"}}>
<div class="container" id="container">
	<div class="form-container sign-in-container">
		<form action="#">
			<h1>Login Here</h1><br/>
			<input type="email" placeholder="Email" value={email} onChange={handleEmail} required/>
			<input type="password" placeholder="Password" value={password} onChange={handlePassword} required/>
			<div className='radio'>
			<input type="radio"  name="user" className='user' value={role} required 
		 onChange={handleRole}	placeholder="Password" /><label> User</label>
			<input type="radio" name="admin" className='admin' value={role} required onChange={handleRole} placeholder="Password"/><label> Admin</label>
			</div>
			<a href="#">Forgot your password?</a>
			<button onClick={handleSubmit}>Login</button>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button class="ghost" id="signIn">Sign In</button>
			</div>
			<div id="mov" class="overlay-panel overlay-right">
				<h1>Hello, Friend..!</h1>
				<p>Enter your personal details and start journey with us</p>
				<Link to="/Signup"><button class="ghost" id="signUp">Sign Up</button></Link>
			</div>
		</div>
	</div>
</div>
    </div>
	</div>
  )
}
export default Login