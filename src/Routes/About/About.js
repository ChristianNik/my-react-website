import React from 'react';
// Components
import IconList from '../../components/IconList/IconList';
// Styles
import style from './About.module.css';

function About() {
	return (
		<div className={`${style.About} page`}>
			<div className={style.About__Content}>
				<h1 className={style.About__title}>Über mich</h1>
				<p className={style.About__description}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
					delectus, eius incidunt recusandae eligendi sint odit natus maiores
					consequatur reprehenderit asperiores voluptatum iste nulla aperiam
					quia necessitatibus nihil iusto cum obcaecati repellendus corporis
					similique et. Cum saepe accusamus illo dolorum ad autem quisquam sed
					magnam error eveniet? Aperiam, impedit culpa.
				</p>
			</div>
			<div className={style.About__photo}></div>
			<div className={style.About__Info}>
				<IconList
					className={style.Info__Hobbys}
					color='#fff'
					caption='HOBBYS'
					content={[
						{ text: 'Joggen', icon: 'run', fill: '#fff' },
						{ text: 'Programmieren', icon: 'laptop', fill: '#fff' }
					]}
				/>
				<IconList
					className={style.Info__Hobbys}
					caption='HOBBYS'
					color='#fff'
					content={[
						{ text: 'Führerschein', icon: 'card', fill: '#fff' },
						{ text: 'Auto', icon: 'car', fill: '#fff' },
						{ text: 'Nichtraucher', icon: '', fill: '#fff' }
					]}
				/>
			</div>
		</div>
	);
}

export default About;
