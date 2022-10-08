import React from 'react'
import './LandingPageStyles.css'
import Introduction from './Introduction/Introduction'
import Members from './Members/Members'

const LandingPage = ()  => {
	const token = localStorage.getItem('token')
    console.log(token)
    return (
        <>
            <h1>THIS IS THE LANDING PAGE</h1>
            <h1>This is my token {token}</h1>
            <Introduction/>
            <Members/>
        </>
    )
}

export default LandingPage