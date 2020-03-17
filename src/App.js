import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// Components
import Sidebar from './components/Sidebar';
// Routes
import Home from './Routes/Home';
import About from './Routes/About';
import Skills from './Routes/Skills';
import Contact from './Routes/Contact';
import Projects from './Routes/Projects';
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
				{/*
				<Route
					render={({ location }) => (
						<TransitionGroup>
							<CSSTransition key={location.key} timeout={300} classNames='fade'>
								<Switch location={location}>
									<Route exact path='/' component={Home} />
									<Route path='/about' component={About} />
									<Route path='/skills' component={Skills} />
									<Route path='/contact' component={Contact} />
									<Route path='/projects' component={Projects} />
								</Switch>
							</CSSTransition>
						</TransitionGroup>
					)} 
				/>
				*/}
			</div>
		</Router>
	);
}

export default App;
