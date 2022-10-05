import React from 'react';
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button, Paper, Grid, Container, TextField } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import styles from "./LoginStyles.css";

const Login = () => {
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
		email: "", 
		password: "" 
	});
	const [error, setError] = useState("");
	
	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// try {
		// 	const url = "http://localhost:8080/api/auth";
		// 	const { data: res } = await axios.post(url, data);
		navigate("/typing");
		// 	localStorage.setItem("token", res.data);
		// 	window.location = "/";
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
				<LoginIcon fontSize="large" color="primary"/>
                <h1 style={{color: "#1976d2", marginBottom: "1em"}}>Login Account</h1>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                name="email"
                                label="Email"
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
                    <Button style={{marginTop: "1em"}} type='submit' variant="contained" color="primary" fullWidth>Sign In</Button>
                </form>
                <h3>Don't have an account?</h3>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    component={Link}
                    to='/signup'>
                    Sign Up
                </Button>
            </Paper>
        </Container>
	);
};

export default Login;