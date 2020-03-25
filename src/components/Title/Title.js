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
		if (props.centered) {
			classNamesList.push(style.Title__centered);
		}
		if (props.light) {
			classNamesList.push(style.Title__light);
		}
		if (props.regular) {
			classNamesList.push(style.Title__regular);
		}
		if (props.bold) {
			classNamesList.push(style.Title__bold);
		}
		return classNamesList;
	}

	const classNames = selectClassNames([style.Title]).join(' ');
	return <h1 className={classNames}>{props.children}</h1>;
}

export default Title;
