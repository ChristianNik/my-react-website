import React from 'react';
import style from './Page.module.css';

function Page(props) {
	const classNames = [style.Page, props.className].join(' ');
	return <div className={classNames}>{props.children}</div>;
}

export default Page;
