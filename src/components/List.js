import React from 'react';
import PropTypes from 'prop-types';
// Components
// Styles
import './List.css';
// Icons
function List(props) {
	return (
		<div className='List'>
			<h3 className='List__title'>{props.title}</h3>
			<ul
				className='List__list'
				style={{
					display: 'grid',
					gridAutoFlow: props.flow || '',
					gridGap: props.gab || ''
				}}
			>
				{props.children.length > 1
					? props.children
						? props.children.map(item => {
								return <li key={Math.random()}>{item}</li>;
						  })
						: ''
					: props.children}
			</ul>
		</div>
	);
}

export default List;

List.propType = {
	title: PropTypes.string,
	flow: PropTypes.oneOf(['row', 'column']),
	gab: PropTypes.number
};
