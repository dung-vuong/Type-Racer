import React from 'react';
import { useMemo, useRef, useEffect, useState } from 'react';
import './HalfMinuteGame.css';
import TypingGameLetter from './TypingGameLetter.jsx';
import TypingGameWord from './TypingGameWord.jsx';


const HalfMinuteGame = (props)  => {
    const [letterStatuses, setLetterStatuses] = useState(new Array(1000).fill("default"));
    const [wordList, setWordList] = useState([])
    const [letterPosition, setLetterPosition] = useState(0)
    
    let displayLetters = useMemo(() => {
        let displayLetters = [];
        let tempList = [];
        let pos = 0;
        props.words.forEach((word) => {
            word = word + " ";
            let letterList = [];
            for (let i = 0; i < word.length; i++) {
                displayLetters.push(word[i])
                letterList.push(<TypingGameLetter letter={word[i]} key={pos} status={letterStatuses[pos]}/>);
                pos++;
            }
            tempList.push(<TypingGameWord letters={letterList}/>)
        });
        setWordList(tempList)
        return displayLetters
    },
    [props.words]
    );

    const [textInput, setTextInput] = useState("");

    const hiddenInputFocus = useRef(null);

    const setHiddenInputFocus = () => {
        hiddenInputFocus.current.focus();
    }

    const processTextInput = (e) => {
        if(e.key == "Shift"){
            return
        }
        if(e.key == displayLetters[letterPosition]){
            let temp = letterStatuses
            temp[letterPosition] = "correct"
            setLetterStatuses(temp)
            let tempList = [];
            let pos = 0;
            props.words.forEach((word) => {
                word = word + " ";
                let letterList = [];
                for (let i = 0; i < word.length; i++) {
                    letterList.push(<TypingGameLetter letter={word[i]} key={pos} status={letterStatuses[pos]}/>);
                    pos++;
                }
                tempList.push(<TypingGameWord letters={letterList}/>)
            });
            setWordList(tempList)
            setLetterPosition(letterPosition + 1)
        }
        else if(e.key == "Backspace"){
            if(letterPosition < 1)
                return
            let temp = letterStatuses
            temp[letterPosition-1] = "default"
            setLetterStatuses(temp)
            let tempList = [];
            let pos = 0;
            props.words.forEach((word) => {
                word = word + " ";
                let letterList = [];
                for (let i = 0; i < word.length; i++) {
                    letterList.push(<TypingGameLetter letter={word[i]} key={pos} status={letterStatuses[pos]}/>);
                    pos++;
                }
                tempList.push(<TypingGameWord letters={letterList}/>)
            });
            setWordList(tempList)
            setLetterPosition(letterPosition - 1)
        }
        else {
            let temp = letterStatuses
            temp[letterPosition] = "incorrect"
            setLetterStatuses(temp)
            let tempList = [];
            let pos = 0;
            props.words.forEach((word) => {
                word = word + " ";
                let letterList = [];
                for (let i = 0; i < word.length; i++) {
                    letterList.push(<TypingGameLetter letter={word[i]} key={pos} status={letterStatuses[pos]}/>);
                    pos++;
                }
                tempList.push(<TypingGameWord letters={letterList}/>)
            });
            setWordList(tempList)
            setLetterPosition(letterPosition + 1)
        }
    }

    return (
        <div className='game'>
            <input className='gameInput' onKeyDown={processTextInput} ref={hiddenInputFocus} value="" readOnly></input>
            <div onMouseUp={setHiddenInputFocus}>{wordList}</div>
        </div>
    )
}

export default HalfMinuteGame;