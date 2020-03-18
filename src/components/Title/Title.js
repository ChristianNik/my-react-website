import React from 'react';
import style from './Title.module.css';

function Title(props) {
	function selectClassNames(init) {
		const classNamesList = init;
		if (props.uppercase) {
			classNamesList.push(style.Title__uppercase);
		}
		if (props.small) {
			classNamesList.push(style.Title__small);
		} else if (props.medium) {
			classNamesList.push(style.Title__medium);
		} else if (props.large) {
			classNamesList.push(style.Title__large);
		}
		return classNamesList;
	}

	const classNames = selectClassNames([style.Title]).join(' ');
	return <h1 className={classNames}>{props.children}</h1>;
}

export default Title;
