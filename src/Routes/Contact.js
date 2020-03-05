import React from 'react';
// Styles
import contactStyle from './Contact.module.css';
// Icons
import kontaktIcon from '../images/icons/bxs-envelope.svg';
import githubIcon from '../images/icons/bxl-github-light.svg';
import linkedinIcon from '../images/icons/bxl-linkedin.svg';
// Components
import Button from '../components/Button';
import Input from '../components/Input';
import Icon from '../components/Icon';
function Contact() {
	return (
		<div className={`${contactStyle.Contact} page`}>
			<h1 className={contactStyle.Contact__title}>Contact</h1>
			<form action=''>
				<Input title='Name' />
				<Input title='E-Mail' />
				<Input title='Nachricht' />

				<Button type='primary' text='SENDEN' />
			</form>
			<div>
				<Icon src={kontaktIcon} />
				<div>kontakt@chnikel.de</div>
				<Icon src={githubIcon} />
				<div>ChristianNik</div>
				<Icon src={linkedinIcon} />
				<div>christian-nikel-3537a619b</div>
			</div>
		</div>
	);
}

export default Contact;
