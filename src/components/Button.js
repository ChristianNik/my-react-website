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
			return props.href ? (
				<a
					target='_blank'
					href={props.href}
					className={`${buttonStyle.Button} ${buttonStyle.Button__primary}`}
				>
					{props.title}
				</a>
			) : (
				<Link
					to={props.href || ''}
					className={`${buttonStyle.Button} ${buttonStyle.Button__primary}`}
				>
					{props.title}
				</Link>
			);

		case 'secondary':
			return props.href ? (
				<a
					target='_blank'
					href={props.href}
					className={`${buttonStyle.Button} ${buttonStyle.Button__secondary}`}
				>
					{props.title}
				</a>
			) : (
				<Link
					to={props.href || ''}
					className={`${buttonStyle.Button} ${buttonStyle.Button__secondary}`}
				>
					{props.title}
				</Link>
			);
		case 'tertiary':
			return props.href ? (
				<a
					target='_blank'
					href={props.href}
					className={`${buttonStyle.Button} ${buttonStyle.Button__tertiary}`}
				>
					{props.title}
				</a>
			) : (
				<Link
					to={props.href || ''}
					className={`${buttonStyle.Button} ${buttonStyle.Button__tertiary}`}
				>
					{props.title}
				</Link>
			);
		default:
			return props.href ? (
				<a
					target='_blank'
					href={props.href}
					className={`${buttonStyle.Button} ${buttonStyle.Button__primary}`}
				>
					{props.title}
				</a>
			) : (
				<Link
					to={props.href || ''}
					className={`${buttonStyle.Button} ${buttonStyle.Button}`}
				>
					{props.title}
				</Link>
			);
	}
}

export default Button;

Button.propTypes = {
	title: PropTypes.string.isRequired
};
