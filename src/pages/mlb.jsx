import React, { useState } from 'react';
import Axios from 'axios';

export default function NFL() {
  const [schedule, setSchedule] = useState([]);

  const fetchSchedule = () => { 
    Axios.get("http://statsapi.mlb.com/api/v1/schedule/games/?sportId=1")
      .then((res) => {
        const games = res.data.dates[0].games;
        const teamsPlayingToday = games.map(game => ({
          homeTeam: game.teams.home.team.name,
          awayTeam: game.teams.away.team.name
        }));
        setSchedule(teamsPlayingToday);
      })
      .catch((error) => {
        console.error('Error fetching schedule:', error);
      });
  };

  return (
    <>
    <div className='nfl-container'>
      <div className="header-container">
        <h1 className='h2'>Today's Games</h1>
        <button className='game-btn' style={{ cursor: 'pointer' }} onClick={fetchSchedule}>Click to see games</button>
      </div>
      <ul className='nfl-list'>
        {schedule && schedule.map((game, index) => (
          <li className='nfl-games' key={index}>
            {game.awayTeam} vs {game.homeTeam}
          </li>
        ))}
      </ul>
    </div>
      <section className='nfl-card'>
      <div className='nfl-headline'>
        <h1 className='h1'> MLB Headlines </h1>
        <ul className='nfl-news'>
          <li className='nfl-item'> The Yankees have the best record in the American League after a disappointing 2023 season </li>
          <li className='nfl-item'> The Reds' playoff odds have dropped precipitously since a 14-10 start to the season </li>
          <li className='nfl-item'> Julio Rodríguez dropped in Mariners lineup as former Rookie of the Year sees power slip, strikeouts rise </li>
          <li className='nfl-item'> John Means injury: Orioles pitcher hits IL with forearm strain just two years after Tommy John surgery </li>
          <li className='nfl-item'> Mariners confirm Yankees' Clarke Schmidt was tipping pitches: 'Anything we can to gain an advantage'</li>
        </ul>
      </div>
    </section>
    </>
  );
}
