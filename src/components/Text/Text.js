import React from 'react';
import style from './Text.module.css';

function Text(props) {
	function selectClassNames(init = []) {
		const classNamesList = init;
		if (props.className) {
			classNamesList.push(props.className);
		}
		if (props.uppercase) {
			classNamesList.push(style.Text__uppercase);
		}
		return classNamesList;
	}

	const classNames = selectClassNames([style.Text]).join(' ');
	return <p className={classNames}>{props.children}</p>;
}

export default Text;
