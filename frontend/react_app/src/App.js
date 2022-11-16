import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import LandingPage from './Components/LandingPage/LandingPage';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import TypingPage from './Components/TypingPage/TypingPage';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Leaderboard from './Components/Leaderboard/Leaderboard';
import UserPage from './Components/UserPage/UserPage';

function App() {
    const user = JSON.parse(localStorage.getItem('data'))

	return (
		<BrowserRouter>
			<NavigationBar user={user}/>
			<Routes>
				<Route path="/login" exact element={<Login/>}/>
				<Route path="/signup" exact element={<Signup/>}/>
				<Route path="/typing" exact element={<TypingPage user={user}/>}/>
				<Route path="/leaderboard" exact element={<Leaderboard/>}/>
				<Route path="/user_stats" exact element={<UserPage user={user}/>}/>
				<Route path="/" exact element={<LandingPage/>}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;