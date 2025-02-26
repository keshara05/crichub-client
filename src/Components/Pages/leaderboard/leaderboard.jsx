import React, { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import "./leaderboard.css";

const Leaderboard = () => {
  //const [players, setPlayers] = useState([]);
  const [filter, setFilter] = useState("bowling"); 
  const { data:clubs, loading: clubsLoading, error: clubsError } = useFetch("http://localhost:8000/api/clubs");
  const {data:players, loading: playerLoading, error: playerError} = useFetch("http://localhost:8000/api/players");
  const [currentPage, setCurrentPage] = useState(1);
  const playersPerPage = 10; 


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

  const paginatedPlayers = () => {
    const sortedPlayers = getSortedPlayers();
    const startIndex = (currentPage - 1) * playersPerPage;
    const endIndex = startIndex + playersPerPage;
    return sortedPlayers.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(getSortedPlayers().length / playersPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getClubNameById = (id) => {
    const club = clubs?.find((club) => club._id === id);
    return club ? club.name : "";
  };

  return (
    <div>
    <div className="leaderboard-container">
      <h1>Player Leaderboard</h1>
      <div className="filter-buttons">
        <button
          className={filter === "bowling" ? "active" : ""}
          onClick={() => {
            setFilter("bowling");
            setCurrentPage(1); // Reset to first page when filter changes
          }}
        >
          Bowling
        </button>
        <button
          className={filter === "batting" ? "active" : ""}
          onClick={() => {
            setFilter("batting");
            setCurrentPage(1);
          }}
        >
          Batting
        </button>
        <button
          className={filter === "fielding" ? "active" : ""}
          onClick={() => {
            setFilter("fielding");
            setCurrentPage(1);
          }}
        >
          Fielding
        </button>
      </div>
      <ul className="player-list">
        {paginatedPlayers().map((player) => (
          <li key={player._id} className="player-item">
            <div className="player-club">
            <span className="player-name">{player.name}</span>
            <span className="club-name">{getClubNameById(player.club)|| "Player not in Club"}</span>
            </div>
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
    <div className="pagination">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="pagination-button"
        >
          Previous
        </button>
        <span className="page-info">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="pagination-button"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Leaderboard;