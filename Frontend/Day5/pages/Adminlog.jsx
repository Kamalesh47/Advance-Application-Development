// import React from 'react';
import { Link } from 'react-router-dom';

const AdminLogin = () => {
  return (
    <div>
      <style>
        {`
          * {
            transition: all 200ms ease-in-out;
          }
          html {
            height: 100%;
          }
          body {
            background: #f3f4f6;
            font-family: 'Open Sans', sans-serif;
            min-height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .admin-form {
            background: #fff;
            border-radius: 5px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.125);
            border: 1px solid rgba(0, 0, 0, 0.45);
            max-width: 400px;
            width: 100%;
            padding: 2rem;
            margin: 0 auto;
          }
          .admin-form h2 {
            text-align: center;
            margin-bottom: 2rem;
            color: #333;
          }
          .admin-form label {
            display: block;
            color: #555;
            font-weight: 600;
            margin-bottom: 0.5rem;
          }
          .admin-form input[type="text"],
          .admin-form input[type="password"] {
            width: 100%;
            padding: 0.75rem;
            margin-bottom: 1rem;
            border-radius: 3px;
            border: 1px solid #ccc;
          }
          .admin-form input[type="submit"] {
            background: #007bff;
            color: #fff;
            text-transform: uppercase;
            font-weight: 600;
            font-size: 1rem;
            border: 0 none;
            border-radius: 3px;
            padding: 1rem;
            width: 100%;
            cursor: pointer;
            transition: background 0.3s ease;
          }
          .admin-form input[type="submit"]:hover {
            background: #0056b3;
          }
          .forgot-password {
            text-align: center;
            margin-top: 1rem;
            color: #777;
          }
          .forgot-password a {
            color: #007bff;
            text-decoration: none;
            transition: color 0.3s ease;
          }
          .forgot-password a:hover {
            color: #0056b3;
          }
        `}
      </style>

      <div className="admin-form">
        <h2>Admin Login</h2>
        <form>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" placeholder="Enter your username" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required />

          <Link to="/admincrud" style={{ textDecoration: 'none' }}>
  <button style={{ 
    background: '#007bff',
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 600,
    fontSize: '1rem',
    border: '0 none',
    borderRadius: '3px',
    padding: '1rem',
    width: '100%',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
    display: 'block',
    textAlign: 'center',
    textDecoration: 'none'
  }}>Login</button>
</Link>


          <p className="forgot-password">
            <a href="#">Forgot Password?</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;