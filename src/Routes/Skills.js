import React from 'react';
// Components
import List from '../components/List';
import ListGroup from '../components/ListGroup';
// Styles
import skillsSyle from './Skills.module.css';
// Icons
import Icon from '../components/icons';

function Skills() {
	return (
		<div className={`${skillsSyle.Skills} page`}>
			<h1 className={skillsSyle.Skills__title}>Skills</h1>
			<ListGroup width='500px'>
				<List
					icon={<Icon name='server' fill='#3da9fc' width={28} />}
					title='Backend'
					items={['PHP', 'MYSQL', 'NODEJS']}
				/>
				<List
					icon={<Icon name='laptop' fill='#3da9fc' width={28} />}
					title='Frontend'
					items={['HTML & CSS', 'JAVASCRIPT', 'REACTJS']}
				/>
				<List
					icon={<Icon name='dots' fill='#3da9fc' width={28} />}
					title='Anderes'
					items={['C#']}
				/>
			</ListGroup>
		</div>
	);
}

export default Skills;
