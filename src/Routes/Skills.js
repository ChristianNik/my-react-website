import React from 'react';
// Components
import List from '../components/List';
import ListGroup from '../components/ListGroup';
// Styles
import style from './Skills.module.css';
// Icons
import Icon from '../components/icons';

function Skills() {
	return (
		<div className={`${style.Skills} page`}>
			<div className={style.bg__black}></div>
			<div className={style.bg__blue}></div>
			<div className={style.Skills__Content}>
				<h1 className={style.Content__title}>Skills</h1>
				<ListGroup width='500px'>
					<List
						icon={<Icon name='server' fill='#4B7BEC' width={28} />}
						title='Backend'
						items={['PHP', 'MYSQL', 'NODEJS']}
					/>
					<List
						icon={<Icon name='laptop' fill='#4B7BEC' width={28} />}
						title='Frontend'
						items={['HTML & CSS', 'JAVASCRIPT', 'REACTJS']}
					/>
					<List
						icon={<Icon name='dots' fill='#4B7BEC' width={28} />}
						title='Anderes'
						items={['C#']}
					/>
				</ListGroup>
				<div>
					<h3 style={{ marginBottom: '25px' }}>Tools</h3>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center'
						}}
					>
						<div
							style={{
								height: '48px',
								width: '48px',
								backgroundColor: '#343537',
								marginRight: '30px'
							}}
						></div>
						<div
							style={{
								height: '48px',
								width: '48px',
								backgroundColor: '#343537',
								marginRight: '30px'
							}}
						></div>
						<div
							style={{
								height: '48px',
								width: '48px',
								backgroundColor: '#343537',
								marginRight: '30px'
							}}
						></div>
						<div
							style={{
								height: '48px',
								width: '48px',
								backgroundColor: '#343537',
								marginRight: '30px'
							}}
						></div>
						<div
							style={{
								height: '48px',
								width: '48px',
								backgroundColor: '#343537',
								marginRight: '30px'
							}}
						></div>
						<div
							style={{
								height: '48px',
								width: '48px',
								backgroundColor: '#343537'
							}}
						></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;
