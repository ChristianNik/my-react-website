import React from 'react';
import { Link } from 'react-router-dom';
// Components
import Iconbar from './Iconbar';
import Logo from './Logo';
import LinkGroup from './LinkGroup';
import LinkItem from './LinkItem';
// Styles
import sidebarStyle from './Sidebar.module.css';
// Icons
import tmpIcon from '../images/icons/bx-x.svg';
import homeIcon from '../images/icons/bxs-home.svg';
import aboutIcon from '../images/icons/bxs-user.svg';
import skillsIcon from '../images/icons/bxs-cog.svg';
import projectsIcon from '../images/icons/bxs-briefcase.svg';
import kontaktIcon from '../images/icons/bxs-envelope.svg';
import githubIcon from '../images/icons/bxl-github-light.svg';
import linkedinIcon from '../images/icons/bxl-linkedin.svg';
import logoImg from '../images/Logo 1@2x.png';

function Sidebar() {
	return (
		<nav className={sidebarStyle.Sidebar}>
			<LinkGroup>
				<LinkItem
					to='/'
					icon={logoImg}
					iconWidth='32px'
					iconHeight='32px'
					text='logo'
					noActiveStyle
				/>
			</LinkGroup>
			<LinkGroup position='center'>
				<LinkItem to='/' icon={homeIcon} text='home' />
				<LinkItem to='/about' icon={aboutIcon} text='about' />
				<LinkItem to='/skills' icon={skillsIcon} text='skills' />
				<LinkItem to='/projects' icon={projectsIcon} text='projects' />
				<LinkItem to='/contact' icon={kontaktIcon} text='contact' />
			</LinkGroup>
			<LinkGroup position='end'>
				<LinkItem
					to='/'
					icon={linkedinIcon}
					text='linkedin'
					iconWidth='18px'
					iconHeight='18px'
					noActiveStyle
				/>
				<LinkItem
					to='/about'
					icon={githubIcon}
					text='github'
					iconWidth='18px'
					iconHeight='18px'
					noActiveStyle
				/>
			</LinkGroup>
		</nav>
	);
}

export default Sidebar;
