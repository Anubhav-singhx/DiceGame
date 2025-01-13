import { use } from "react";
import { createContext, useState } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [diceValue, setDiceValue] = useState(1);
    const [selectedNumber, setSelectedNumber] = useState(null);
    const [score, setScore] = useState(0);

    const updateScore = () => {
        if (selectedNumber === null || diceValue === null) {
            return;
        }
        if (selectedNumber === diceValue) {
            setScore((prevScore) => prevScore + diceValue);
        }
        else {
            setScore((prevScore) => prevScore - 2)
        }
    }

    return (
        <GameContext.Provider value={{ diceValue, setDiceValue, selectedNumber, setSelectedNumber, score, setScore, updateScore }}>
            {children}
        </GameContext.Provider>
    )
}