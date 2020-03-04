import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Styles
import buttonStyle from './Button.module.css';
// Icons
// Components
function Button(props) {
	switch (props.type) {
		case 'primary':
			return (
				<Link
					to={props.href}
					className={`${buttonStyle.Button} ${buttonStyle.Button__primary}`}
				>
					{props.title}
				</Link>
			);
		case 'secondary':
			return (
				<Link
					className={`${buttonStyle.Button} ${buttonStyle.Button__secondary}`}
				>
					{props.title}
				</Link>
			);
		case 'tertiary':
			return (
				<Link
					className={`${buttonStyle.Button} ${buttonStyle.Button__tertiary}`}
				>
					{props.title}
				</Link>
			);
		default:
			return (
				<Link className={`${buttonStyle.Button} ${buttonStyle.Button}`}>
					{props.title}
				</Link>
			);
	}
}

export default Button;

Button.propTypes = {
	title: PropTypes.string.isRequired
};
