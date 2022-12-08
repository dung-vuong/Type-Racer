import React from 'react'
import './IntroductionStyles.css'
import {TypeAnimation} from 'react-type-animation'
import { Link } from "react-router-dom";

const Introduction = ()  => {
    return (
        <>
            <div className='mainIntro'>
                <header className='introHeader'>
                    <div className='typeAnimation'>
                        <TypeAnimation
                            repeat={Infinity}
                            wrapper="div"
                            style={{fontFamily: 'unset', fontSize: 50}}
                            sequence={[
                                'So you think you can type?',
                                1000,
                                'Try it now!',
                                500
                            ]}
                        /> 
                    </div>
                </header>
                <Link to='/typing' style={{textDecoration: 'none'}}>
                    <div className='start-container'>
                        <h2 className='start'>Get Started</h2>
                    </div>
                </Link>
                <div>
                    <p className='productIntro'>
                        TypeRacer is a customizable typing test, 
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