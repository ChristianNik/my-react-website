import React from 'react';

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
			{props.children}
		</div>
	);
}

export default Iconbar;
