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
			d='M20,4H4C2.897,4,2,4.897,2,6v12c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2V6C22,4.897,21.103,4,20,4z M8.715,8 c1.151,0,2,0.849,2,2s-0.849,2-2,2s-2-0.849-2-2S7.563,8,8.715,8z M12.43,16H5v-0.465c0-1.373,1.676-2.785,3.715-2.785 s3.715,1.412,3.715,2.785V16z M19,15h-4v-2h4V15z M19,11h-5V9h5V11z'
		/>
	</svg>
);

export default SVG;
