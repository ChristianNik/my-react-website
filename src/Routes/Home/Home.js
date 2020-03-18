import React from 'react';
// Components
import Button from '../../components/Button/Button';
// Styles
import style from './Home.module.css';
import animation from '../../scss/animation.module.css';
import Page from '../../components/Page/Page';
import Title from '../../components/Title/Title';
import Text from '../../components/Text/Text';
// Icons
function Home() {
	return (
		<Page className={style.Home}>
			<Title small uppercase>
				Hey, <span className={animation.wave}>👋</span>
				<br />
				ich bin <br />
				Christian.
			</Title>
			<Text>
				Informationstechnischer Assistent <br /> Junior Frontend Entwickler
			</Text>
			<Button type='secondary' text='Meine Projekte' to='/projects' />
		</Page>
	);
}

export default Home;
