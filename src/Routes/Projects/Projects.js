import React, { useState, useEffect } from 'react';
// Styles
import style from './Projects.module.css';
// Icons / Images
import busSystemImage from '../../images/reisebus - verwaltung.gif';
import mywebsiteImage from '../../images/my Website.png';
import mywebsiteV2Image from '../../images/myWebsite v2.png';
// Components
import ProjectItem from '../../components/ProjectItem/ProjectItem';
import Page from '../../components/Page/Page';
import Title from '../../components/Title/Title';
import Modal from '../../components/Modal/Modal';

function Projects(props) {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [hrefDemo, setHrefDemo] = useState('');
	const [hrefCode, setHrefCode] = useState('');
	const [image, setImage] = useState('');

	const [show, setShow] = useState(false);

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
		<Page className={style.Projects}>
			<Title regular className={style.Projects__Header}>
				Projekte
			</Title>
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
								onClick={() => setShow(true)}
							/>
						);
					}
				)}
			</div>
			<Modal
				show={show}
				{...{ title, description, hrefCode, hrefDemo, image }}
				onHide={() => setShow(false)}
			></Modal>
		</Page>
	);
}

export default Projects;
