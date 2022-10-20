import React from 'react';
import { useMemo, useRef, useState, useEffect } from 'react';
import TypingGameLetter from './TypingGameLetter';
import TypingGameWord from './TypingGameWord';
import './TimeGame.css'

const TypingGameWordList = (props)  => {
    const [letterStatuses, setLetterStatuses] = useState(new Array(props.numLetters).fill("default"));
    const [letterPosition, setLetterPosition] = useState(0);
    const [isGameActive, setIsGameActive] = useState(false);
    const hiddenInputFocus = useRef(null);

    const [wordList, letterList] = useMemo(() => {
        let letterNum = 0;
        let wordNum = 0;
        const tempWordList = [];
        const tempLetterList = [];
        props.words.forEach((word) => {
            word = word + " ";
            const letterList = [];
            for (let j = 0; j < word.length; j++) {
                tempLetterList.push(word[j]);
                letterList.push(<TypingGameLetter status={letterPosition === letterNum ? letterStatuses[letterNum] + '-active': letterStatuses[letterNum]} letter={word[j]} key={letterNum}/>);
                letterNum++;
            }
            tempWordList.push(<TypingGameWord letters={letterList} key={wordNum}/>);
            wordNum++;
        });
        return [tempWordList, tempLetterList];
        }, [letterPosition, props.words]
    );

    useEffect(() => {
        if(isGameActive){
            setHiddenInputFocus();
            setTimeout(() => {
                setIsGameActive(false)
                hiddenInputFocus.current.blur();
            }, 5000);
        }
    }, [isGameActive]);

    const setHiddenInputFocus = () => {
        hiddenInputFocus.current.focus();
    }

    const handleFocus = () => {
        if(!isGameActive){
            hiddenInputFocus.current.blur();
        }
    }

    const updateLetterStatuses = (position, status) => {
        const tempArr = letterStatuses;
        tempArr[position] = status;
        setLetterStatuses(tempArr);
    };

    const startGame = () => {
        setIsGameActive(true);
    };

    const processTextInput = (e) => {
        console.log(e.key)
        if(e.key === "Shift"){
            return;
        }
        if(e.key === letterList[letterPosition]){
            updateLetterStatuses(letterPosition, "correct");
            setLetterPosition(letterPosition + 1);
        }
        else if(e.key === "Backspace"){
            if(letterPosition < 1)
                return;
            updateLetterStatuses(letterPosition - 1, "default");
            setLetterPosition(letterPosition - 1);
        }
        else {
            updateLetterStatuses(letterPosition, "incorrect");
            setLetterPosition(letterPosition + 1);
        }
    }

    return (
        <div className="game">
            <button onClick={startGame}>start</button>
            <input className='gameInput' onFocus={handleFocus} onKeyDown={processTextInput} ref={hiddenInputFocus} value="" readOnly></input>
            <div onMouseUp={setHiddenInputFocus}>{wordList}</div>
        </div>
    )
}

export default TypingGameWordList;