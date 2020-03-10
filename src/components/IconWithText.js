import React from 'react';
// Style
import style from './IconWithText.module.css';
// Components
import Icon from './icons';

function IconWithText({ name = '', text = '', fill = '#717171', width = 32 }) {
	return (
		<div className={style.IconWithText}>
			<Icon name={name} fill={fill} width={width} />
			<p>{text}</p>
		</div>
	);
}

export default IconWithText;
