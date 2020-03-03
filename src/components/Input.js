import React from 'react';
import PropTypes from 'prop-types';
// Styles
import './Input.css';
// Icons
// Components

function Input(props) {
	return (
		<div className='Input__Container'>
			<h3>{props.title}</h3>
			<input
				className='Input'
				type='text'
				placeholder={props.placeholder ? props.placeholder : props.title}
			/>
		</div>
	);
}

export default Input;

Input.propTypes = {
	title: PropTypes.string.isRequired,
	placeholder: PropTypes.string
};
