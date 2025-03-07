import React from "react";
import useFetch from "../../../hooks/useFetch";
import "./matches.css";
import API_LINK from "../../../hooks/config"

const Matches = () => {
  const { data: matches, loading, error } = useFetch("http://localhost:8000/api/matches");
  const { data: clubs } = useFetch(`${API_LINK}/api/clubs`);

  const getClubNameById = (id) => {
    const club = clubs?.find((club) => club._id === id);
    return club ? club.name : "";
  };

  const getFlagByClubId = (id) => {
    const club = clubs?.find((club) => club._id === id);
    return club ? club.image : "";
  };

  return (
    <div className="matches-container">
      <h2>Matches</h2>
      {loading ? (
        <div className="loading-indicator">Loading...</div>
      ) : error ? (
        <div className="error-indicator">Error loading data</div>
      ) : (
        <div className="matches-list">
          {matches?.map((match) => {
            const currentClub = match.currentInnings === "club1" ? match.club1 : match.club2;
            const opponentClub = match.currentInnings === "club1" ? match.club2 : match.club1;

            const currentClubName = getClubNameById(currentClub.club);
            const opponentClubName = getClubNameById(opponentClub.club);

            const currentClubFlag = getFlagByClubId(currentClub.club);
            const opponentClubFlag = getFlagByClubId(opponentClub.club);

            const target = currentClub.score + 1;

            return (
              <div key={match._id} className="match-card">
                <div className="match-header">
                  <p>{match.status}</p>
                </div>
                <div className="match-body">
                  <div className="team">
                    <div className="team-info">
                      <img
                        src={currentClubFlag}
                        alt={`${currentClubName} flag`}
                        className="team-flag"
                      />
                      <p className="team-name">{currentClubName}</p>
                    </div>
                    <p className="team-stats">{`${currentClub.score}/${currentClub.wickets} (${currentClub.overs})`}</p>
                  </div>

                  <div className="team">
                    <div className="team-info">
                      <img
                        src={currentClubFlag}
                        alt={`${currentClubName} flag`}
                        className="team-flag"
                      />
                      <p>{opponentClubName}</p>
                    </div>
                    <p>{match.currentInnings === "club1" ? "Yet to bat" : `${opponentClub.score}/${opponentClub.wickets}`}</p>
                  </div>
                </div>
                <div className="match-footer">
                  <p>{`${getClubNameById(match.tossWinner)} chose to ${match.tossChoice.toLowerCase()}`}</p>
                  {match.currentInnings === "club2" && (
                    <p>{`Target: ${target}`}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Matches;
