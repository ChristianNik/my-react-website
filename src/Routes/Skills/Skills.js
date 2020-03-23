import React from 'react';
// Components
import List from '../../components/List/List';
import ListGroup from '../../components/List/ListGroup';
import Page from '../../components/Page/Page';
import Title from '../../components/Title/Title';
import IconList from '../../components/IconList/IconList';
// Styles!
import style from './Skills.module.css';
// Icons
import Icon from '../../components/icons';

function Skills() {
	return (
		<Page className={style.Skills}>
			<div className={style.bg__black}></div>
			<div className={style.bg__blue}></div>
			<div className={style.Skills__Content}>
				<Title regular className={style.Skills__title}>
					Skills
				</Title>
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
						items={['C#', 'UI DESIGN']}
						className={style.Skills__List}
					/>
				</ListGroup>
				<IconList
					caption='Tools'
					content={[
						{
							icon: 'vscode',
							size: 48
						},
						{
							icon: 'adobexd',
							size: 48
						},
						{
							icon: '',
							size: 48
						}
					]}
				></IconList>
			</div>
		</Page>
	);
}

export default Skills;
