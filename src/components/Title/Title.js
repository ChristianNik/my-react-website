import React from 'react';
import style from './Title.module.css';

function Title(props) {
	function selectClassNames(init = []) {
		const classNamesList = init;
		if (props.className) {
			classNamesList.push(props.className);
		}
		if (props.uppercase) {
			classNamesList.push(style.Title__uppercase);
		}

		return classNamesList;
	}

	const classNames = selectClassNames([style.Title]).join(' ');
	return <h1 className={classNames}>{props.children}</h1>;
}

export default Title;
