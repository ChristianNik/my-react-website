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
			d='M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z'
		/>
	</svg>
);

export default SVG;
