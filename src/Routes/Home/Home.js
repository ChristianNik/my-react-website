import React from 'react';
// Components
import Button from '../../components/Button/Button';
// Styles
import style from './Home.module.css';
// Icons
function Home() {
	return (
		<div className={`${style.Home} page`}>
			<h1 className={style.Home__title}>
				Hey, <span className={style.wave}>👋</span>
				<br />
				ich bin <br />
				Christian.
			</h1>
			<p className={style.Home__subtitle}>
				Informationstechnischer Assistent <br /> Junior Frontend Entwickler
			</p>
			<Button type='secondary' text='Meine Projekte' to='/projects' />
		</div>
	);
}

export default Home;
