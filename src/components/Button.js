import React from 'react';
import PropTypes from 'prop-types';
// Styles
import buttonStyle from './Button.module.css';
// Icons
// Components
function Button(props) {
	switch (props.type) {
		case 'primary':
			return (
				<button
					className={`${buttonStyle.Button} ${buttonStyle.Button__primary}`}
				>
					{props.title}
				</button>
			);
		case 'secondary':
			return (
				<button
					className={`${buttonStyle.Button} ${buttonStyle.Button__secondary}`}
				>
					{props.title}
				</button>
			);
		case 'tertiary':
			return (
				<button
					className={`${buttonStyle.Button} ${buttonStyle.Button__tertiary}`}
				>
					{props.title}
				</button>
			);
		default:
			return (
				<button className={`${buttonStyle.Button} ${buttonStyle.Button}`}>
					{props.title}
				</button>
			);
	}
}

export default Button;

Button.propTypes = {
	title: PropTypes.string.isRequired
};
