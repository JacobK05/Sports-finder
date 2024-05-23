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
    <>
    <div className='nfl-container'>
    <div className="header-container">
      <h1 className='h2'>Week 1</h1>
      <button className='game-btn' style={{cursor: 'pointer'}}  onClick={fetchSchedule}>Click to see games</button>
    </div>
    <ul className='nfl-list'>
      {schedule && schedule.map(event => (
        <li className='nfl-games' key={event.id}>{event.name}</li>
      ))}
    </ul>
  </div>
  <section className='nfl-card'>
    <div className='nfl-headline'>
      <h1 className='h1'> NFL Headlines </h1>
      <ul className='nfl-news'>
        <li className='nfl-item'> OTAs started this week </li>
        <li className='nfl-item'> Cowboys QB Dak Prescott on contract talks: 'I don't play for money'  </li>
        <li className='nfl-item'> Free-agent RB Dalvin Cook hopes to join team for training camp: 'I'm ready to roll' </li>
        <li className='nfl-item'> Saquon Barkley feels 'like a rookie again' at Eagles OTAs </li>
        <li className='nfl-item'> Lions' Dan Campbell: WR Jameson Williams a 'man on a mission' </li>
      </ul>
    </div>
  </section>
  </>
  );
}