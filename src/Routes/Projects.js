import React, { useState, useEffect } from 'react';
// Styles
import style from './Projects.module.css';
// Icons / Images
import busSystemImage from '../images/reisebus - verwaltung.gif';
import mywebsiteImage from '../images/my Website.png';
import mywebsiteV2Image from '../images/myWebsite v2.png';
// Components
import ProjectItem from '../components/ProjectItem';
import IconBtn from '../components/buttons/IconBtn';
import Button from '../components/Button';

function Projects(props) {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [hrefDemo, setHrefDemo] = useState('');
	const [hrefCode, setHrefCode] = useState('');
	const [image, setImage] = useState('');

	const initialState = () => {
		changeState({
			title: 'Reisebus Verwaltungs Client',
			description: `Innerhalb von 3 Monaten sollten eine Reisebusverwaltungssoftware und eine dazugehörige Website programmiert werden. Mithilfe der Software können Administratoren Buchungen, Buslinien, Busflotten und Fahrpläne ändern und anlegen.`,
			hrefCode:
				'https://github.com/ChristianNik/Reisebus-Verwaltungs-Clitent-v3',
			hrefDemo: '',
			image: busSystemImage
		});
	};

	const changeState = ({
		title,
		description,
		hrefCode,
		hrefDemo,
		image = ''
	}) => {
		setTitle(title);
		setDescription(description);
		setHrefCode(hrefCode);
		setHrefDemo(hrefDemo);
		setImage(image);
	};

	const fakeAPIData = [
		{
			title: 'Reisebus Verwaltungs Client',
			description: `Innerhalb von 3 Monaten sollten eine Reisebusverwaltungssoftware und eine dazugehörige Website programmiert werden. Mithilfe der Software können Administratoren Buchungen, Buslinien, Busflotten und Fahrpläne ändern und anlegen.`,
			hrefCode:
				'https://github.com/ChristianNik/Reisebus-Verwaltungs-Clitent-v3',
			hrefDemo: '',
			image: busSystemImage
		},
		{
			title: 'Private Website v1',
			description:
				'Meine erste private Website. Erstellt mit Standard HTML, CSS & JavaScript.',
			hrefCode: 'https://github.com/ChristianNik/personal-website-v1',
			hrefDemo: 'http://projects.chnikel.de/my-private-website-v1',
			image: mywebsiteImage
		},
		{
			title: 'Private Website v2',
			description: 'Meine neue private Website. Erstellt mit ReactJS.',
			hrefCode: 'https://github.com/ChristianNik/my-react-website',
			hrefDemo: 'http://dev.chnikel.de/',
			image: mywebsiteV2Image
		}
	];

	//
	//
	//
	useEffect(() => {
		initialState();
	}, []);

	return (
		<div className={`${style.Projects} page`}>
			<div className={style.Projects__Header}>
				<h1>Projekte</h1>
			</div>
			<div className={style.Projects__Content}>
				{fakeAPIData.map(
					({ title, description, hrefCode, hrefDemo, image }) => {
						return (
							<ProjectItem
								key={Math.random()}
								func={() =>
									changeState({
										title,
										description,
										hrefCode,
										hrefDemo,
										image
									})
								}
								src={image}
							/>
						);
					}
				)}
			</div>
			<div className={style.Projects__Info}>
				<div className={style.Projects__Info__Content}>
					<img className={style.Projects__image} src={image} alt='' />
					<h2 className={style.Projects__title}>{title}</h2>
					<p className={style.Projects__description}>{description}</p>
					<hr className={style.Projects__line} />
					<div style={{ display: 'flex' }}>
						{hrefDemo ? (
							<Button href={hrefDemo} type='primary' text='DEMO' />
						) : (
							''
						)}

						<div
							style={{
								display: 'flex',
								justifyContent: 'flex-end',
								width: '100%'
							}}
						>
							<a target='_blank' href={hrefCode}>
								<IconBtn name='github' />
							</a>
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
