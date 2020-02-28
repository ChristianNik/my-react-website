import React from 'react';
import { Link } from 'react-router-dom';
// Components
import Iconbar from './Iconbar';
import Icon from './Icon';
import Logo from './Logo';
// Styles
import sidebarStyle from './Sidebar.module.css';
// Icons
import tmpIcon from '../icons/bx-x.svg';
import homeIcon from '../icons/bxs-home.svg';
import aboutIcon from '../icons/bxs-user.svg';
import skillsIcon from '../icons/bxs-cog.svg';
import kontaktIcon from '../icons/bxs-envelope.svg';

function Sidebar() {
	return (
		<div className={sidebarStyle.Sidebar}>
			<Logo />
			<Iconbar position='center'>
				<ul>
					<li>
						<Link to='/'>
							<Icon src={homeIcon} width='30px' height='30px' />
						</Link>
					</li>
					<li>
						<Link to='/about'>
							<Icon src={aboutIcon} width='30px' height='30px' />
						</Link>
					</li>
					<li>
						<Link to='/skills'>
							<Icon src={skillsIcon} width='30px' height='30px' />
						</Link>
					</li>
					<li>
						<Link to='/contact'>
							<Icon src={kontaktIcon} width='30px' height='30px' />
						</Link>
					</li>
				</ul>
			</Iconbar>
			<Iconbar position='end'>
				<ul>
					<li>
						<Link to='/'>
							<Icon src={tmpIcon} />
						</Link>
					</li>
					<li>
						<Link to='/about'>
							<Icon src={tmpIcon} />
						</Link>
					</li>
				</ul>
			</Iconbar>
		</div>
	);
}

export default Sidebar;
