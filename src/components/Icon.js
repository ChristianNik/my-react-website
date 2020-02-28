import React from 'react';
import PropTypes from 'prop-types';

import iconStyle from './Icon.module.css';

function Icon(props) {
	const imageStyle = {
		width: props.width ? props.width : 'auto',
		height: props.height ? props.height : 'auto'
	};

	return (
		<div className={iconStyle.Icon}>
			<img
				className={iconStyle.Icon}
				src={props.src ? props.src : ''}
				style={imageStyle}
				alt=''
			/>
		</div>
	);
}

export default Icon;

Icon.propTypes = {
	src: PropTypes.string.isRequired,
	width: PropTypes.string,
	height: PropTypes.string
};
