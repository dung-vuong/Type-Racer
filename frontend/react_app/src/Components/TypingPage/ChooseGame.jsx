import React, { useEffect, useState, useMemo } from 'react';
import { Select, MenuItem, FormControl, InputLabel, FormControlLabel, RadioGroup, Radio, FormLabel } from '@mui/material';
import "./ChooseGame.css"

const ChooseGame = (props) => {
    const [timeMode, setTimeMode] = useState("");
    const [wordMode, setWordMode] = useState("");
    const [wordSource, setWordSource] = useState("random");
    const [customListName, setCustomListName] = useState("");
    const [customListItems, setCustomListItems] = useState([]);

    const requestWords = async () => {
        let query = ""
        let url = ""
        if(wordSource === "random" || customListName === "" || props.user == null){
            query = "?number=";
            url = 'http://localhost:3001/random-words';
        }
        else{
            query = "?dictionaryName=" + customListName + "&wordCount=";
            url = 'http://localhost:3001/api/dictionary/getDictionaryWords';
        }
        query += getNumberWords();
        const response = await fetch(url + query);
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

    const getUserCustoms = async () => {
        if(props.user == null)
            return;
        let query = "?userID=" + props.user.data["_id"];
        let url = "http://localhost:3001/api/dictionary/getDictionariesFromUser"
        const response = await fetch(url + query);
        const data = await response.json();
        setCustomListItems(data);
        
    };

    const handleSourceChange = (event) => {
        if(props.isGameActive)
            return;
        setWordSource(event.target.value);
        if(event.target.value === "random"){
            props.setStatsAllowed(true)
            return;
        }
        props.setStatsAllowed(false);
        if(event.target.value === "select"){
            getUserCustoms();
        }
        else{
            //something maybe
        }
    };

    const uploadCustomList = async (list, name) => {
        let url = "http://localhost:3001/api/dictionary/uploadDictionary"
        const listdata = {
            "numWords": list.length,
            "dictionaryName": name,
            "allWords": list,
            "createdBy": props.user.data["_id"]
        };
        await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(listdata),
        });
    }

    const handleFileInput = (event) => {
        const file = event.target.files[0];
        let fr = new FileReader();
        const listWords = [];
        const fileName = file["name"].split(".")[0]
        setCustomListName(fileName);
        fr.onloadend = () => {
            const res = fr.result;
            const lines = res.split("\r\n");
            lines.forEach((line) =>{
                let words = line.split(/[, ]+/);
                words.forEach((word) => {
                    if(word !== "")
                        listWords.push(word)
                })
            })
            uploadCustomList(listWords, fileName);
        };
        fr.readAsText(file);
    };

    const handleSelectCustomChange = (event) => {
        if(props.isGameActive)
            return;
        setCustomListName(event.target.value);
    };

    const customMenuItems = useMemo(() => {
        const menuList = [];
        customListItems.forEach((item) => {
            const menuItem = <MenuItem value={item}>{item}</MenuItem>
            menuList.push(menuItem);
        });
        return menuList;
    }, [customListItems]);

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
            <br />
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
                    <FormControlLabel value="upload" control={<Radio size="small"/>} label="Upload Custom" />
                    <FormControlLabel value="select" control={<Radio size="small"/>} label="Select Custom" />
                </RadioGroup>
            </FormControl>
            </div>
            {(wordSource === "upload" && props.user != null &&
                <input type="file" accept=".txt,.csv" onChange={handleFileInput}/>
            )}
            {(wordSource === "select" && props.user != null &&
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="select-customs-label">Your Customs</InputLabel>
                    <Select
                        labelId="select-customs-label"
                        value={customListName}
                        onChange={handleSelectCustomChange}
                        label="Your Customs"
                    >
                    {customMenuItems}
                    </Select>
                </FormControl>
            )}
            {(wordSource !== "random" && props.user == null &&
                <div className='notSignedInMessage'>Must be signed in to use custom words.</div>
            )}
        </div>
    );
};

export default ChooseGame;