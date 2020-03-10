import React from 'react';

const SVG = ({
	style = {},
	fill = '#000',
	width = '100%',
	className = '',
	viewBox = '0 0 24 24'
}) => (
	<svg
		width={width}
		style={style}
		height={width}
		viewBox={viewBox}
		xmlns='http://www.w3.org/2000/svg'
		className={`svg-icon ${className || ''}`}
		xmlnsXlink='http://www.w3.org/1999/xlink'
	>
		<path
			fill={fill}
			d='M19 19H21V21H19zM11 19H13V21H11zM15 19H17V21H15zM7 19H9V21H7zM3 19H5V21H3zM3 7H5V9H3zM3 15H5V17H3zM3 11H5V13H3zM3 3H5V5H3zM7 3H9V5H7zM11 3H13V5H11zM15 3H17V5H15zM19 3H21V5H19zM19 7H21V9H19zM19 11H21V13H19zM19 15H21V17H19zM11 7H13V9H11zM11 15H13V17H11zM7 11H9V13H7zM15 11H17V13H15zM11 11H13V13H11z'
		/>
	</svg>
);

export default SVG;