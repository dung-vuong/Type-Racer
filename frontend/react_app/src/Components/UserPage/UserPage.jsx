import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import ModeBasedStats from './ModeBasedStats';


const UserPage = ({user}) => {
    const gameModes = ["🕐 Time Mode: 30 seconds 🕐", "🕐 Time Mode: 1 minute 🕐", "🕐 Time Mode: 2 minutes 🕐",
                        "Ⓐ Word Mode: 30 words ⓩ", "Ⓐ Word Mode: 60 words ⓩ", "Ⓐ Word Mode: 120 words ⓩ"]
    const [rows, setRows] = useState([]);
    const requestStats = async () => {

        fetch("http://localhost:3001/getStats")
            .then((response) => response.json())
            .then((data) => setRows(data.filter(row => row.user_email === user.data.email)))
    }
    useEffect(() => {
        requestStats();
    },[])

    return (
        <div className='page'>
            <div className='title'>
                <AccountCircleTwoToneIcon fontSize='45px'/>
                <div>&nbsp;&nbsp;User Records&nbsp;&nbsp;</div>
            </div>
            <Grid container alignItems="stretch" spacing={2} >
                {gameModes.map((gameMode, idx) => (
                    <Grid key={idx} item xs={12} sm={6}>
                        <ModeBasedStats rows={rows} gameMode={gameMode} idx={idx+1}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default UserPage