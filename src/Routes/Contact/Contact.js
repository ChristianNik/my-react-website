import React from 'react';
// Styles
import contactStyle from './Contact.module.css';
// Icons

// Components
import Button from '../../components/Button/Button';
function Contact() {
	return (
		<div className={`${contactStyle.Contact} page`}>
			<h1 className={contactStyle.Contact__title}>Contact</h1>
			<form action=''>
				<Button type='primary'>SENDEN</Button>
			</form>
			<div>
				{/* 
				<Icon src={kontaktIcon} />
				<div>kontakt@chnikel.de</div>
				<Icon src={githubIcon} />
				<div>ChristianNik</div>
				<Icon src={linkedinIcon} />
				<div>christian-nikel-3537a619b</div>*/}
			</div>
		</div>
	);
}

export default Contact;
