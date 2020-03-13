import React from 'react';
// Style
import style from './IconWithText.module.css';
// Components
import Icon from './icons';

function IconWithText({
	name = '',
	text = '',
	fill = '#717171',
	width = 32,
	flow
}) {
	const flowDirection =
		flow === 'row' ? style.IconWithText__row : style.IconWithText__column;
	return (
		<div className={`${style.IconWithText} ${flowDirection}`}>
			<Icon name={name} fill={fill} width={width} />
			<p className={style.IconWithText__text}>{text}</p>
		</div>
	);
}

export default IconWithText;
