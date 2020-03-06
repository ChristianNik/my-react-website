import React from 'react';
// Components
import { AboutIcon } from './Icons';
// Styles
import iconWithTextStyle from './IconWithText.module.css';
// Icons
function IconWithText(props) {
	return (
		<div className={iconWithTextStyle.IconWithText}>
			<AboutIcon fill='#717171' />
			<p className={iconWithTextStyle.IconWithText__text}>{props.text}</p>
		</div>
	);
}

export default IconWithText;
