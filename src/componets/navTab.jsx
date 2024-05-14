import { Link } from 'react-router-dom'
import Header from './header'
import React from 'react'
import './style.css'
export default function navTab() {
  return (
    <Header 
    links={[
        <Link key={1} className='home-link' to="/">Sports Finder    </Link>,
        <Link key={2} className='link' to="/nfl">NFL</Link>,
        <Link key={3} className='link' to="/nba">NBA</Link>,
        <Link key={4} className='link' to="/nhl">NHL</Link>,
        <Link key={5} className='link' to="/mlb">MLB</Link>,
    ]}
    />
  )
}
