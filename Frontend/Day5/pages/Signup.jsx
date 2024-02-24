import React, { useState } from 'react'
import "../assets/css/Login.css"
import Navbar from '../components/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Signup = () => {
	
	const[email,setEmail]=useState();
	const[password,setPassword]=useState();
	const[text,setName]=useState();
	const[conpassword,setConpassword]=useState();
	const navigate=useNavigate();

	const handleEmail=(e)=>
	{
		setEmail(e.target.value)
	}
	const handlePassword=(e)=>
	{
		setPassword(e.target.value)
	}
	const handleName=(e)=>
	{
		setName(e.target.value);
	}
	const handleConpassword=(e)=>
	{
		setConpassword(e.target.value)
	}

	const handleSubmit=()=>
	{
		console.log(text+" "+email+" "+password);
		const data={
			"name":text,
			"email":email,
			"password":password,
			"confirmPassword":conpassword
		}
		console.log(data)
    	axios.post(`http://localhost:8082/api/v1/auth/register`,data)
	}
  return (
	<div>
	<Navbar/>
    <div className='bodyy' style={{paddingLeft:"390px"}}>
<div class="container" id="container">
	
	<div class="form-container sign-in-container">
		<form>
			<h1>Signup Here</h1><br/>
      		<input type="text1" placeholder="Name" value={text} onChange={handleName} required/>
			<input type="email1" placeholder="Email" value={email} onChange={handleEmail} required/>
			<input type="password1" placeholder="Password" value={password} onChange={handlePassword} required/>
			<input type="conpassword" placeholder="confirm Password" value={conpassword} onChange={handleConpassword} required/>
			<button onClick={handleSubmit}>SignUp</button>
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
				<p>Already have an account please..</p>
				<Link to="/Login"><button class="ghost" id="signUp">Login</button></Link>
			</div>
		</div>
	</div>
</div>
    </div>
	</div>
  )
}

export default Signup