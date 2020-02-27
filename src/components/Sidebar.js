import React from 'react';
import Iconbar from './Iconbar';
import Icon from './Icon';

import sidebarStyle from './Sidebar.module.css';
import Logo from './Logo';
import image from '../images/bx-x.svg';
import { Link } from 'react-router-dom';

function Sidebar() {
	return (
		<div className={sidebarStyle.Sidebar}>
			<Logo />
			<Iconbar position='center'>
				<ul>
					<li>
						<Link to='/'>
							<Icon src={image} />
						</Link>
					</li>
					<li>
						<Link to='/about'>
							<Icon src={image} />
						</Link>
					</li>
				</ul>
			</Iconbar>
			<Iconbar position='end'>
				<Icon src={image} />
				<Icon src={image} />
			</Iconbar>
		</div>
	);
}

export default Sidebar;
