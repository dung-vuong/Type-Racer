import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import LandingPage from './Components/LandingPage/LandingPage';
import Authentication from "./Components/Authentication/Authentication";
import TypingPage from './Components/TypingPage/TypingPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" exact element={<LandingPage/>}/>
				<Route path="/auth" exact element={<Authentication/>}/>
				<Route path="/typing" exact element={<TypingPage/>}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;