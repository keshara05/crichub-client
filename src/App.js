import React from 'react';
import Login from './Components/Pages/Login/Login';
import Registration from './Components/Pages/Registration/Registration';
import Dashboard from './Components/Pages/User_Dashboard/User_Dashboard';
import System_Admin_Dashboard from './Components/Pages/System_Admin_Dashboard/System_Admin_Dashboard';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path='/System_Admin_Dashboard' element={<System_Admin_Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
