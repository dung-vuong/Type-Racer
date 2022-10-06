import React from 'react';
import HalfMinuteGame from './HalfMinuteGame';
import { useState } from 'react';

//temporary subsitute for getting the words that will be retreived from api for the game
const words = ['I', 'like', 'to', 'eat', 'pie'];

const TypingPage = ()  => {

    const [whyCantThisWork, setWhyCantThisWork] = useState(words)

    const tempAPI = async () => {
        const temp = await fetch('http://localhost:3001/test', {
            method: 'POST',
        })
        const tempTwo = await temp.json();
        return tempTwo['message']
    }

    tempAPI().then((response) => setWhyCantThisWork(response))
    
    return (
        <HalfMinuteGame words={whyCantThisWork}/>
    )
}

export default TypingPage