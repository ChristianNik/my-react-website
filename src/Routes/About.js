import React from 'react';
// Components
import List from '../components/List';
import { AboutIcon } from '../components/Icons';
import IconWithText from '../components/IconWithText';
// Styles
import aboutSyle from './About.module.css';
// Icons

function About() {
	return (
		<div className={`${aboutSyle.About} page`}>
			<h1 className={aboutSyle.About__title}>Über mich</h1>
			<p className={aboutSyle.About__subtitle}>
				Ich bin Christian. In meiner Freizeit programmiere und designe ich
				Webseiten. Ich wohne in der Nähe von Köln und bin gerne Unterwegs.
			</p>
			<div className={aboutSyle.About__Photo}></div>
			<List title='Hobbys' flow='column' gab={15}>
				<IconWithText text='Joggen' />
				<IconWithText text='Programmieren' />
			</List>
		</div>
	);
}

export default About;
