import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function nflcount() {
  const calculateCountdown = () => {
    const countDownDate = new Date("Sep 7, 2024 07:20:00").getTime();
    const now = new Date().getTime();
    const duration = countDownDate - now;

    if (duration < 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    const days = Math.floor(duration / (1000 * 60 * 60 * 24));
    const hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((duration % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds
    };
  };

  const [countdown, setCountdown] = useState(calculateCountdown());

  useEffect(() => {
    const interval = setInterval(() => {
      const newCountdown = calculateCountdown();
      setCountdown(newCountdown);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <div className='container'>
        <h1 className='header'> NFL CountDown </h1>
        <div className='count-container'>
          <span className='count'>Days:</span>
          <span className='days'>{countdown.days}</span>
        
        
          <span className='count'>Hrs:</span>
          <span className='hours'>{countdown.hours}</span>
      
          <span className='count'>Min:</span>
          <span className='minutes'>{countdown.minutes}</span>
    
          <span className='count'>Sec:</span>
          <span className='seconds'>{countdown.seconds}</span>
        </div>
      </div>
      <Link to='/nfl'>
        <button className='nflBtn' style={{cursor: 'pointer'}}> Go to NFL</button>
      </Link>
    
    </main>
  );
}