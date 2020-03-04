import React from 'react';
// Components
import Button from '../components/Button';
// Styles
import homeStyle from './Home.module.css';
// Icons
function Home() {
	return (
		<div className={`${homeStyle.Home} page`}>
			<h1 className={homeStyle.Home__title}>
				Hey, <br />
				ich bin <br />
				Christian.
			</h1>
			<p className={homeStyle.Home__subtitle}>
				Informationstechnischer Assistent / Junior Frontend Entwickler
			</p>
			<Button type='primary' title='Meine Projekte' href='/projects' />
		</div>
	);
}

export default Home;
