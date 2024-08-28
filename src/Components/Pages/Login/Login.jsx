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

        <div className='register-link'>
          <p>Holy! you are unable to create a new account Please contact Administrator. <a href="mailto:nilushkapoornima@gmail.com?subject=Issue%20with%20Account%20Creation&body=I%20encountered%20an%20issue%20while%20trying%20to%20create%20a%20new%20account.%20Please%20assist.">
      Leave a note
   </a></p>
        </div>
      </form>
      </div>

    </div>
  )
}

export default Login