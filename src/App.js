import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import Sidebar from './components/Sidebar';
// Routes
import Home from './Routes/Home';
import About from './Routes/About';
import Skills from './Routes/Skills';
import Contact from './Routes/Contact';
// Styles
import './App.css';
// Icons

function App() {
	return (
		<Router>
			<div className='App'>
				<Sidebar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/about' component={About} />
					<Route path='/skills' component={Skills} />
					<Route path='/contact' component={Contact} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
