import React from 'react'
import './IntroductionStyles.css'
import {TypeAnimation} from 'react-type-animation'
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import LoginIcon from '@mui/icons-material/Login';

const Introduction = ()  => {
    return (
        <>
            <div className='mainIntro'>
                <header className='introHeader'>
                    <div className='typeAnimation'>
                        <p>
                            <TypeAnimation
                                repeat={Infinity}
                                wrapper="div"
                                style={{fontFamily: 'Source Sans Pro'}}
                                sequence={[
                                    'So you think you can type?',
                                    1000,
                                    'Try it now!',
                                    500
                                ]}
                            /> 
                        </p> 
                    </div>
                </header>
                <div className='start-container'>
                    <h2 className='start'>Get Started.</h2>
                </div>
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
                <div>
                    <p className='productIntro'>TyreRacer is a customizable typing test, 
                        featuring various typing modes and abilities 
                        for you to upload your own list of words. 
                        Test your typing skills and see where you 
                        land on the leaderboard.
                    </p>
                </div>
            </div>
         </>

    )
}

export default Introduction