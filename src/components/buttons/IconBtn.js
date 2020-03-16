import React from 'react';

// Style
import style from './IconBtn.module.css';
import Icon from '../icons';

function IconBtn(props) {
	return (
		<div className={style.IconBtn}>
			<Icon name={props.name} fill='#4b7bec' width={22} />
		</div>
	);
}

export default IconBtn;
