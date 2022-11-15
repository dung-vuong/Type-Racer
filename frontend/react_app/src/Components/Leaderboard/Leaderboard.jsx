import React, {useState} from 'react'
import { FormControl, InputLabel, Select, MenuItem, FormHelperText, Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import KeyboardOutlinedIcon from '@mui/icons-material/KeyboardOutlined';
import './Leaderboard.css'

// Time Mode
    // -words per minute
    // -% error
    // -number of words completed
// Word Game
    // -words per minute
    // -% error
    // -time to complete
const wordMode = true
const timeMode = true

const columns = [
    { field: 'firstName', headerName: 'Name', width: 160 },
    {
      field: 'error',
      headerName: 'Error (%)',
      type: 'number',
      width: 160,
    },
    {
      field: 'speed',
      headerName: 'Speed (WpM)',
      type: 'number',
      width: 210,
    },
    {
      field: 'mistakes',
      headerName: 'Mistakes',
      type: 'number',
      width: 170,
    },
    // {
    //   field: 'time',
    //   headerName: 'Time (s)',
    //   type: 'number',
    //   width: 170,
    // }
];
  
const rows = [
    { id: 1, firstName: 'Snow', error: 8, speed: 70, mistakes: 3 },
    { id: 2, firstName: 'Lannister', error: 10, speed: 68, mistakes: 5 },
    { id: 3, firstName: 'Lannister', error: 13, speed: 66, mistakes: 7 },
    { id: 4, firstName: 'Stark', error: 5, speed: 60, mistakes: 5 },
    { id: 5, firstName: 'Targaryen', error: 7, speed: 57, mistakes: 8 },
    { id: 6, firstName: 'Stark', error: 15, speed: 60, mistakes: 5 },
    { id: 7, firstName: 'Lannister', error: 14, speed: 68, mistakes: 5 },
    { id: 8, firstName: 'Targaryen', error: 10, speed: 57, mistakes: 8 },
    { id: 9, firstName: 'Targaryen', error: 11, speed: 57, mistakes: 8 },
    { id: 10, firstName: 'Stark', error: 3, speed: 60, mistakes: 5 },
];

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
            <Box className='table'>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                />
            </Box>
        </div>
    )
}

export default Leaderboard