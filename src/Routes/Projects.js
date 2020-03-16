import React, { useState } from 'react';
// Styles
import style from './Projects.module.css';
// Icons / Images
import busSystemImage from '../images/reisebus - verwaltung.gif';
import mywebsiteImage from '../images/my Website.png';
import mywebsiteV2Image from '../images/myWebsite v2.png';
// Components
import ProjectItem from '../components/ProjectItem';
import ProjectGroup from '../components/ProjectGroup';
import IconBtn from '../components/buttons/IconBtn';
import Button from '../components/Button';

function Projects(props) {
	const [title, setTitle] = useState('Reisebus Verwaltungs Client');
	const [description, setDescription] = useState(
		`Innerhalb von 3 Monaten sollten eine Reisebusverwaltungssoftware und eine dazugehörige Website programmiert werden. 
		Mithilfe der Software können Administratoren Buchungen, Buslinien, Busflotten und Fahrpläne ändern und anlegen.`
	);
	const [hrefDemo, setHrefDemo] = useState('');
	const [hrefCode, setHrefCode] = useState(
		'https://github.com/ChristianNik/personal-website-v1'
	);

	const changeState = (title, description, hrefCode, hrefDemo) => {
		setTitle(title);
		setDescription(description);
		setHrefCode(hrefCode);
		setHrefDemo(hrefDemo);
	};

	return (
		<div className={`${style.Projects} page`}>
			<div className={style.Projects__Header}>
				<h1>Projekte</h1>
			</div>
			<div className={style.Projects__Content}>
				<ProjectItem
					func={() =>
						changeState(
							'Reisebus Verwaltungs Client',
							`Innerhalb von 3 Monaten sollten eine Reisebusverwaltungssoftware und eine dazugehörige
								Website programmiert werden. Mithilfe der Software können Administratoren Buchungen, Buslinien, Busflotten und Fahrpläne ändern und anlegen.`,
							'https://github.com/ChristianNik/Reisebus-Verwaltungs-Clitent-v3'
						)
					}
					src={busSystemImage}
				/>
				<ProjectItem
					func={() =>
						changeState(
							'Private Website v1',
							'Meine erste private Website. Erstellt mit Standard HTML, CSS & JavaScript.',
							'https://github.com/ChristianNik/personal-website-v1',
							'http://projects.chnikel.de/my-private-website-v1'
						)
					}
					src={mywebsiteImage}
				/>
				<ProjectItem
					func={() =>
						changeState(
							'Private Website v2',
							'Meine neue private Website. Erstellt mit ReactJS.',
							'https://github.com/ChristianNik/personal-website-v1',
							'https://github.com/ChristianNik/my-react-website'
						)
					}
					src={mywebsiteV2Image}
				/>
			</div>
			<div className={style.Projects__Info}>
				<div className={style.Projects__Info__Content}>
					<h2 className={style.Projects__title}>{title}</h2>
					<p className={style.Projects__description}>{description}</p>
					<hr className={style.Projects__line} />
					<div style={{ display: 'flex' }}>
						<Button type='primary' text='CODE' />
						<div
							style={{
								display: 'flex',
								justifyContent: 'flex-end',
								width: '100%'
							}}
						>
							<IconBtn name='github' />
							<IconBtn name='dots' />
						</div>
					</div>
					<div className={style.Projects__CreatedBy}>
						<h2>Erstellt mit</h2>
						<div
							style={{
								display: 'flex',
								width: '100%'
							}}
						>
							<div
								style={{
									width: '48px',
									height: '48px',
									background: '#A55EEA',
									marginRight: '20px'
								}}
							></div>
							<div
								style={{
									width: '48px',
									height: '48px',
									background: '#fff'
								}}
							></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Projects;
