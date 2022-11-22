import React from 'react';
import Game from './Game';
import { useState } from 'react';
import ChooseGame from './ChooseGame';

const TypingPage = (props)  => {
    const [gameWords, setGameWords] = useState([]);
    const [gameLetters, setGameLetters] = useState(0);
    const [gameTime, setGameTime] = useState(0);
    const [gamemode, setGamemode] = useState(null);
    const [statsAllowed, setStatsAllowed] = useState(true);
    const [triggerReset, setTriggerReset] = useState(false);
    const [isGameActive, setIsGameActive] = useState(false);

    return (
        <div className='typing-display'>
            <div className='chooseGameWrapper'>
                <ChooseGame 
                    setGameWords={setGameWords}
                    setGameLetters={setGameLetters}
                    setGameTime={setGameTime}
                    setGamemode={setGamemode}
                    setStatsAllowed={setStatsAllowed}
                    triggerReset={triggerReset}
                    setTriggerReset={setTriggerReset}
                    isGameActive={isGameActive}
                    user={props.user}
                />
            </div>
            {(gamemode != null &&
                <div className='typingGameWrapper'>
                    <Game 
                        words={gameWords} 
                        numLetters={gameLetters} 
                        time={gameTime} 
                        gamemode={gamemode} 
                        user={props.user}
                        triggerReset={triggerReset}
                        statsAllowed={statsAllowed}
                        setTriggerReset={setTriggerReset}
                        isGameActive={isGameActive}
                        setIsGameActive={setIsGameActive}
                    />
                </div>
            )}
        </div>
    )
}

export default TypingPage