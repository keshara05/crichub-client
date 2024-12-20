import React, { useEffect, useState } from "react";
import "./matches.css";

const Matches = () => {
  const [matches, setMatches] = useState([]);
  const [clubs, setClubs ] = useState([]);

  useEffect(() => {
    // Fetch matches from the backend API
    const fetchMatches = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/matches"); // Replace with actual API endpoint
        const data = await response.json();
        setMatches(data);
      } catch (error) {
        console.error("Error fetching matches:", error);
      }
    };

    const fetchClubs = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/clubs"); // Replace with actual API endpoint
        const data = await response.json();
        setClubs(data);
      } catch (error) {
        console.error("Error fetching clubs:", error);
      }
    };

    fetchClubs();

    fetchMatches();
  }, []);

  const getClubNameById = (id) => {
    const club = clubs.find((club) => club._id === id); 
    return club ? club.name : ""; 
  };

  return (

    <div className="matches-container">
      <h2>Matches</h2>
      <div className="matches-list">
        {matches.length > 0 ? (
          matches.map((match) => (
            <div key={match._id} className="match-card">
              <h3>{getClubNameById(match.club1.club)} vs {getClubNameById(match.club2.club)}</h3>
              <p><strong>score:</strong> {match.club1.score}</p>
              <p><strong>wickets:</strong> {match.club1.wickets}</p>
              <p><strong>Overs:</strong> {match.overs}</p>
            </div>
          ))
        ) : (
          <p>No matches available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default Matches;
