import React from 'react';
import { Link } from 'react-router-dom';
// Components
import Iconbar from './Iconbar';
import Icon from './Icon';
import Logo from './Logo';
// Styles
import sidebarStyle from './Sidebar.module.css';
// Icons
import tmpIcon from '../images/icons/bx-x.svg';
import homeIcon from '../images/icons/bxs-home.svg';
import aboutIcon from '../images/icons/bxs-user.svg';
import skillsIcon from '../images/icons/bxs-cog.svg';
import kontaktIcon from '../images/icons/bxs-envelope.svg';
import githubIcon from '../images/icons/bxl-github-light.svg';
import linkedinIcon from '../images/icons/bxl-linkedin.svg';

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
							<Icon src={linkedinIcon} width='16px' height='16px' />
						</Link>
					</li>
					<li>
						<Link to='/about'>
							<Icon src={githubIcon} width='16px' height='16px' />
						</Link>
					</li>
				</ul>
			</Iconbar>
		</div>
	);
}

export default Sidebar;
