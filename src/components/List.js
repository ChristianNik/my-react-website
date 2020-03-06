import React from 'react';
// Components
// Styles
import './List.css';
// Icons
function List(props) {
	return (
		<div className='List'>
			<h3 className='List__title'>{props.title}</h3>
			<ul className='List__list'>
				{props.items
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
