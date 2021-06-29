import React, { useEffect, useState } from 'react';
import './styles/App.scss';
import axios from 'axios';
import Navbar from './components/Navbar';
import Teams from './components/Teams';

function App() {
  const [leagues, setLeagues] = useState([]);
  const [id, setId] = useState(0);
  const [teams, setTeams] = useState([]);
 
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
      setId(data.response[0].league.id);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const config = {
        method: 'get',
        url: `https://v3.football.api-sports.io/teams?league=${id}&season=2020`,
        headers: {
          'x-rapidapi-key': '82dba22a90c05b3b1e541463e9376eb9',
          'x-rapidapi-host': 'v3.football.api-sports.io',
        },
      };

      const { data } = await axios(config);
      setTeams(data.response);
    })();
  }, [id]);

  return (
    <div className="App">
      {leagues && (
        <div>
          <Navbar leagues={leagues} setId={setId} />
          <Teams teams={teams} />
        </div>
      )}
    </div>
  );
}

export default App;
