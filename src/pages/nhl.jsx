import React from 'react'
import NhlImage from '../assets/NHLimage.png'
export default function nhl() {
  return (
    <>
    <section className='nba-card'> 
    <div className='nba-content'>
      <h1 className='h1'> NHL Conference Finals </h1>
      <ul className='nba-list'>
        <li className='nba-item'>
          EDM VS DAL:  0-0
        </li>
        <li className='nba-item'>
          FLA VS NYR: FLA 1-0
        </li>
      </ul>
    </div>
    </section>
    <section className='nba-news'>
    <div className='nfl-headline'>
    <img className='image' src={NhlImage} />
      <h1 className='h1'> NHL Headlines </h1>
      <ul className='nfl-news'>
        <li className='nfl-item'> Keefe hired as Devils coach, replaces Green </li>
        <li className='nfl-item'> Hintz out for Stars in Game 1 of Western Final against Oilers </li>
        <li className='nfl-item'> Tkachuk provides spark for Panthers in Game 1 win </li>
        <li className='nfl-item'> Landeskog planning to return to Avalanche next season </li>
        <li className='nfl-item'> Bruins 'are going to be aggressive' in offseason, GM Sweeney says </li>
      </ul>
    </div>
  </section>
  </>
  )
}
