import React from 'react';
// Components
import LinkGroup from '../Link/LinkGroup';
import LinkItem from '../Link/LinkItem';
// Styles
import sidebarStyle from './Sidebar.module.css';
// Icons
import Icon from '../icons';

function Sidebar() {
	const START_ICON_SIZE = 36;
	const CENTER_ICON_SIZE = 28;
	const END_ICON_SIZE = 24;

	return (
		<nav className={sidebarStyle.Sidebar}>
			<LinkGroup>
				<LinkItem
					to='/'
					text='logo'
					noActiveStyle
					style={{
						fontSize: `${START_ICON_SIZE}px`,
						cursor: 'default',
					}}
				>
					🚧
				</LinkItem>
			</LinkGroup>
			<LinkGroup position='center'>
				<LinkItem to='/' text='home'>
					<Icon name='home' width={CENTER_ICON_SIZE} fill='#707070' />
				</LinkItem>
				<LinkItem to='/about' text='about'>
					<Icon name='user' width={CENTER_ICON_SIZE} fill='#707070' />
				</LinkItem>
				<LinkItem to='/skills' text='skills'>
					<Icon name='cog' width={CENTER_ICON_SIZE} fill='#707070' />
				</LinkItem>
				<LinkItem to='/projects' text='projects'>
					<Icon name='briefcase' width={CENTER_ICON_SIZE} fill='#707070' />
				</LinkItem>
				{/*
				<LinkItem to='/contact' text='contact'>
					<Icon name='envelope' width={CENTER_ICON_SIZE} fill='#707070' />
				</LinkItem>
			*/}
			</LinkGroup>
			<LinkGroup position='flex-end'>
				<LinkItem
					href='https://www.linkedin.com/in/christian-nikel-3537a619b'
					text='linkedin'
				>
					<Icon name='linkedin' width={END_ICON_SIZE} fill='#707070' />
				</LinkItem>
				<LinkItem href='https://github.com/ChristianNik' text='github'>
					<Icon name='github' width={END_ICON_SIZE} fill='#707070' />
				</LinkItem>
			</LinkGroup>
		</nav>
	);
}

export default Sidebar;
