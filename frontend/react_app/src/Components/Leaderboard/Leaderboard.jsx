import React, {useState} from 'react'
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';
import KeyboardOutlinedIcon from '@mui/icons-material/KeyboardOutlined';
import './Leaderboard.css'

const Leaderboard = () => {
    const [value, setValue] = useState('30s');
    const handleChange = (event) => {
        setValue(event.target.value)
    }

    return (
        <div className='page'>
            <div className='title'>
                <KeyboardOutlinedIcon fontSize='40px'/>
                &nbsp;&nbsp;Leaderboard&nbsp;&nbsp;
                <KeyboardOutlinedIcon fontSize='40px'/>
            </div>
            
            <FormControl fullWidth style={{width: '350px'}}>
                <InputLabel id="game-mode">Game Mode</InputLabel>
                <Select
                    labelId="game-mode"
                    id="mode-select"
                    value={value}
                    label="Game Mode"
                    onChange={handleChange}
                >
                    <MenuItem value={'30s'}>Time: 30 seconds</MenuItem>
                    <MenuItem value={'1min'}>Time: 1 minute</MenuItem>
                    <MenuItem value={'2min'}>Time: 2 minutes</MenuItem>
                    <MenuItem value={'50words'}>Words: 50 words</MenuItem>
                    <MenuItem value={'100words'}>Words: 100 words</MenuItem>
                    <MenuItem value={'200words'}>Words: 200 words</MenuItem>
                </Select>
                <FormHelperText>Leaderboard Based On Game Mode</FormHelperText>
            </FormControl>
        </div>
    )
}

export default Leaderboard