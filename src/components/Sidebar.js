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
	const START_ICON_SIZE = 36;
	const CENTER_ICON_SIZE = 28;
	const END_ICON_SIZE = 18;

	return (
		<nav className={sidebarStyle.Sidebar}>
			<LinkGroup>
				<LinkItem to='/' text='logo' noActiveStyle>
					<LogoIcon width={START_ICON_SIZE} />
				</LinkItem>
			</LinkGroup>
			<LinkGroup position='center'>
				<LinkItem to='/' text='home'>
					<HomeIcon width={CENTER_ICON_SIZE} fill='#707070' />
				</LinkItem>
				<LinkItem to='/about' text='about'>
					<AboutIcon width={CENTER_ICON_SIZE} fill='#707070' />
				</LinkItem>
				<LinkItem to='/skills' text='skills'>
					<SkillsIcon width={CENTER_ICON_SIZE} fill='#707070' />
				</LinkItem>
				<LinkItem to='/projects' text='projects'>
					<ProjectsIcon width={CENTER_ICON_SIZE} fill='#707070' />
				</LinkItem>
				<LinkItem to='/contact' text='contact'>
					<ContactIcon width={CENTER_ICON_SIZE} fill='#707070' />
				</LinkItem>
			</LinkGroup>
			<LinkGroup position='end'>
				<LinkItem
					href='https://www.linkedin.com/in/christian-nikel-3537a619b'
					text='linkedin'
				>
					<LinkedInIcon width={END_ICON_SIZE} fill='#707070' />
				</LinkItem>
				<LinkItem href='https://github.com/ChristianNik' text='github'>
					<GithubIcon width={END_ICON_SIZE} fill='#707070' />
				</LinkItem>
			</LinkGroup>
		</nav>
	);
}

export default Sidebar;
