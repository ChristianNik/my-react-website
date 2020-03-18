import React from 'react';
import style from './Text.module.css';

function Text(props) {
	function selectClassNames(init) {
		const classNamesList = init;
		if (props.uppercase) {
			classNamesList.push(style.Text__uppercase);
		}
		if (props.small) {
			classNamesList.push(style.Text__small);
		} else if (props.medium) {
			classNamesList.push(style.Text__medium);
		} else if (props.large) {
			classNamesList.push(style.Text__large);
		}
		return classNamesList;
	}

	const classNames = selectClassNames([style.Text]).join(' ');
	return <p className={classNames}>{props.children}</p>;
}

export default Text;
