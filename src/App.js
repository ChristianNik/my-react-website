import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import './App.css';
import Home from './Routes/Home';
import About from './Routes/About';

function App() {
	return (
		<Router>
			<div className='App'>
				<Sidebar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/about' component={About} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
