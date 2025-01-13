import React from 'react';
import { useNavigate } from "react-router-dom";
import "../styles/Home.css"
const Home = () => {
    const navigate = useNavigate();

    const onPlay = () => {
        navigate("/gameplay");
    };
    
    return (
        <div className='container'>
            <div className="dices-img">
                <img src="/images/Dices.png" alt="Dices" />
            </div>
            <div className="home-txt">
                <h1>DICE GAME</h1>
                <button className='play-btn' onClick={onPlay}>Play Now</button>
            </div>
        </div>
    )
}

export default Home;
