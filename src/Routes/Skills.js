import React from 'react';
// Components
import Icon from '../components/Icon';
import List from '../components/List';
import ListGroup from '../components/ListGroup';
// Styles
import skillsSyle from './Skills.module.css';
// Icons
function Skills() {
	return (
		<div className={`${skillsSyle.Skills} page`}>
			<h1 className={skillsSyle.Skills__title}>Skills</h1>
			<ListGroup width='500px'>
				<List title='Backend' items={['PHP', 'MYSQL', 'NODEJS']} />
				<List
					title='Frontend'
					items={['HTML & CSS', 'JAVASCRIPT', 'REACTJS']}
				/>
				<List title='Anderes' items={['C#']} />
			</ListGroup>
		</div>
	);
}

export default Skills;
