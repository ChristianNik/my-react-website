import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
	const secondaryStyle = {
		border: '1px solid #3DA9FC',
		backgroundColor: 'transparent',
		color: '#3DA9FC',
		padding: '11px 16px',
		textTransform: 'uppercase',
		letterSpacing: '2.14px'
	};

	const defaultStyle = {
		cursor: 'pointer',
		...secondaryStyle
	};

	return <button style={defaultStyle}>{props.title}</button>;
}

export default Button;

Button.propTypes = {
	title: PropTypes.string.isRequired
};
