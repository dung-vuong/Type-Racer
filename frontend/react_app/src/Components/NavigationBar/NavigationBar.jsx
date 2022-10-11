import React from 'react'
import "./NavigationBarStyles.css";

const NavigationBar = () => {
    return (
        <>
           <nav className="mainNav">
                <div className='container'>
                    <h2 className='nav-logo'>TypeRacer</h2>
                    <ul>
                        <li className='nav-item'>Home</li>
                        <li className='nav-item'>Type</li>
                        <li className='nav-item nav-login'>Login</li>
                    </ul>
                </div>
           </nav>
        </>
    )
}

export default NavigationBar