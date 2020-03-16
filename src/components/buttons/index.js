import React from 'react';
// Components
import IconBtn from './IconBtn.js';

const Button = props => {
	switch (props.type) {
		case 'icon':
			return <IconBtn {...props} />;
		default:
			return <button></button>;
	}
};

export default Button;
