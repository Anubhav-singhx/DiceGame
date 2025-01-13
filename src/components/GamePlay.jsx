import NumberSelector from './NumberSelector'
import Score from './Score'
import "../styles/GamePlay.css"
import DiceRoll from './DiceRoll'

const GamePlay = () => {
  return (
    <div >
    <div className="top">
    <Score/>
    <NumberSelector/>
    </div>
    <div>
    <DiceRoll/>
    </div>
    </div>
  )
}

export default GamePlay
