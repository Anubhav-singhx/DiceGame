import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import GamePlay from './components/GamePlay'
import { GameProvider } from './context/Context.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {

  return (

    <GameProvider>
      <Router>

        <div className="main-container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/gameplay' element={<GamePlay />}/>
            </Routes>
        </div>
      </Router>
    </GameProvider>
  )
}

export default App
