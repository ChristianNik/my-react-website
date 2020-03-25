import React from 'react';
import style from './LinkGroup.module.css';

function LinkGroup(props) {
	const styleOverwrite = {
		justifyContent: props.position ? props.position : ''
	};
	return (
		<ul className={style.LinkGroup} style={styleOverwrite || ''}>
			{props.children}
		</ul>
	);
}

export default LinkGroup;
