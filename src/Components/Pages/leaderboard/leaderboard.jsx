import React, { useEffect, useState } from "react";
import "./leaderboard.css";

const Leaderboard = () => {
  const [players, setPlayers] = useState([]);
  const [filter, setFilter] = useState("bowling"); // Default filter

  useEffect(() => {
    // Fetch players from backend API
    const fetchPlayers = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/players"); // Replace with your API endpoint
        const data = await response.json();
        setPlayers(data);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };

    fetchPlayers();
  }, []);

  const sortPlayers = (players, filter) => {
    switch (filter) {
      case "bowling":
        return [...players].sort(
          (a, b) =>
            b.bowling.wickets / b.bowling.matches -
            a.bowling.wickets / a.bowling.matches
        );
      case "batting":
        return [...players].sort(
          (a, b) =>
            b.batting.runs / b.batting.matches -
            a.batting.runs / a.batting.matches
        );
      case "fielding":
        return [...players].sort(
          (a, b) =>
            b.fielding.catches / b.fielding.matches -
            a.fielding.catches / a.fielding.matches
        );
      default:
        return players;
    }
  };

  const sortedPlayers = sortPlayers(players, filter);

  return (
    <div className="leaderboard-container">
      <h2>Player Leaderboard</h2>
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
      <div className="player-list">
        {sortedPlayers.map((player) => (
          <div key={player._id} className="player-card">
            <h3>{player.name}</h3>
            <p><strong>Club:</strong> {player.club?.name || "N/A"}</p>
            <p><strong>Matches:</strong> {player[filter].matches}</p>
            <p>
              <strong>
                {filter === "bowling"
                  ? "Wickets per Match"
                  : filter === "batting"
                  ? "Runs per Match"
                  : "Catches per Match"}:
              </strong>{" "}
              {(
                player[filter][
                  filter === "bowling"
                    ? "wickets"
                    : filter === "batting"
                    ? "runs"
                    : "catches"
                ] / player[filter].matches || 0
              ).toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
