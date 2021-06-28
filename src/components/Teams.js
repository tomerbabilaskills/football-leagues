import React from 'react';
import '../styles/Teams.scss';

function Teams({ teams }) {
  return (
    <div className="content">
      {teams.map((team) => (
        <div className="team" key={team.team.id}>
          <img src={team.team.logo} alt={team.team.id} />
          <span>{team.team.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Teams;
