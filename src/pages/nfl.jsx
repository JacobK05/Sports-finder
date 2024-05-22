import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './style.css'
export default function nfl() {
  const [schedule, setSchedule] = useState([]);

  const fetchSchedule = () => {
    Axios.get("https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard")
      .then((res) => {
        console.log("Fetched data:", res.data.events);
        setSchedule(res.data.events);
      })
      .catch((error) => {
        console.error('Error fetching schedule:', error);
      });
  };

  useEffect(() => {
    // Uncomment the line below if you want to fetch data on component mount
    // fetchSchedule();
  }, []);

  console.log("Schedule:", schedule); // Check the value of schedule here

  return (
    <div className='nfl-container'>
    <div className="header-container">
      <h1 className='h2'>Week 1</h1>
      <button className='game-btn' onClick={fetchSchedule}>Click to see games</button>
    </div>
    <ul className='nfl-list'>
      {schedule && schedule.map(event => (
        <li className='nfl-games' key={event.id}>{event.name}</li>
      ))}
    </ul>
  </div>
  
  );
}