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
		switch (props.type) {
			case 'primary':
				classNamesList.push(style.Button__primary);
				break;
			case 'secondary':
				classNamesList.push(style.Button__secondary);
				break;
			case 'tertiary':
				classNamesList.push(style.Button__tertiary);
				break;
			default:
				break;
		}
		if (props.className) {
			classNamesList.push(props.className);
		}
		if (props.uppercase) {
			classNamesList.push(style.Text__uppercase);
		}
		return classNamesList;
	}

	const classNames = selectClassNames([style.Button]).join(' ');

	return props.href ? (
		<a
			target='_blank'
			href={props.href}
			rel='noopener noreferrer'
			className={classNames}
		>
			{props.children}
		</a>
	) : (
		<Link to={props.to || ''} className={classNames}>
			{props.children}
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
