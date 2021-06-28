import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Navbar.scss';

function Navbar() {
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    (async () => {
      const config = {
        method: 'get',
        url: 'https://v3.football.api-sports.io/leagues',
        headers: {
          'x-rapidapi-key': '82dba22a90c05b3b1e541463e9376eb9',
          'x-rapidapi-host': 'v3.football.api-sports.io',
        },
      };

      const { data } = await axios(config);
      setLeagues(data.response.slice(0, 5));
    })();
  }, []);

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
