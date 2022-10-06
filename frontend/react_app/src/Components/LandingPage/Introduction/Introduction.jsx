import React from 'react'
import './IntroductionStyles.css'
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import LoginIcon from '@mui/icons-material/Login';

const Introduction = ()  => {
    return (
        <div>
            <h1>Introduction</h1>
            <h2> - Game Description</h2>
            <Button
                style={{marginRight: "1em"}}
                variant="contained"
                color="primary"
                component={Link}
                to='/login'>
                <SensorOccupiedIcon fontSize="small"/> &nbsp; Sign In
            </Button>
            <Button
                variant="contained"
                color="primary"
                component={Link}
                to='/signup'>
                <LoginIcon fontSize="small"/> &nbsp; Sign Up
            </Button>
        </div>
    )
}

export default Introduction