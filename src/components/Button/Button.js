import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Styles
import style from './Button.module.css';
// Icons
// Components

function Button(props) {
	function selectClassNames(init = []) {
		const classNamesList = init;

		const switchStyle = {
			primary: () => {
				return classNamesList.push(style.Button__primary);
			},
			secondary: () => {
				return classNamesList.push(style.Button__secondary);
			},
			tertiary: () => {
				return classNamesList.push(style.Button__tertiary);
			}
		};
		// Set Button Styles - Switch
		if (props.type) switchStyle[props.type]();
		if (props.className) classNamesList.push(props.className);
		if (props.uppercase) classNamesList.push(style.Button__uppercase);
		if (props.rounded) classNamesList.push(style.Button__rounded);

		return classNamesList;
	}

	const classNames = selectClassNames([style.Button]).join(' ');

	if (props.href) {
		return (
			<a
				target='_blank'
				href={props.href}
				rel='noopener noreferrer'
				className={classNames}
			>
				{props.children}
			</a>
		);
	} else if (props.onClick) {
		return (
			<button className={classNames} onClick={props.onClick}>
				{props.children}
			</button>
		);
	} else {
		return (
			<Link to={props.to || ''} className={classNames}>
				{props.children}
			</Link>
		);
	}
}

export default Button;

Button.propTypes = {
	type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']).isRequired,
	href: PropTypes.string,
	to: PropTypes.string,
	text: PropTypes.string
};
