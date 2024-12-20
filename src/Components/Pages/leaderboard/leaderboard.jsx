import React, { useEffect, useState } from "react";
import "./leaderboard.css";

const Leaderboard = () => {
  const [players, setPlayers] = useState([]);
  const [filter, setFilter] = useState("bowling"); // Default filter is bowling

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/players"); // Replace with actual API endpoint
        const data = await response.json();
        setPlayers(data);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };

    fetchPlayers();
  }, []);

  const getSortedPlayers = () => {
    if (filter === "bowling") {
      return [...players].sort((a, b) => b.bowling.wickets - a.bowling.wickets);
    } else if (filter === "batting") {
      return [...players].sort((a, b) => b.batting.runs - a.batting.runs);
    } else if (filter === "fielding") {
      return [...players].sort((a, b) => b.fielding.catches - a.fielding.catches);
    }
    return players;
  };

  return (
    <div className="leaderboard-container">
      <h1>Player Leaderboard</h1>
      <div className="filter-buttons">
        <button
          className={filter === "bowling" ? "active" : ""}
          onClick={() => setFilter("bowling")}
        >
          Bowling
        </button>
        <button
          className={filter === "batting" ? "active" : ""}
          onClick={() => setFilter("batting")}
        >
          Batting
        </button>
        <button
          className={filter === "fielding" ? "active" : ""}
          onClick={() => setFilter("fielding")}
        >
          Fielding
        </button>
      </div>
      <ul className="player-list">
        {getSortedPlayers().map((player) => (
          <li key={player._id} className="player-item">
            <span className="player-name">{player.name}</span>
            {filter === "bowling" && (
              <span className="player-stat">{player.bowling.wickets} Wickets</span>
            )}
            {filter === "batting" && (
              <span className="player-stat">{player.batting.runs} Runs</span>
            )}
            {filter === "fielding" && (
              <span className="player-stat">{player.fielding.catches} Catches</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
