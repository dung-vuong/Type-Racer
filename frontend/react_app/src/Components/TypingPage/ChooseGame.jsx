import React, { useEffect, useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel, FormControlLabel, RadioGroup, Radio, FormLabel } from '@mui/material';
import "./ChooseGame.css"

const ChooseGame = (props) => {
    const [timeMode, setTimeMode] = useState("");
    const [wordMode, setWordMode] = useState("");
    const [wordSource, setWordSource] = useState("random");

    const requestWords = async () => {
        let query = "?number=";
        query += getNumberWords();
        const response = await fetch('http://localhost:3001/random-words' + query);
        const data = await response.json();
        props.setGameWords(data['words']);
        props.setGameLetters(data['letterCount'] + data['words'].length);
    }

    const getNumberWords = () => {
        if(timeMode !== ""){
            switch(timeMode){
                case(30):
                    return 125;
                case(60):
                    return 250;
                case(120):
                    return 450;
                default:
                    return 0;
            }
        }
        else if(wordMode !== ""){
            return wordMode
        }
        return 0;
    }

    const handleTimeChange = (event) => {
        if(props.isGameActive)
            return;
        setWordMode("");
        setTimeMode(event.target.value);
        props.setGamemode("time")
        props.setGameTime(event.target.value);
    };

    const handleWordChange = (event) => {
        if(props.isGameActive)
            return;
        setTimeMode("")
        props.setGamemode("word")
        setWordMode(event.target.value);
    };

    const handleSourceChange = (event) => {
        if(props.isGameActive)
            return;
        setWordSource(event.target.value);
        if(event.target.value === "random"){
            props.setStatsAllowed(true)
        }
        else{
            props.setStatsAllowed(false);
        }
    };

    const handleFileInput = (event) => {
        const file = event.target.files[0];
        let fr = new FileReader();
        fr.onloadend = () => {
            const res = fr.result;
            if(file["name"].split(".").pop() === "txt"){
                console.log(res);
            }
            else{
                console.log("csv do something")
            }
        };
        fr.readAsText(file);
    };

    useEffect(() => {
        if(timeMode === "" && wordMode === "")
            return;
        props.setTriggerReset(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timeMode, wordMode])

    useEffect(() => {
        if(props.triggerReset)
            requestWords();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.triggerReset])

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
                        <MenuItem value={30}>30 Words</MenuItem>
                        <MenuItem value={60}>60 Words</MenuItem>
                        <MenuItem value={120}>120 Words</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div>
            <FormControl>
                <FormLabel id="wordSourceLabel">Type of Words</FormLabel>
                <RadioGroup
                    aria-labelledby="wordSourceLabel"
                    name="controlled-radio-buttons-group"
                    value={wordSource}
                    defaultValue="random"
                    onChange={handleSourceChange}
                    row
                >
                    <FormControlLabel value="random" control={<Radio size="small"/>} label="Random" />
                    <FormControlLabel value="upload" control={<Radio size="small"/>} label="Custom Upload" />
                    <FormControlLabel value="select" control={<Radio size="small"/>} label="Select Custom" />
                </RadioGroup>
            </FormControl>
            </div>
            {(wordSource === "upload" &&
                <input type="file" accept=".txt,.csv" onChange={handleFileInput}/>
            )}
        </div>
    );
};

export default ChooseGame;