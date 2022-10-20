import React from 'react'
import "./NavigationBarStyles.css";
import { Button } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

const NavigationBar = ({user}) => {
	const navigate = useNavigate();
    const logout = () =>{
        localStorage.clear()
        // setUser(null)
        navigate("/");
        window.location.reload()
    }

    return (
        <>
           <nav className="mainNav">
                <div className='container'>
                    <h2 className='nav-logo'>TypeRacer</h2>
                    <ul>
                        <li className='nav-item'>Home</li>
                        <li className='nav-item'>Type</li>
                       
                    </ul>
                </div>
           </nav>
        </>
    )
}

export default NavigationBar