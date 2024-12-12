import React from 'react';
import Login from './Components/Pages/login/Login';
import Registration from './Components/Pages/registration/Registration';
import Dashboard from './Components/Pages/dashboard/Dashboard';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
