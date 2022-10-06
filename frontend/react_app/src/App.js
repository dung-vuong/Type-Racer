import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import LandingPage from './Components/LandingPage/LandingPage';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import TypingPage from './Components/TypingPage/TypingPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" exact element={<Login/>}/>
				<Route path="/signup" exact element={<Signup/>}/>
				<Route path="/typing" exact element={<TypingPage/>}/>
				<Route path="/" exact element={<LandingPage/>}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;