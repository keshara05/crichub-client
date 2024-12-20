import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Pages/dashboard/Dashboard';
import Matches from './Components/Pages/matches/matches';
import Schedule from './Components/Pages/schedule/schedule';
import Navbar from './Components/navbar/Navbar';
import Leaderboard from './Components/Pages/leaderboard/leaderboard';

function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
    </div>
  );
}

export default App;
