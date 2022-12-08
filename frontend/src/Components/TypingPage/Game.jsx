/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useMemo, useRef, useState, useEffect } from 'react';
import { Button } from '@mui/material';
import './Game.css'
import TypingGameLetter from './TypingGameLetter';
import TypingGameWord from './TypingGameWord';
import GameTimer from './GameTimer';
import StatDisplay from './StatDisplay';

const Game = (props)  => {
    const [letterStatuses, setLetterStatuses] = useState(new Array(props.numLetters).fill("default"));
    const [letterPosition, setLetterPosition] = useState(0);
    const [letterList, setLetterList] = useState([]);
    const [isGameFinished, setIsGameFinished] = useState(false);
    const [isTimerActive, setIsTimerActive] = useState(true);
    const [refreshDisplay, setRefreshDisplay] = useState(false);
    const [timer, setTimer] = useState('');
    const hiddenInputFocus = useRef(null);

    const isGameActive = props.isGameActive;
    const setIsGameActive = props.setIsGameActive;

    const wordList = useMemo(() => {
        if(refreshDisplay){
            setRefreshDisplay(false);
        }
        let letterNum = 0;
        let wordNum = 0;
        let curWord = 0;
        const tempWordList = [];
        const tempLetterList = [];
        props.words.forEach((word) => {
            word = word + " ";
            const letterList = [];
            for (let j = 0; j < word.length; j++) {
                tempLetterList.push(word[j]);
                if(letterPosition === letterNum){
                    curWord = parseInt(wordNum / 30, 10);
                }
                letterList.push(
                    <TypingGameLetter 
                        status={letterPosition === letterNum ? letterStatuses[letterNum] + '-active': letterStatuses[letterNum]}
                        letter={word[j]} 
                        key={letterNum}
                    />
                );
                letterNum++;
            }
            if(wordNum === (((curWord + 1) * 30) - 1) && (wordNum + 1) !== props.words.length){
                letterList.push(
                    <TypingGameLetter 
                        status={'default'}
                        letter={'--->'} 
                        key={-1}
                    />
                );
            }
            tempWordList.push(<TypingGameWord letters={letterList} key={wordNum}/>);
            wordNum++;
        });
        setLetterList(tempLetterList);
        return tempWordList.slice((curWord * 30), ((curWord + 1) * 30));
        }, [letterPosition, props.words, refreshDisplay]
    );

    const storeStats = async (wpm, error, gamemode, count, rem) => {
        if(props.user == null || !props.statsAllowed)
            return;
        const statData = {
            "wordsPerMinute" : wpm,
            "percentError" : error,
            "user_email" : props.user.data["email"],
        };
        let gmID = 0;
        if(gamemode === "time"){
            statData["wordsTyped"] = count;
            gmID = parseInt(props.time / 60, 10);
            gmID++;
        }
        else{
            statData["timeToComplete"] = rem;
            if(props.words.length === 30)
                gmID = 4;
            else if(props.words.length === 60)
                gmID = 5;
            else
                gmID = 6;
        }
        statData["gamemodeID"] = gmID;
        let url = "http://localhost:3001/createStat"
        const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(statData),
        });
        const resData = await response.json();
        console.log(resData)
    }

    const stats = useMemo(() => {
        if(!isGameFinished){
            return null;
        }
        let error = 0;
        let disqualifyWord = false;
        let correctWords = 0;
        let k = 0;
        let isDefault = false;
        props.words.every((tempWord) => {
            if(isDefault)
                return false;
            let word = tempWord + " ";
            disqualifyWord = false;
            for(let j = 0; j < word.length; j++){
                if(letterStatuses[k] === "incorrect"){
                    error++;
                    disqualifyWord = true;
                }
                else if(letterStatuses[k] === "default"){
                    isDefault = true;
                    return false;
                }
                k++;
            }
            correctWords += !disqualifyWord ? 1 : 0;
            return true;
        });
        if(letterList[k] === " ")
            correctWords += !disqualifyWord ? 1 : 0;
        let timeRemaining = 0;
        let timeSplit = timer.split(":");
        timeRemaining += parseInt(timeSplit[0], 10) * 60;
        timeRemaining += parseInt(timeSplit[1], 10);
        let wpm = props.gamemode === "time" ? correctWords/(props.time/60.0) : correctWords/(timeRemaining/60.0)
        wpm = parseInt(wpm, 10)
        error = parseInt(error/(letterStatuses.length - 1) * 100, 10)
        storeStats(wpm, error, props.gamemode, correctWords, timeRemaining);
        return(
            <StatDisplay
                wpm={wpm}
                gamemode={props.gamemode}
                error={error}
                wordsTyped={correctWords}
                time={timer}
            />
        )
    }, [isGameFinished]);

    useEffect(() => {
        if(!isGameActive)
            return;
        if(props.gamemode === "time"){
            setHiddenInputFocus();
        }
        else{
            setHiddenInputFocus();
        }
        setIsTimerActive(true);
    }, [isGameActive]);

    useEffect(() => {
        if(props.gamemode === "time" && timer === "00:00" && isGameActive){
            stopGame();
        }
    }, [timer]);

    useEffect(() => {
        setLetterStatuses(new Array(props.numLetters).fill("default"))
        setRefreshDisplay(true);
    }, [props.numLetters, props.words]);

    useEffect(() => {
        if(isGameActive && letterPosition >= letterList.length - 1){
            stopGame();
        }
    }, [letterPosition])

    useEffect(() => {
        if(props.triggerReset)
            resetGame();
    }, [props.triggerReset])

    const resetGame = () => {
        setLetterPosition(0);
        setIsGameActive(false);
        setIsGameFinished(false);
        setIsTimerActive(false);
        props.setTriggerReset(false);
        hiddenInputFocus.current.blur();
    }

    const stopGame = () => {
        setIsGameActive(false);
        setIsTimerActive(false);
        setIsGameFinished(true);
        hiddenInputFocus.current.blur();
    }

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
        if(isGameActive && !isGameFinished){
            setHiddenInputFocus();
        }
        if(!isGameFinished){
            setIsGameActive(true);
        }
    };

    const processTextInput = (e) => {
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
        else if(letterList[letterPosition] === " " && e.key !== " "){
            return;
        }
        else {
            updateLetterStatuses(letterPosition, "incorrect");
            setLetterPosition(letterPosition + 1);
        }
    }

    return (
        <div className='gameWrapper'>
            <div className="game">
                <input className='gameInput' onFocus={handleFocus} onKeyDown={processTextInput} ref={hiddenInputFocus} value="" readOnly></input>
                {(props.words != null && props.words.length > 0 &&
                    <div className='restartWrapper'>
                        <Button variant="contained" onClick={() => {props.setTriggerReset(true)}}>Restart</Button>
                    </div>
                )}
                <div className='gameTimerWrapper'>
                    <GameTimer time = {props.time} gamemode = {props.gamemode} active={isTimerActive} timer={timer} setTimer={setTimer}/>
                </div>
                {(props.words != null && props.words.length > 0 && !isGameActive && !isGameFinished &&
                    <div className='startGameWrapper'>
                        <div>Click word display below to start.</div>
                    </div>
                )}
                {(props.words != null && props.words.length > 0 &&
                    <div className='wordDisplayWrapper'>
                        <div className="wordsDisplay" onMouseUp={startGame}>
                            {wordList}
                        </div>
                    </div>
                )}
                {(stats != null && isGameFinished &&
                    <div className='statsWrapper'>
                        {stats}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Game;