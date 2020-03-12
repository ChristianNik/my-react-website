import React from 'react';
// Syles
import style from './index.module.css';
// Icons
import Placeholder from './Placeholder';
import Logo from './Logo';
import Home from './Home';
import User from './User';
import Cog from './Cog';
import Envelope from './Envelope';
import Briefcase from './Briefcase';
import Github from './Github';
import Linkedin from './Linkedin';
import Run from './Run';
import Laptop from './Laptop';
import Server from './Server';
import Dots from './Dots';

const Icon = props => {
	switch (props.name) {
		case 'home':
			return <Home className={style.Icon} {...props} />;
		case 'user':
			return <User {...props} />;
		case 'cog':
			return <Cog {...props} />;
		case 'envelope':
			return <Envelope {...props} />;
		case 'briefcase':
			return <Briefcase {...props} />;
		case 'logo':
			return <Logo {...props} />;
		case 'linkedin':
			return <Linkedin {...props} />;
		case 'github':
			return <Github {...props} />;
		case 'run':
			return <Run {...props} />;
		case 'laptop':
			return <Laptop {...props} />;
		case 'server':
			return <Server {...props} />;
		case 'dots':
			return <Dots {...props} />;
		default:
			return <Placeholder {...props} />;
	}
};

export default Icon;
