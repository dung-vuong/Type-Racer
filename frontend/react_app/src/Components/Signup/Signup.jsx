import React from 'react';
import { useState } from "react";
import axios from "axios";
import { Button, Paper, Grid, Container, TextField } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import styles from "./SignupStyles.css";
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';

const Signup = () => {

    //-------------------------------------------- MUI STYLE --------------------------------------------
    const paper = {
        marginTop: '4em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2em',
    }   
    //-------------------------------------------- MUI STYLE --------------------------------------------

	const navigate = useNavigate();
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});

	const [error, setError] = useState("");
    
	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
        console.log(data)
		// try {
		// 	const url = "http://localhost:8080/api/users";
		// 	const { data: res } = await axios.post(url, data);
		navigate("/login");
		// 	console.log(res.message);
		// } catch (error) {
		// 	if (
		// 		error.response &&
		// 		error.response.status >= 400 &&
		// 		error.response.status <= 500
		// 	) {
		// 		setError(error.response.data.message);
		// 	}
		// }
	};

	return (
        <Container component='main' maxWidth='xs'>
            <Paper style={paper} elevation={3}>
                <SensorOccupiedIcon fontSize="large" color="primary"/>
                <h1 style={{color: "#1976d2", marginBottom: "1em"}}>Create Account</h1>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                name="firstName"
                                label="First Name"
                                type="text"
                                variant="outlined"
                                required
                                fullWidth
                                onChange={handleChange}
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="lastName"
                                label="Last Name"
                                type="text"
                                variant="outlined"
                                required
                                fullWidth
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="email"
                                label="Email"
                                type="text"
                                variant="outlined"
                                required
                                fullWidth
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="password"
                                label="Password"
                                type="text"
                                variant="outlined"
                                required
                                fullWidth
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                    {error && <div className={styles.error_msg}>{error}</div>}
                    <Button style={{marginTop: "1em"}} type='submit' variant="contained" color="primary" fullWidth>Sign Up</Button>
                </form>
                <h3>Already have an account?</h3>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    component={Link}
                    to='/login'>
                    Sign In
                </Button>
            </Paper>
        </Container>
	);
};

export default Signup;