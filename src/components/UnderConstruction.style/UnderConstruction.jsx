import React, { useEffect, useState } from 'react';
import './UnderConstruction.style.css';
import animation from '../../scss/animation.module.css';
import Title from '../Title/Title';
import Button from '../Button/Button';

const UnderConstruction = (props) => {
	const [visible, setVisible] = useState(props.visible);
	// if (!props.visible) {
	// 	return null;
	// }

	useEffect(() => {
		if (!props.visible) {
			setTimeout(() => {
				setVisible(false);
			}, 1000);
		}
	}, [props.visible]);

	return visible ? (
		<div className={`UnderConstruction ${!props.visible ? 'close' : ''}`}>
			<Title className='Title'>
				<span role='img' aria-label='hand' className={animation['grow-shrink']}>
					🚧
				</span>
				Under construction
				<span role='img' aria-label='hand' className={animation['grow-shrink']}>
					🚧
				</span>
			</Title>
			<div className='Actions'>
				<Button type='tertiary' onClick={props.onClick}>
					Ok, weiter
				</Button>
			</div>
		</div>
	) : null;
};

export default UnderConstruction;
