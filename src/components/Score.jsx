

import { useContext } from "react"
import "../styles/Score.css"
import { GameContext } from "../context/Context"


const Score = () => {
  const {score}=useContext(GameContext)

  return (
    <div>
      <div className="score">
        <h1>{score}</h1>
        <p>Your Score</p>
      </div>

    </div>
  )
}

export default Score
