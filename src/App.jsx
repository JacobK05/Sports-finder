import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './componets/navTab'
import Body from './componets/body'
function App() {
  return (
   <>
     <BrowserRouter>
       <Header />
         <Routes>
            <Route exact path='/' element={<Body />} />
         </Routes>
     </BrowserRouter>
   
   
   </>
      
  )
}

export default App
