import React from 'react';
import iconStyle from './Icon.module.css';

function Icon(props) {
	const styleOverwrite = {};

	return (
		<div className={iconStyle.Icon} style={styleOverwrite}>
			<img className={iconStyle.Icon} src={props.src ? props.src : ''} alt='' />
		</div>
	);
}

export default Icon;
