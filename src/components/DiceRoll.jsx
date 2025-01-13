import { useContext, useEffect, useState } from "react";
import "../styles/DiceRoll.css";
import { GameContext } from "../context/Context";
const DiceRoll = () => {
  const [rulesToggle, setRulesToggle] = useState(false);
  const { diceValue, setDiceValue , updateScore, setScore} =useContext(GameContext);

  const img_click = () => {
    const newValue=(Math.floor(Math.random() * 6) + 1)
    setDiceValue(newValue)
    updateScore()
   };
   const diceImagePath = `/images/dice_${diceValue}.png`;
  const reset_score = () => { 
    setScore(0)
    
  };
  const rule = () => {
    setRulesToggle(!rulesToggle)
  };
  return (
    <div>
      <div className="roll-img">
        <img onClick={img_click} src={diceImagePath} alt={diceValue} />
        <h2>Click on the Dice To Roll</h2>
        <button onClick={reset_score} className="reset">
          Reset Score
        </button>
        <button onClick={() => rule()} className="rules">
          Show Rules
        </button>
      </div>
      {rulesToggle && (
        <div className="rule-container">
          <div className={`ruleBook ${rulesToggle ? 'rule' : ''}`}>
            <h3>How to play dice game</h3>
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>
              After click if selected number is equal to the dice number you get
              same point as dice
            </p>
            <p>if you get a wrong guess then 2 point will be deducted</p>
          </div>
        </div>)}
    </div>
  );
};

export default DiceRoll;
