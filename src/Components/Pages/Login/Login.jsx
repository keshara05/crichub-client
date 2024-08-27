import React from 'react';
import './Login.css';
import { FaUserAlt, FaLock } from "react-icons/fa";
import cricketerLogo from '../../Assets/Cricketer logo.png';


const Login = () => {
  return (
    <div className='main-login-page'>
      <div className='main-image'>
      <img src={cricketerLogo} alt="Cricketer Logo" />
      </div>
      <div className='wrapper'>
      <form action="">
        <h1>Sign in</h1>
        <div className='input-box'>
          <input type="text" placeholder='E-mail' required />
          <FaUserAlt className='icon' />
        </div>
        <div className='input-box'>
          <input type="password" placeholder='Password' required />
          <FaLock className='icon' />
        </div>

        <div className='remember-forgot'>
          <label><input type="checkbox" />Remember me</label>
          <a href="#">Forgot password?</a>
        </div>

        <button type='submit'>Sign in</button>

        <div className='register-link'>
          <p>Don't have an account? <a href="#">Register</a></p>
        </div>
      </form>
      </div>

    </div>
  )
}

export default Login