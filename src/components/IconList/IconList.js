import React from 'react';
import Proptypes from 'prop-types';
import style from './IconList.module.css';
import IconWithText from '../IconWithText/IconWithText';

function IconList(props) {
	function selectClassNames(init = []) {
		const classNamesList = init;
		if (props.className) {
			classNamesList.push(props.className);
		}
		return classNamesList;
	}

	const classNames = selectClassNames([style.IconList]).join(' ');
	return (
		<div className={classNames}>
			<h2 style={{ color: props.color || '' }}>{props.caption}</h2>
			<div className={style.IconList__Container}>
				{props.content
					? props.content.map(item => {
							return (
								<IconWithText
									name={item.icon}
									text={item.text}
									fill={item.fill}
								/>
							);
					  })
					: ''}
			</div>
		</div>
	);
}

export default IconList;

IconList.prototype = {
	caption: Proptypes.string,
	className: Proptypes.string,
	color: Proptypes.string,
	content: Proptypes.shape({
		text: Proptypes.string,
		icon: Proptypes.string,
		fill: Proptypes.string
	})
};
