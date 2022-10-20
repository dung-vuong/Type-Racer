import React from 'react'
import "./NavigationBarStyles.css";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

const NavigationBar = ({user}) => {
    const [open, setOpen] = React.useState(false);
	const navigate = useNavigate();
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleAgree = () => {
        setOpen(false);
        localStorage.clear()
        // setUser(null)
        navigate("/");
        window.location.reload()
    };

    const handleDisagree = () => {
        setOpen(false);
    };

    return (
        <>
           <nav className="mainNav">
                <div className='container'>
                    <Link to='/'><h2 className='nav-logo'>TypeRacer</h2></Link> 
                    <ul>
                        <Link to='/'><li className='nav-item'>Home</li></Link>
                        <Link to='/typing'><li className='nav-item'>Type</li></Link>
                        <Link to='/leaderboard'><li className='nav-item'>Leaderboard</li></Link>
                        <li className='nav-login'>
                            {user 
                                ? 
                                <Button
                                    style={{margin: "0 1em 5px 1em", color: "aliceblue", borderColor: "aliceblue"}}
                                    variant="outlined"
                                    color="primary"
                                    onClick={handleClickOpen}>
                                    <LogoutIcon fontSize="small"/> &nbsp; Log Out
                                </Button>
                            
                                :
                                <>
                                    <Button
                                        style={{margin: "0 1em 5px 1em", color: "aliceblue", borderColor: "aliceblue"}}
                                        variant="outlined"
                                        color="primary"
                                        component={Link}
                                        to='/login'>
                                        <SensorOccupiedIcon fontSize="small"/> &nbsp; Sign In
                                    </Button>
                                    <Button
                                        style={{margin: "0 0 5px 0", color: "aliceblue", borderColor: "aliceblue"}}
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
                <Dialog
                    open={open}
                    onClose={handleDisagree}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Do you want to sign out?"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            We won't be able to preserve your data for later use if you sign out of Type Racer.
                            <br></br><br></br>
                            Don't want data to be stored. Sign out now!
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleDisagree}>Disagree</Button>
                        <Button onClick={handleAgree} autoFocus>
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>
           </nav>
        </>
    )
}

export default NavigationBar