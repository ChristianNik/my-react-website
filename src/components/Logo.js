import React from 'react';

import Icon from './Icon';
import logoStyle from './Logo.module.css';
import logo from '../images/Logo 1@2x.png';

function Logo() {
	return (
		<div className={logoStyle.Logo}>
			<Icon src={logo} size={{ h: '30px', w: '30px' }} />
		</div>
	);
}

export default Logo;
