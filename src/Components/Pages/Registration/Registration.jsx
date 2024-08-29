import React from 'react';
import './Registration.css';
import { FaUserAlt, FaLock } from "react-icons/fa";
import cricketerLogo from '../../Assets/Cricketer logo.png';

const openGmail = () => {
  const recipient = 'CrickHub@gmail.com';
  const mailtoUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}`;
  window.open(mailtoUrl, '_blank');
};

const Registration = () => {
  return (
    <div className='main-Registration-page'>
      <div className='main-image'>
        <img src={cricketerLogo} alt="Cricketer Logo" />
      </div>
      <div className='wrapper'>
        <form action="">
          <h1>Sign up</h1>
          <div className='input-box'>
            <input type="text" placeholder='Club name' required />
            <FaUserAlt className='icon' />
          </div>
          <div className='input-box'>
            <input type="email" placeholder='E-mail' required />
            <FaUserAlt className='icon' />
          </div>
          <div className='input-box'>
            <input type="password" placeholder='Password' minlength="8" required />
            <FaLock className='icon' />
          </div>
          <div className='input-box'>
            <input type="password" placeholder='Confirm Password' minlength="8" required />
            <FaLock className='icon' />
          </div>
          <button type='submit'>Sign up</button>
        </form>
      </div>

    </div>
  )
}

export default Registration