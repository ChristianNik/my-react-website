import React from 'react';

function ListGroup(props) {
	return (
		<div
			style={{
				width: props.width || '100%',
				display: 'flex',
				justifyContent: 'space-between'
			}}
			className='ListGroup'
		>
			{props.children}
		</div>
	);
}

export default ListGroup;
