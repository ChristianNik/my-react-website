import React from 'react';
// Syles
import style from './index.module.css';
// Icons
import Home from './Home';
import User from './User';
import Cog from './Cog';
import Envelope from './Envelope';
import Briefcase from './Briefcase';

const Icon = props => {
	switch (props.name) {
		case 'home':
			return <Home className={style.Icon} {...props} />;
		case 'user':
			return <User {...props} />;
		case 'settings':
			return <Cog {...props} />;
		case 'envelope':
			return <Envelope {...props} />;
		case 'briefcase':
			return <Briefcase {...props} />;
		default:
			return;
	}
};

export default Icon;
