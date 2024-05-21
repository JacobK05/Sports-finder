import React from 'react'
import { Link } from 'react-router-dom';
import NbaIcon from '../assets/nbaSvg.jsx';
import NhlIcon from '../assets/nhlSvg.jsx';
import NbaImage from '../assets/image.png';
import './style.css'
export default function body() {
  return (
  <>
  <section>
    <div className='Headline-card'>
      <img className='image' src={NbaImage} />
      <h1 className='h1'> Top Headlines </h1>
      <ul className='news-list'>
        <li className='news-item'> Minnesota Timber Wolves complete a 20 point come back to advance to the WCF vs DAL.</li>
        <li className='news-item'> Xander Schauffele wins his first ever major at Valhalla. </li>
        <li className='news-item'> The Pacers dominate the nicks in game 7 to advance the the ECF vs Boston.</li>
        <li className='news-item'> The Oilers win game 7 and will play DAL in the WCF.</li>
        <li className='news-item'> Nelly Korda has won her sixth LPGA in seven starts </li>
        <li className='news-item'> On Sunday Max verstapen won in Imola holding off Lando Norris who was only 0.700s back.</li>
      </ul>
    </div>
  </section>

  <section>
    <div className='links-card'>
      <h1 className='h1'> Quick Links </h1>
      <ul className='link-list'>
        <li className='link-item'> <Link to='/nfl/countdown' className='links'> NFL Countdown  </Link> </li> 
        <li className='link-item'> <Link to='/nba/games' className='links'> NBA Playoff games </Link>  </li>
        <li className='link-item'> <Link to='/nhl/games' className='links'> NHL Playoff games </Link> </li>
      </ul>
    </div>

  </section>

  <section className='upcoming-card'>
    <div className='card-content'>
      <h1 className='h1'> Upcoming Games </h1>
      <ul className='game-list'>
        <li className='game-items'> 
        <NbaIcon className='Icon' /> MIN vs DAL 
        </li>
        <li className='game-items'>
        <NbaIcon className='Icon' /> IND vs BOS 
        </li>
        <li className='nhl-items'> 
        <NhlIcon className='Icon' /> EMD vs DAL 
        </li>
        <li className='nhl-items'>
        <NhlIcon className='Icon' /> FLA vs NYR 
        </li>
      </ul>
    </div>
  </section>
  

  </>
  )
}
//<svg xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" viewBox="0 0 192.756 192.756" id="nba"><g fill-rule="evenodd" clip-rule="evenodd"><path fill="#fff" d="M0 0h192.756v192.756H0V0z"></path><path fill="#cc2229" d="M124.832 189.596c1.013-1.912 2.812-8.1-.562-14.625 1.013-3.6-1.688-4.389-2.812-12.375 1.125-2.363 1.912-5.176 1.8-8.326-.225-2.812-2.25-4.162-3.375-6.299-1.8-7.201-2.812-14.85-5.513-21.6-.899-3.264-3.149-6.076-4.725-9.113-1.575-8.1-2.362-16.762-4.837-24.412a6.475 6.475 0 0 0 1.237-1.238c-1.688-6.862-4.163-16.875-7.763-19.913.899-3.375 2.25-7.312 2.7-10.35 1.574-2.137 3.374-4.5 6.862-6.075 1.8 4.95 2.588 11.138 3.6 16.087 2.25 4.95 5.4 9.337 6.3 13.838-5.737 2.25-9.675 7.538-9.675 13.724 0 7.988 6.413 14.4 14.287 14.4 5.851 0 10.913-3.713 13.163-8.775v71.775c.001 6.413-4.499 11.814-10.687 13.277z"></path><path fill="#33348e" d="M118.099 189.809c-2.25-5.4-.9-9.9-.45-16.088-.562-2.812-1.013-5.625-1.463-8.324-3.149-4.838-4.274-9.225-5.062-14.4-5.962-5.287-12.938-9.9-17.662-15.637-8.438-7.988-14.625-16.201-18.9-25.426-1.462-.111-2.924-.225-4.5-.225-2.7-7.312-8.887-16.2-8.325-21.937.225-5.063 1.8-9.675 3.712-14.85-1.688-.338-3.262.225-5.062-.788-2.812-1.8-2.362-4.95-2.475-7.763 1.237-5.625 4.275-10.35 6.3-15.412 2.025-4.388 3.938-8.775 5.85-13.05 2.7-3.038 4.388-5.175 7.762-6.638 2.925-.338 5.851.112 9-.562 1.35-.45 3.038-.788 3.601-1.688 1.35-1.913 1.012-3.938 1.575-6.3-1.8-1.012-1.575-6.187.45-7.987 0-3.6 1.462-8.438 4.5-9.675l-26.1-.225a13.588 13.588 0 0 0-13.612 13.613v159.861a13.588 13.588 0 0 0 13.612 13.613l47.249-.112zM65.898 156.51h5.963l4.387 14.061V156.51h5.4v23.512h-6.075l-4.5-14.062v14.062h-5.175V156.51zm16.65 0h6.975c9.112 0 6.75 11.023 3.375 11.248 5.062-.561 5.737 12.264-2.475 12.264h-7.875V156.51zm5.4 3.824v5.287h1.351c2.25 0 2.25-5.287 0-5.287h-1.351zm0 9.338v6.525h1.351c2.587 0 2.25-6.525 0-6.525h-1.351zm12.825-13.162h7.2l4.162 23.512h-5.512l-.451-4.162h-3.824l-.676 4.162h-5.399l4.5-23.512zm2.138 15.187h2.812l-1.463-11.701-1.349 11.701z"></path><path fill="#cc2229" d="M106.238 3.421c3.825 3.6 6.188 8.775 2.588 15.075 2.25 1.462-1.688 4.05-2.588 6.075-1.124 3.15-4.949 4.95-4.499 6.075 4.949 3.038 8.887 6.075 13.837 10.012 2.588 3.263 3.6 16.312 5.062 26.212 2.138 6.188 5.175 11.475 6.3 18.45 3.938 1.462 6.975 4.5 8.55 8.1V16.47a13.587 13.587 0 0 0-13.612-13.612l-15.638.563z"></path></g></svg>