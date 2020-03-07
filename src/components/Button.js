import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Styles
import buttonStyle from './Button.module.css';
// Icons
// Components

function Button(props) {
	let nameOfClass = '';
	switch (props.type) {
		case 'primary':
			nameOfClass = buttonStyle.Button__primary;
			break;
		case 'secondary':
			nameOfClass = buttonStyle.Button__secondary;
			break;
		case 'tertiary':
			nameOfClass = buttonStyle.Button__tertiary;
			break;
	}
	return props.href ? (
		<a
			target='_blank'
			href={props.href}
			className={`${buttonStyle.Button} ${nameOfClass}`}
		>
			{props.text}
		</a>
	) : (
		<Link
			to={props.to || ''}
			className={`${buttonStyle.Button} ${nameOfClass}`}
		>
			{props.text}
		</Link>
	);
}

export default Button;

Button.propTypes = {
	type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']).isRequired,
	href: PropTypes.string,
	to: PropTypes.string,
	text: PropTypes.string
};
