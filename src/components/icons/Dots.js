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
			d='M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2S13.1 10 12 10zM18 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2S19.1 10 18 10zM6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2S7.1 10 6 10z'
		/>
	</svg>
);

export default SVG;
