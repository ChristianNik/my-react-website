import React from 'react';
import PropTypes from 'prop-types';

import iconStyle from './Icon.module.css';

function Icon(props) {
	const imageStyle = {
		width: props.size ? props.size.w : 'auto',
		height: props.size ? props.size.h : 'auto'
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
	size: PropTypes.shape({
		w: PropTypes.string,
		h: PropTypes.string
	})
};
