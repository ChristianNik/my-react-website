import React from 'react';

const SVG = ({
	style = {},
	fill = '#000',
	width = '100%',
	className = '',
	viewBox = '0 0 40 26'
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
			d='M20 6h-3V4c0-1.103-.897-2-2-2H9C7.897 2 7 2.897 7 4v2H4C2.897 6 2 6.897 2 8v3h20V8C22 6.897 21.103 6 20 6zM9 4h6v2H9V4zM14 14h-4v-2H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-8V14z'
		/>
	</svg>
);

export default SVG;
