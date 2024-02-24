import React, { useState } from 'react';
import '..//assets/css/Signupp.css'
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import Navbar from '../components/Navbar';
// import { addUser, login } from './src/features/userSlice';
// import { useDispatch } from 'react-redux';
// import { addUser } from '../features/userSlice';

const Signupp = () => {
  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setmessage] = useState('');
  const navigate=useNavigate();
//   const dispatch=useDispatch();
  const [user, setUser] = useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:""
  });

  const { name,email,password,confirmPassword} = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // dispatch(addUser(name));
    await axios.post("http://localhost:8081/api/v1/auth/register", user);
    alert("Register successfull")
    navigate("/login");
    console.message(error)
  };
 
  return (
    <>
    <Navbar/>
    <div className="signup-container">
      <h2>Sign Up</h2>
      {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
      <form onSubmit={(e) => onSubmit(e)}>
      {/* <p>message:{message}</p> */}
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={name}
        name="name"
        onChange={(e) => onInputChange(e)}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        name="email"
        onChange={(e) => onInputChange(e)}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        name="password"
        onChange={(e) => onInputChange(e)}
        />
      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input
        type="password"
        id="confirmPassword"
        value={confirmPassword}
        name="confirmPassword"
        onChange={(e) => onInputChange(e)}
        />
      <button >Sign Up</button>
        </form>
    </div>
    </>
  );
};

export default Signupp;