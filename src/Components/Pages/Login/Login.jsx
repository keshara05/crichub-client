import React from 'react';
import './Login.css';
import { FaUserAlt, FaLock } from "react-icons/fa";
import cricketerLogo from '../../Assets/Cricketer logo.png';

const openGmail = () => {
  const recipient = 'CrickHub@gmail.com';
  const mailtoUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}`;
  window.open(mailtoUrl, '_blank');
};

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
            <input type="email" placeholder='E-mail' required />
            <FaUserAlt className='icon' />
          </div>
          <div className='input-box'>
            <input type="password" placeholder='Password' minlength="8" required />
            <FaLock className='icon' />
          </div>

          <div className='remember-forgot'>
            <label><input type="checkbox" />Remember me</label>
            <a href="#">Forgot password?</a>
          </div>

          <button type='submit'>Sign in</button>

          <div className='leave-note'>
            <p>Holy! You are unable to create a new account. Please contact the Administrator.
              <a onClick={openGmail}> Leave a note </a>
            </p>

          </div>
        </form>
      </div>

    </div>
  )
}

export default Login