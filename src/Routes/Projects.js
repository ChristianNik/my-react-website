import React from 'react';
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
	return (
		<div className={`${style.Projects} page`}>
			<div className={style.Projects__Description}>
				<h1 className={style.Description__title}>Projekte</h1>
			</div>
			<div className={style.Projects__Content}>
				<ProjectGroup className={style.Projects__Group}>
					<ProjectItem
						title='Reisebus Verwaltungs Client'
						image={busSystemImage}
						discription='Innerhalb von 3 Monaten sollten eine Reisebusverwaltungssoftware und
				eine dazugehörige Website programmiert werden. Mithilfe der Software
				können Administratoren Buchungen, Buslinien, Busflotten und Fahrpläne
				ändern und anlegen.'
						hrefCode='https://github.com/ChristianNik/Reisebus-Verwaltungs-Clitent-v3'
					/>
					<ProjectItem
						title='Private Website v1'
						image={mywebsiteImage}
						discription='Meine erste private Website. Erstellt mit Standard HTML, CSS & JavaScript.'
						hrefDemo='http://projects.chnikel.de/oo622cy9ukqyu9kmzygtm'
						hrefCode='https://github.com/ChristianNik/personal-website-v1'
					/>
					<ProjectItem
						title='Private Website v2'
						image={mywebsiteV2Image}
						discription='Meine neue private Website. Erstellt mit ReactJS.'
						hrefCode='https://github.com/ChristianNik/my-react-website'
					/>
				</ProjectGroup>
			</div>
			<div className={style.Projects__Info}>
				<div className={style.Info__Description}>
					<h3 className={style.Description__title}>Private Website v1</h3>
					<p className={style.Description__description}>
						Meine erste private Website. Erstellt mit Standard HTML, CSS &
						JavaScript.'
					</p>
					<div className={style.Description__controls}>
						<Button href={props.hrefDemo} type='primary' text='DEMO' />
						<Button href={props.hrefCode} type='secondary' text='CODE' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Projects;
