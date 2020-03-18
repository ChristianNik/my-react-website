import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import { CSSTransition, TransitionGroup } from 'react-transition-group';
// Components
import Sidebar from './components/Sidebar/Sidebar';
// Routes
import Home from './Routes/Home/Home';
import About from './Routes/About/About';
import Skills from './Routes/Skills/Skills';
import Contact from './Routes/Contact/Contact';
import Projects from './Routes/Projects/Projects';
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
					<Route path='/projects' component={Projects} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
