import React from 'react'
import './LandingPageStyles.css'
import Introduction from './Introduction/Introduction'
import Members from './Members/Members'

const LandingPage = ()  => {
	const token = localStorage.getItem('token')
    console.log(token)
    return (
        <>
            <h5>This is my token {token}</h5>
            <Introduction/>
            <Members/>
        </>
    )
}

export default LandingPage