import React from 'react';
import TimeGame from './TimeGame';
import { useState } from 'react';
import ChooseGame from './ChooseGame';

const TypingPage = ()  => {
    const [gameWords, setGameWords] = useState([]);
    const [gameLetters, setGameLetters] = useState(0);
    const [gameTime, setGameTime] = useState(0);

    return (
        <div className='typing-display'>
            <ChooseGame 
                setGameWords={setGameWords}
                setGameLetters={setGameLetters}
                setGameTime={setGameTime}
            />
            <TimeGame words={gameWords} numLetters={gameLetters} time={gameTime}/>
        </div>
    )
}

export default TypingPage