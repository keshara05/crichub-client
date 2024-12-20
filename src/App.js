import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Pages/dashboard/Dashboard';
import Matches from './Components/Pages/matches/matches';
import Schedule from './Components/Pages/schedule/schedule';
import Navbar from './Components/navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
    </div>
  );
}

export default App;
