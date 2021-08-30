import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
// Components

// Styles
import linkItemStyle from './LinkItem.module.css';
// Icons

function LinkItem(props) {
	return (
		<li className={linkItemStyle.LinkItem} style={props.style}>
			{props.href ? (
				<a
					className={linkItemStyle.LinkItem__link}
					target='_blank'
					rel='noopener noreferrer'
					href={props.href}
				>
					{props.children}
				</a>
			) : (
				<NavLink
					exact
					activeClassName={
						props.noActiveStyle ? '' : linkItemStyle.LinkItem__link__active
					}
					className={linkItemStyle.LinkItem__link}
					to={props.to}
				>
					{props.children || props.text}
				</NavLink>
			)}
		</li>
	);
}

export default LinkItem;

LinkItem.propTypes = {
	to: PropTypes.string,
	icon: PropTypes.string,
	iconWidth: PropTypes.string,
	iconHeight: PropTypes.string,
	text: PropTypes.string,
	noActiveStyle: PropTypes.bool,
	noHoverStyle: PropTypes.bool,
};
