import React from 'react';
import Iconbar from './Iconbar';

import sidebarStyle from './Sidebar.module.css';
import Logo from './Logo';

function Sidebar() {
	return (
		<div className={sidebarStyle.Sidebar}>
			<Logo />
			<Iconbar position='center' />
			<Iconbar position='end' />
		</div>
	);
}

export default Sidebar;
