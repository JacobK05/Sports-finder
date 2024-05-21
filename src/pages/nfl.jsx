import React, { useState, useEffect } from 'react';
import Axios from 'axios';
//https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard
export default function nfl() { // Capitalize component name
  const [schedule, setSchedule] = useState("");

  const fetchSchedule = () => { 
    Axios.get("https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard")
      .then((res) => {
        console.log(res.data);
        setSchedule(res.data); // Optionally set the fetched data to state
      })
      .catch((error) => {
        console.error('Error fetching schedule:', error);
      });
  };

  useEffect(() => {
    fetchSchedule(); // Fetch schedule when component mounts
  }, []); // Empty dependency array ensures it only runs once

  return (
    <div>
      {/* Render fetched data or other components here */}
    </div>
  );
}