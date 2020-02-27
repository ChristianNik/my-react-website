import React from 'react';

import logoStyle from './Logo.module.css';

import logo from '../images/Logo 1@2x.png';

function Logo() {
	return (
		<div className={logoStyle.Logo}>
			<img className={logoStyle.Logo__Container} src={logo} alt='' />
		</div>
	);
}

export default Logo;
