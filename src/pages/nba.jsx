import React from 'react'
import './style.css'
import NbaImage2 from '../assets/image2.png'
export default function nba() {
  return (
    <>
    <section className='nba-card'> 
    <div className='nba-content'>
      <h1 className='h1'> NBA Conference Finals </h1>
      <ul className='nba-list'>
        <li className='nba-item'>
          BOS VS IND: BOS 2-0
        </li>
        <li className='nba-item'>
          MIN VS DAL: DAL 1-0
        </li>
      </ul>
    </div>
    </section>
    <section className='nba-news'>
    <div className='nfl-headline'>
    <img className='image' src={NbaImage2} />
      <h1 className='h1'> NBA Headlines </h1>
      <ul className='nfl-news'>
        <li className='nfl-item'> Indiana had Game 1 in its grasp before letting it slip away in overtime with a handful of critical miscues. </li>
        <li className='nfl-item'> In a game that saw both teams deliver haymaker runs, it was Dallas that had the final answer to get the road win. </li>
        <li className='nfl-item'> Three stars combine for 90 points as Boston takes a 1-0 lead over Indy.  </li>
        <li className='nfl-item'> Cavs dismiss coach J.B. Bickerstaff after four seasons </li>
      </ul>
    </div>
  </section>
  </>
  )
}
