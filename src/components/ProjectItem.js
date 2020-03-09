import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Styles
import style from './ProjectItem.module.css';
// Icons
// Components
import Button from '../components/Button';

function ProjectItem(props) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div
			onClick={() => {
				setIsOpen(!isOpen);
			}}
			className={`${style.ProjectItem} ${
				isOpen ? style.ProjectItem__active : ''
			}`}
		>
			<h3 className={style.ProjectItem__title}>{props.title}</h3>
			<img className={style.ProjectItem__image} src={props.image} alt='' />
			<p
				className={`${style.ProjectItem__discription} ${
					isOpen ? style.ProjectItem__active : ''
				}`}
			>
				{props.discription}
			</p>
			<div
				className={`${style.ProjectItem__controls} ${
					isOpen ? style.ProjectItem__active : ''
				}`}
			>
				{props.hrefDemo ? (
					<Button href={props.hrefDemo} type='primary' text='DEMO' />
				) : (
					''
				)}
				{props.hrefCode ? (
					<Button href={props.hrefCode} type='secondary' text='CODE' />
				) : (
					''
				)}
			</div>
		</div>
	);
}

export default ProjectItem;

ProjectItem.propTypes = {
	title: PropTypes.string.isRequired,
	discription: PropTypes.string,
	hrefCode: PropTypes.string,
	hrefDemo: PropTypes.string
};
