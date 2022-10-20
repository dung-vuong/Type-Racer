import React, { useEffect, useState } from 'react';
import { Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import "./ChooseGame.css"
import { PromiseProvider } from 'mongoose';


const ChooseGame = (props) => {
    const [timeMode, setTimeMode] = useState("");
    const [wordMode, setWordMode] = useState("");

    const requestWords = async () => {
        let query = "?=";
        query += getNumberWords;
        const response = await fetch('http://localhost:3001/random-words' + query);
        const data = await response.json();
        props.setGameWords(data['words']);
        props.setGameLetters(data['letterCount']);
    }

    const getNumberWords = () => {
        if(timeMode != ""){
            switch(timeMode){
                case(30):
                    return 125;
                case(60):
                    return 250;
                case(120):
                    return 450;
            }
        }
        else{
            return wordMode
        }
    }

    const handleTimeChange = (event) => {
        setWordMode("");
        setTimeMode(event.target.value);
        props.setTimeMode(event.target.value);
    };

    const handleWordChange = (event) => {
        setTimeMode("")
        setWordMode(event.target.value);
    };

    useEffect(() => {
        requestWords();
    }, [timeMode, wordMode])

    return(
        <div className='chooseGame'>
            <div>Choose A Game Mode</div>
            <div className="gameSelections">
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="time-select-label">Time</InputLabel>
                    <Select
                        labelId="time-select-label"
                        value={timeMode}
                        onChange={handleTimeChange}
                        label="Time"
                    >
                        <MenuItem value={30}>30 Seconds</MenuItem>
                        <MenuItem value={60}>1 Minute</MenuItem>
                        <MenuItem value={120}>2 Minutes</MenuItem>
                    </Select>
                </FormControl>
                
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="word-select-label">Word</InputLabel>
                    <Select
                        labelId="word-select-label"
                        value={wordMode}
                        onChange={handleWordChange}
                        label="Words"
                    >
                        <MenuItem value={50}>50 Words</MenuItem>
                        <MenuItem value={100}>100 Words</MenuItem>
                        <MenuItem value={200}>200 Words</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    );
};

export default ChooseGame;