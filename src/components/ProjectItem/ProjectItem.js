import React from 'react';
import PropTypes from 'prop-types';

// Styles
import style from './ProjectItem.module.css';
// Icons
// Components

function ProjectItem(props) {
	return (
		<div className={style.ProjectItem}>
			<img
				onClick={props.func || ''}
				className={style.ProjectItem__image || ''}
				src={props.src || ''}
				alt=''
			/>
		</div>
	);
}

export default ProjectItem;

ProjectItem.propTypes = {};
