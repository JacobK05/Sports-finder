import React, { useState, useEffect } from 'react';
import Axios from 'axios';

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
    <div>
      <h1>Week 1</h1>
      <button onClick={fetchSchedule}>Click to see games</button>
      <ul>
        {schedule && schedule.map(event => (
          <li key={event.id}>{event.name}</li>
        ))}
      </ul>
    </div>
  );
}