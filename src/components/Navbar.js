import React from 'react';
import '../styles/Navbar.scss';

function Navbar(leagues) {
  return (
    <div className="navbar">
      {leagues &&
        leagues.map((league) => (
          <div className="league" key={league.league.id}>
            <img src={league.league.logo} alt={league.league.id} />
            <span>{league.league.name}</span>
          </div>
        ))}
    </div>
  );
}

export default Navbar;
