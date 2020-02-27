import React from 'react';
import Icon from './Icon';

import iconbarStyle from './Iconbar.module.css';

import moduleName from '../images/bx-x.svg';

function Iconbar(props) {
	const styleOverwrite = {
		alignSelf: props.position ? props.position : ''
	};

	return (
		<div
			className={iconbarStyle.Iconbar}
			style={styleOverwrite ? styleOverwrite : ''}
		>
			<Icon src={moduleName} />
			<Icon src={moduleName} />
			<Icon src={moduleName} />
		</div>
	);
}

export default Iconbar;
