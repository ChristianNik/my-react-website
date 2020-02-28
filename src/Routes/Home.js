import React from 'react';
import Button from '../components/Button';
// Components

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
			<Button title='Meine Projekte' />
		</div>
	);
}

export default Home;
