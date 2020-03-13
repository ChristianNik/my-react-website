import React from 'react';
import PropTypes from 'prop-types';
// Components
// Styles
import style from './List.module.css';
// Icons
function List(props) {
	const flowDirection = props.flow
		? props.flow === 'row'
			? style.List__list__row
			: style.List__list__column
		: '';

	console.log(flowDirection);
	return (
		<div className={`List ${props.className || ''}`}>
			<div className={style.List__icon}>{props.icon}</div>
			<h3 className={style.List__title}>{props.title}</h3>
			<ul
				className={`${style.List__list} ${flowDirection} `}
				style={{ gap: props.gap || '' }}
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
								<li className={style.List__list__item} key={Math.random()}>
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
