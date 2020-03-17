import React from 'react';
// Components
import List from '../components/List';
import ListGroup from '../components/ListGroup';
// Styles!
import style from './Skills.module.css';
// Icons
import Icon from '../components/icons';

function Skills() {
	return (
		<div className={`${style.Skills} page`}>
			<div className={style.bg__black}></div>
			<div className={style.bg__blue}></div>
			<div className={style.Skills__Content}>
				<h1 className={style.Skills__title}>Skills</h1>
				<ListGroup width='500px'>
					<List
						icon={<Icon name='server' fill='#4b7bec' width={28} />}
						title='Backend'
						items={['PHP', 'MYSQL', 'NODEJS']}
						className={style.Skills__List}
					/>
					<List
						icon={<Icon name='laptop' fill='#4b7bec' width={28} />}
						title='Frontend'
						items={['HTML & CSS', 'JAVASCRIPT', 'REACTJS']}
						className={style.Skills__List}
					/>
					<List
						icon={<Icon name='dots' fill='#4b7bec' width={28} />}
						title='Anderes'
						items={['C#', 'ADOBE XD']}
						className={style.Skills__List}
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
						<Icon
							style={{
								marginRight: '30px'
							}}
							name='vscode'
							width={48}
						/>
						<Icon
							style={{
								marginRight: '30px'
							}}
							name='adobexd'
							width={48}
						/>
						<div
							style={{
								height: '48px',
								width: '48px',
								backgroundColor: '#343537',
								marginRight: '0px'
							}}
						></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;
