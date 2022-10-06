import React from 'react';
import HalfMinuteGame from './HalfMinuteGame';

//temporary subsitute for getting the words that will be retreived from api for the game
const words = ['I', 'like', 'to', 'eat', 'pie'];

const TypingPage = ()  => {

    /*const tempAPI = () => {
        let b = 0
        const data = fetch('http://localhost:3001/test', {
            method: 'POST',
        })
        .then((response) => response.json())
        .then((data) => console.log(data["message"]));
        return data
    }

    const words = tempAPI()*/
    return (
        <HalfMinuteGame words={words}/>
    )
}

export default TypingPage