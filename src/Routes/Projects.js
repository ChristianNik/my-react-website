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
					noDemoAvailable
				/>
				<ProjectItem
					title='Private Website v1'
					discription='Meine erste private Website. Erstellt mit Standard HTML, CSS & JavaScript.'
					noCodeAvailable
				/>
				<ProjectItem
					title='Private Website v1'
					discription='Meine erste private Website. Erstellt mit Standard HTML, CSS & JavaScript.'
				/>
			</ProjectGroup>
		</div>
	);
}

export default Projects;
