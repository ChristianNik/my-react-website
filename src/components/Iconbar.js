import React from 'react';
import Icon from './Icon';

import iconbarStyle from './Iconbar.module.css';

function Iconbar(props) {
	const styleOverwrite = {
		alignSelf: props.position ? props.position : ''
	};

	return (
		<div
			className={iconbarStyle.Iconbar}
			style={styleOverwrite ? styleOverwrite : ''}
		>
			<Icon />
			<Icon />
			<Icon />
		</div>
	);
}

export default Iconbar;
