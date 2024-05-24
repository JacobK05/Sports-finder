import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './componets/navTab'
import Body from './componets/body'
import Nhl from './pages/nhl'
import Nfl from './pages/nfl'
import Nba from './pages/nba'
import Mlb from './pages/mlb'
import NflCount from './pages/nflcount.jsx'
import Footer from './componets/footer'
function App() {
  return (
   <>
     <BrowserRouter>
       <Header />
         <Routes>
            <Route exact path='/' element={<Body />} />
            <Route exact path='/nhl' element={<Nhl />} />
            <Route exact path='/nba' element={<Nba />} />
            <Route exact path='/nfl' element={<Nfl />} />
            <Route exact path='/mlb' element={<Mlb />} />
            <Route exact path='/nfl/countdown' element={<NflCount />} />
         </Routes>
       <Footer />
     </BrowserRouter>
   </>
      
  )
}

export default App
