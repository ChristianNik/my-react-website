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
import logoImg from '../images/Logo 1@2x.png';
import {
	HomeIcon,
	AboutIcon,
	SkillsIcon,
	ProjectsIcon,
	ContactIcon,
	LinkedInIcon,
	GithubIcon,
	LogoIcon
} from '../components/Icons';

function Sidebar() {
	return (
		<nav className={sidebarStyle.Sidebar}>
			<LinkGroup>
				<LinkItem to='/' text='logo' noActiveStyle>
					<LogoIcon width={32} />
				</LinkItem>
			</LinkGroup>
			<LinkGroup position='center'>
				<LinkItem to='/' text='home'>
					<HomeIcon fill='#707070' />
				</LinkItem>
				<LinkItem to='/about' text='about'>
					<AboutIcon fill='#707070' />
				</LinkItem>
				<LinkItem to='/skills' text='skills'>
					<SkillsIcon fill='#707070' />
				</LinkItem>
				<LinkItem to='/projects' text='projects'>
					<ProjectsIcon fill='#707070' />
				</LinkItem>
				<LinkItem to='/contact' text='contact'>
					<ContactIcon fill='#707070' />
				</LinkItem>
			</LinkGroup>
			<LinkGroup position='end'>
				<LinkItem to='/' text='linkedin' noActiveStyle>
					<LinkedInIcon width={20} fill='#707070' />
				</LinkItem>
				<LinkItem to='/about' text='github' noActiveStyle>
					<GithubIcon width={20} fill='#707070' />
				</LinkItem>
			</LinkGroup>
		</nav>
	);
}

export default Sidebar;
