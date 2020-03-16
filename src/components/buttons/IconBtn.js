import React from 'react';

// Style
import style from './IconBtn.module.css';

function IconBtn() {
	return (
		<div>
			<IconBtn
				className={style.IconBtn}
				name='github'
				fill='#4b7bec'
				width={22}
			/>
		</div>
	);
}

export default IconBtn;
