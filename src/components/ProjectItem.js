import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './ProjectItem.css';
// Icons
// Components
import Button from '../components/Button';

function ProjectItem(props) {
	return (
		<div className='ProjectItem'>
			<h3>{props.title}</h3>
			<img className='ProjectItem__image' src={props.image} alt='' />
			<p className='ProjectItem__discription'>{props.discription}</p>
			<div className='ProjectItem__controls'>
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
