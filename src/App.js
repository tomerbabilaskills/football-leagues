import React, { useEffect, useState } from 'react';
import './styles/App.scss';
import axios from 'axios';
import Navbar from './components/Navbar';
import Groups from './components/Groups';

function App() {
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
    <div className="App">
      <Navbar leagues={leagues} />
      <Groups />
    </div>
  );
}

export default App;
