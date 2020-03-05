import React from 'react';
// Styles
import projectsStyle from './Projects.module.css';
// Icons
// Components
import Button from '../components/Button';
import ProjectItem from '../components/ProjectItem';
import ProjectGroup from '../components/ProjectGroup';

function Projects() {
	return (
		<div className={`${projectsStyle.Projects} page`}>
			<h1 className={projectsStyle.Projects__title}>Projekte</h1>
			<ProjectGroup>
				<ProjectItem
					title='Reisebus Verwaltungs Client'
					discription='Innerhalb von 3 Monaten sollten eine Reisebusverwaltungssoftware und
				eine dazugehörige Website programmiert werden. Mithilfe der Software
				können Administratoren Buchungen, Buslinien, Busflotten und Fahrpläne
				ändern und anlegen.'
					hrefCode='https://github.com/ChristianNik/Reisebus-Verwaltungs-Clitent-v3'
				/>
				<ProjectItem
					title='Private Website v1'
					discription='Meine erste private Website. Erstellt mit Standard HTML, CSS & JavaScript.'
					hrefDemo='http://projects.chnikel.de/oo622cy9ukqyu9kmzygtm'
					hrefCode='https://github.com/ChristianNik/personal-website-v1'
				/>
				<ProjectItem
					title='Private Website v2'
					discription='Meine neue private Website. Erstellt mit ReactJS.'
					hrefCode='https://github.com/ChristianNik/my-react-website'
				/>
			</ProjectGroup>
		</div>
	);
}

export default Projects;
