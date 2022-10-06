import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import LandingPage from './Components/LandingPage/LandingPage';
import Authentication from "./Components/Authentication/Authentication";
import TypingPage from './Components/TypingPage/TypingPage';

function App() {
	return (
		<BrowserRouter>
			<nav>
                <ul>
                    <li>TypeRacer</li>
                    <li>Home</li>
                    <li>Type</li>
                    <li>About</li>
                    <li>Login</li>
                 </ul>
             </nav>
			 <hr></hr>
			<Routes>
				<Route path="/auth" exact element={<Authentication/>}/>
				<Route path="/typing" exact element={<TypingPage/>}/>
				<Route path="/" exact element={<LandingPage/>}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;