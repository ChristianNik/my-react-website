import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import { CSSTransition, TransitionGroup } from 'react-transition-group';
// Components
import Sidebar from './components/Sidebar/Sidebar';
import UnderConstruction from './components/UnderConstruction.style';
// Routes
import Home from './Routes/Home/Home';
import About from './Routes/About/About';
import Skills from './Routes/Skills/Skills';
import Contact from './Routes/Contact/Contact';
import Projects from './Routes/Projects/Projects';
// Styles
import style from './App.module.css';
// Icons

function App() {
	const [showUnderConstruction, setShowUnderConstruction] = useState(true);
	return (
		<Router>
			<UnderConstruction
				visible={showUnderConstruction}
				onClick={() => {
					setShowUnderConstruction(false);
				}}
			/>
			<div className={style.App}>
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
