import React from 'react';
import iconStyle from './Icon.module.css';

function Icon(props) {
	console.log(props.size);

	const imageStyle = {
		width: props.size ? props.size.w : '',
		height: props.size ? props.size.h : '10px'
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
