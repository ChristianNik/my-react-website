import React from 'react';
// Style
import style from './LinkGroup.module.css';
function LinkGroup(props) {
	return (
		<ul
			className={style.LinkGroup}
			style={{
				justifyContent: props.position || 'flex-start'
			}}
		>
			{props.children}
		</ul>
	);
}

export default LinkGroup;
