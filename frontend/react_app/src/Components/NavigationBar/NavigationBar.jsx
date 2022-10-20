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
                        <li className='nav-login'>
                            {user 
                                ? 
                                <Button
                                    style={{margin: "0 1em 0 1em", color: "aliceblue", borderColor: "aliceblue"}}
                                    variant="outlined"
                                    color="primary"
                                    onClick={logout}>
                                    <LogoutIcon fontSize="small"/> &nbsp; Log Out
                                </Button>
                            
                                :
                                <>
                                    <Button
                                        style={{margin: "0 1em 0 1em", color: "aliceblue", borderColor: "aliceblue"}}
                                        variant="outlined"
                                        color="primary"
                                        component={Link}
                                        to='/login'>
                                        <SensorOccupiedIcon fontSize="small"/> &nbsp; Sign In
                                    </Button>
                                    <Button
                                        style={{color: "aliceblue", borderColor: "aliceblue"}}
                                        variant="outlined"
                                        color="primary"
                                        component={Link}
                                        to='/signup'>
                                        <LoginIcon fontSize="small"/> &nbsp; Sign Up
                                    </Button>
                                </>
                            }
                        </li>
                    </ul>
                </div>
           </nav>
        </>
    )
}

export default NavigationBar