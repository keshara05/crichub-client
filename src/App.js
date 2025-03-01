import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Pages/dashboard/Dashboard';
import Matches from './Components/Pages/matches/matches';
import Schedule from './Components/Pages/schedule/schedule';
import Navbar from './Components/navbar/Navbar';
import Leaderboard from './Components/Pages/leaderboard/leaderboard';
import News from './Components/Pages/news/news';
import BlurBackground from './Components/Pages/BlurBackground';
import Explore from './Components/Pages/explore/Explore';
import NewsItemPage from './Components/Pages/newsItemPage/NewsItemPage';
import Footer from './Components/Pages/footer/Footer';
import SmoothScroll from './Components/Pages/SmoothScroll';
import PlayerStats from './Components/Pages/playerStats/PlayerStats';
import './App.css'; 

function App() {
  return (
    <div className="app-container">
      <Navbar />
      {/* <BlurBackground /> */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/news" element={<News />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/news/:id" element={<NewsItemPage />} />
          <Route path="/player/:playerId" element={<PlayerStats />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
