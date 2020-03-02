import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
// Components
import Icon from './Icon';
// Styles
import linkItemStyle from './LinkItem.module.css';
// Icons

function LinkItem(props) {
	return (
		<li className={linkItemStyle.LinkItem}>
			<NavLink
				exact
				activeClassName={
					props.noActiveStyle ? '' : linkItemStyle.LinkItem__link__active
				}
				className={linkItemStyle.LinkItem__link}
				to={props.to}
			>
				{props.icon ? (
					<Icon
						src={props.icon}
						width={props.iconWidth ? props.iconWidth : '28px'}
						height={props.iconHeight ? props.iconHeight : '28px'}
					/>
				) : (
					props.text
				)}
			</NavLink>
		</li>
	);
}

export default LinkItem;

LinkItem.propTypes = {
	to: PropTypes.string.isRequired,
	icon: PropTypes.string,
	iconWidth: PropTypes.string,
	iconHeight: PropTypes.string,
	text: PropTypes.string,
	noActiveStyle: PropTypes.bool,
	noHoverStyle: PropTypes.bool
};
