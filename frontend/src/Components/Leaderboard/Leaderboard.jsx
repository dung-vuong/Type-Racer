import React, {useState} from 'react'
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';

import KeyboardAltTwoToneIcon from '@mui/icons-material/KeyboardAltTwoTone';
import './Leaderboard.css'
import TableBoard from './TableBoard';

const Leaderboard = () => {
    const [value, setValue] = useState('1');
    const handleChange = (event) => {
        setValue(event.target.value)
    }

    return (
        <div className='page'>
            <div className='title'>
                <KeyboardAltTwoToneIcon fontSize='40px'/>
                &nbsp;&nbsp;Leaderboard&nbsp;&nbsp;
                <KeyboardAltTwoToneIcon fontSize='40px'/>
            </div>
            
            <FormControl fullWidth style={{width: '350px'}}>
                <InputLabel id="game-mode">Game Mode</InputLabel>
                <Select
                    labelId="game-mode"
                    id="mode-select"
                    value={value}
                    label="Game Mode"
                    onChange={handleChange}
                    wrapper="div"
                    style={{fontFamily: 'unset', fontSize: 15}}
                >
                    <MenuItem value={'1'}>Time: 30 seconds</MenuItem>
                    <MenuItem value={'2'}>Time: 1 minute</MenuItem>
                    <MenuItem value={'3'}>Time: 2 minutes</MenuItem>
                    <MenuItem value={'4'}>Words: 30 words</MenuItem>
                    <MenuItem value={'5'}>Words: 60 words</MenuItem>
                    <MenuItem value={'6'}>Words: 120 words</MenuItem>
                </Select>
                <FormHelperText>Leaderboard Based On Game Mode</FormHelperText>
            </FormControl>
            <TableBoard value={value}/>
        </div>
    )
}

export default Leaderboard