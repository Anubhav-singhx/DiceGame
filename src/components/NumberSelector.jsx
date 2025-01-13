import { useContext, useState } from 'react'
import "../styles/NumberSelector.css"
import { GameContext } from '../context/Context';

const NumberSelector = () => {
  const {selectedNumber, setSelectedNumber}=useContext(GameContext)
  const num = [1, 2, 3, 4, 5, 6];

  const handleClick = (value) => {
    if (value === selectedNumber) {
      setSelectedNumber(null)
    }
    else {
      setSelectedNumber(value)
    }
  }
  return (
    <div className='ns-main'>
    {
      selectedNumber===null && (
    <div className='not_selected'>Please select any number</div>

      )
    }
      <div className='num-box'>
        {num.map((value, i) => (<div
          key={i}
          onClick={() => handleClick(value)}
          className={`select-box ${value === selectedNumber ? 'selected' : ''}`}>
          {value}

        </div>))}
      </div>
      <h3>Select a Number</h3>
    </div>
  )
}

export default NumberSelector
