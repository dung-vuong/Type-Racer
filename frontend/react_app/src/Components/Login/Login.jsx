import React from 'react';
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button, Paper, Grid, Container, TextField, IconButton } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from "./LoginStyles.css";

const Login = () => {
    //-------------------------------------------- MUI STYLE --------------------------------------------
    const paper = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1.5em',
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
		console.log(data)
		try {
			const url = "http://localhost:3001/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			// window.location = "/";
			navigate("/typing");
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
        <>
			<IconButton component={Link} to='/' style={{position: 'absolute', marginLeft: '2em'}} color="primary">
				<ArrowBackIcon fontSize="large" color="primary"/>
			</IconButton>
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
									type="password"
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
					<h3 style={{marginTop: "2em"}}>Don't have an account?</h3>
					<Button
						variant="outlined"
						color="primary"
						size="small"
						component={Link}
						to='/signup'>
						Sign Up Now
					</Button>
				</Paper>
			</Container>
		</>
	);
};

export default Login;