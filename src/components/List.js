import React from 'react';
import PropTypes from 'prop-types';
// Components
// Styles
import './List.css';
// Icons
function List(props) {
	return (
		<div className={`List ${props.className || ''}`}>
			<h3 className='List__title'>{props.title}</h3>
			<ul
				className='List__list'
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					flexDirection: props.items ? 'column' : 'row'
				}}
			>
				{props.children
					? props.children.length > 1
						? props.children
							? props.children.map(item => {
									return <li key={Math.random()}>{item}</li>;
							  })
							: ''
						: props.children
					: props.items
					? props.items.map(item => {
							return (
								<li className='List__list__item' key={Math.random()}>
									{item}
								</li>
							);
					  })
					: ''}
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
