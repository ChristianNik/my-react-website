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
	return (
		<div className={`${style.Projects} page`}>
			<div className={style.Projects__Description}>
				<h1 className={style.Description__title}>Projekte</h1>
			</div>
			<div className={style.Projects__Content}>
				<div className={style.Item}>
					<img
						onClick={() => {
							setTitle('Reisebus Verwaltungs Client');
							setDescription(
								`Innerhalb von 3 Monaten sollten eine Reisebusverwaltungssoftware und eine dazugehörige
								Website programmiert werden. Mithilfe der Software können Administratoren Buchungen, Buslinien, Busflotten und Fahrpläne ändern und anlegen.`
							);
							setHrefDemo('');
							setHrefCode(
								'https://github.com/ChristianNik/Reisebus-Verwaltungs-Clitent-v3'
							);
						}}
						className={style.Image}
						src={busSystemImage}
						alt=''
					/>
				</div>
				<div className={style.Item}>
					<img
						onClick={() => {
							setTitle('Private Website v1');
							setDescription(
								'Meine erste private Website. Erstellt mit Standard HTML, CSS & JavaScript.'
							);
							setHrefDemo('http://projects.chnikel.de/oo622cy9ukqyu9kmzygtm');
							setHrefCode(
								'https://github.com/ChristianNik/personal-website-v1'
							);
						}}
						className={style.Image}
						src={mywebsiteImage}
						alt=''
					/>
				</div>
				<div className={style.Item}>
					<img
						onClick={() => {
							setTitle('Private Website v2');
							setDescription(
								'Meine neue private Website. Erstellt mit ReactJS.'
							);
							setHrefDemo('');
							setHrefCode('https://github.com/ChristianNik/my-react-website');
						}}
						className={style.Image}
						src={mywebsiteV2Image}
						alt=''
					/>
				</div>
			</div>
			<div className={style.Projects__Info}>
				<div className={style.Info__Description}>
					<h3 className={style.Description__title}>{title}</h3>
					<p className={style.Description__description}>{description}</p>
					<div className={style.Description__controls}>
						{hrefDemo ? (
							<Button href={hrefDemo} type='primary' text='DEMO' />
						) : (
							''
						)}
						{hrefCode ? (
							<Button href={hrefCode} type='secondary' text='CODE' />
						) : (
							''
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Projects;
