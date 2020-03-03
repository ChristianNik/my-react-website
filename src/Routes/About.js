import React from 'react';
// Components
// Styles
import aboutSyle from './About.module.css';
// Icons

function About() {
	return (
		<div className={`${aboutSyle.About} page`}>
			<h1 className={aboutSyle.About__title}>Über mich</h1>
			<p className={aboutSyle.About__subtitle}>
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
				eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
				voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
				clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
				amet. Lorem ipsum dolo
			</p>
		</div>
	);
}

export default About;
