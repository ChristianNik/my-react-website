import React from 'react';
// Components
import List from '../../components/List/List';
import IconWithText from '../../components/IconWithText/IconWithText';
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
				<List className={style.Info__Hobbys} gap={15} flow='row' title='HOBBYS'>
					<IconWithText name='run' text='Joggen' fill='#fff' />
					<IconWithText name='laptop' text='Programmieren' fill='#fff' />
				</List>
				<List
					className={style.Info__Hobbys}
					gap={10}
					flow='column'
					title='ANDERES'
				>
					<IconWithText
						name='card'
						flow='row'
						text='Führerschein'
						fill='#fff'
					/>
					<IconWithText name='car' flow='row' text='Auto' fill='#fff' />
					<IconWithText name='' flow='row' text='Nichtraucher' fill='#fff' />
				</List>
			</div>
		</div>
	);
}

export default About;
