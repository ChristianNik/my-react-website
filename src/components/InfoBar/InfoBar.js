import React, { useState } from 'react';
// Styles
import style from './InfoBar.module.css';
import IconBtn from '../IconBtn/IconBtn';
import Button from '../Button/Button';

function InfoBar({ title, description, hrefCode, hrefDemo, image = '' }) {
	const [isExpand, setIsExpand] = useState(true);

	return (
		<div
			className={`${style.InfoBar} ${isExpand ? style.InfoBar__expand : ''}`}
		>
			<div className={style.InfoBar__Content}>
				<img className={style.InfoBar__image} src={image} alt='' />
				<h2 className={style.InfoBar__title}>{title}</h2>
				<p className={style.InfoBar__description}>{description}</p>
				<hr className={style.InfoBar__line} />
				<div style={{ display: 'flex' }}>
					{hrefDemo ? (
						<Button href={hrefDemo} type='primary'>
							DEMO
						</Button>
					) : (
						''
					)}

					<div
						style={{
							display: 'flex',
							justifyContent: 'flex-end',
							width: '100%'
						}}
					>
						<a target='_blank' rel='noopener noreferrer' href={hrefCode}>
							<IconBtn name='github' />
						</a>
						<IconBtn name='dots' />
					</div>
				</div>
				<div className={style.InfoBar__CreatedBy}>
					<h2>Erstellt mit</h2>
					<div
						style={{
							display: 'flex',
							width: '100%'
						}}
					>
						<div
							style={{
								width: '48px',
								height: '48px',
								background: '#A55EEA',
								marginRight: '20px'
							}}
						></div>
						<div
							style={{
								width: '48px',
								height: '48px',
								background: '#fff'
							}}
						></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default InfoBar;
