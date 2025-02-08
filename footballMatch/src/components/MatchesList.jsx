import React from "react";
import { useDispatch, useSelector } from "react-redux";

function MatchesList() {
    const footballMatches = useSelector((state) => state.footballMatches);

//   const action = useDispatch();
  return (
    <>
      <h2>Matches List</h2>
      <ul>
        {footballMatches.map((match, index) => {
          return <li key={index}>
                {match.team1} vs {match.team2}
                <p>{match.year}</p>
                <h3>{match.competition}</h3>
                <h3>Team Goals</h3>
                <ul typeof="square">
                    <p>{match.team1}-{match.team1goals}</p>
                    <p>{match.team2}-{match.team2goals}</p>
                </ul>
          </li>;
        })}
      </ul>
    </>
  );
}

export default MatchesList;
