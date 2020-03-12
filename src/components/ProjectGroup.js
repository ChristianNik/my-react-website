import React from 'react';

function ProjectGroup(props) {
	return (
		<div
			style={{
				display: 'grid',
				gridAutoFlow: 'column',
				gridGap: '15px'
			}}
			className={props.className}
		>
			{props.children}
		</div>
	);
}

export default ProjectGroup;
