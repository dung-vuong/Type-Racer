import React from 'react';
import HalfMinuteGame from './HalfMinuteGame';

//temporary subsitute for getting the words that will be retreived from api for the game
const words = ['I', 'like', 'to', 'eat', 'pie'];

const TypingPage = ()  => {
    return (
        <HalfMinuteGame words={words}/>
    )
}

export default TypingPage