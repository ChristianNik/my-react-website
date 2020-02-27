import React from 'react';
import Iconbar from './Iconbar';
import Icon from './Icon';

import sidebarStyle from './Sidebar.module.css';
import Logo from './Logo';
import image from '../images/bx-x.svg';

function Sidebar() {
	return (
		<div className={sidebarStyle.Sidebar}>
			<Logo />
			<Iconbar position='center'>
				<Icon src={image} />
				<Icon src={image} />
				<Icon src={image} />
				<Icon src={image} />
			</Iconbar>
			<Iconbar position='end'>
				<Icon src={image} />
				<Icon src={image} />
			</Iconbar>
		</div>
	);
}

export default Sidebar;
