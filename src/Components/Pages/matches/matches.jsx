import React, { useEffect, useState } from "react";
import "./matches.css";

const Matches = () => {
  const [matches, setMatches] = useState([]);
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state

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

    const fetchData = async () => {
      setLoading(true); // Set loading to true before fetching
      await Promise.all([fetchClubs(), fetchMatches()]);
      setLoading(false); // Set loading to false after fetching
    };

    fetchData();
  }, []);

  const getClubNameById = (id) => {
    const club = clubs.find((club) => club._id === id);
    return club ? club.name : "";
  };

  return (
    <div className="matches-container">
      <h2>Matches</h2>
      {loading ? (
        <div className="loading-indicator">Loading...</div> // Loading indicator
      ) : (
        <div className="matches-list">
          {matches.length > 0 ? (
            matches.map((match) => (
              <div key={match._id} className="match-card">
                <h3>
                  {getClubNameById(match.club1.club)} vs{" "}
                  {getClubNameById(match.club2.club)}
                </h3>
                <p>
                  <strong>Score:</strong> {match.club1.score}
                </p>
                <p>
                  <strong>Wickets:</strong> {match.club1.wickets}
                </p>
                <p>
                  <strong>Overs:</strong> {match.overs}
                </p>
              </div>
            ))
          ) : (
            <p>No matches available at the moment.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Matches;
