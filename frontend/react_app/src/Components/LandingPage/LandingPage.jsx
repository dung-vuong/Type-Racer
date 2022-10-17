import React from 'react'
import './LandingPageStyles.css'
import Introduction from './Introduction/Introduction'
import Members from './Members/Members'

const LandingPage = ()  => {
	const user = localStorage.getItem('data')
    console.log(user)
    return (
        <>
            <h5>This is my user {user}</h5>
            <Introduction/>
            <Members/>
        </>
    )
}

export default LandingPage