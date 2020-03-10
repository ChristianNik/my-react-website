import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Styles
import style from './Button.module.css';
// Icons
// Components

function Button(props) {
	let nameOfClass = '';
	switch (props.type) {
		case 'primary':
			nameOfClass = style.Button__primary;
			break;
		case 'secondary':
			nameOfClass = style.Button__secondary;
			break;
		case 'tertiary':
			nameOfClass = style.Button__tertiary;
			break;
		default:
			break;
	}
	return props.href ? (
		<a
			target='_blank'
			href={props.href}
			rel='noopener noreferrer'
			className={`${style.Button} ${nameOfClass}`}
		>
			{props.text}
		</a>
	) : (
		<Link to={props.to || ''} className={`${style.Button} ${nameOfClass}`}>
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
