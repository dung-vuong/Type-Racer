import React from 'react'
import './LandingPageStyles.css'
import Introduction from './Introduction/Introduction'
import Members from './Members/Members'

const LandingPage = ()  => {
    return (
        <>
            <h1>THIS IS THE LANDING PAGE</h1>
            <Introduction/>
            <Members/>
        </>
    )
}

export default LandingPage