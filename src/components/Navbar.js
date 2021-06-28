import React from 'react';

function Navbar({ leagues, setId }) {
  return (
    <div className="navbar">
      {leagues.map((league) => (
        <div
          className="league"
          key={league.league.id}
          onClick={() => setId(league.league.id)}
        >
          <img src={league.league.logo} alt={league.league.id} />
          <span>{league.league.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Navbar;
