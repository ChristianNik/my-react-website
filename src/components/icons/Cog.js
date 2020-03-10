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
			d='M2.344,15.271l2,3.46c0.276,0.478,0.888,0.642,1.366,0.365l1.396-0.806c0.58,0.457,1.221,0.832,1.895,1.112V21 c0,0.552,0.447,1,1,1h4c0.553,0,1-0.448,1-1v-1.598c0.674-0.28,1.314-0.655,1.895-1.112l1.396,0.806 c0.477,0.275,1.091,0.11,1.366-0.365l2-3.46c0.275-0.476,0.11-1.091-0.365-1.366l-1.372-0.793C19.973,12.743,20,12.371,20,12 s-0.027-0.743-0.081-1.112l1.372-0.793c0.476-0.275,0.641-0.89,0.365-1.366l-2-3.46c-0.276-0.478-0.888-0.642-1.366-0.365 l-1.396,0.806C16.314,5.253,15.674,4.877,15,4.598V3c0-0.552-0.447-1-1-1h-4C9.447,2,9,2.448,9,3v1.598 c-0.674,0.28-1.314,0.655-1.895,1.112L5.71,4.904C5.231,4.627,4.62,4.791,4.344,5.269l-2,3.46c-0.275,0.476-0.11,1.091,0.365,1.366 l1.372,0.793C4.027,11.257,4,11.629,4,12s0.027,0.743,0.081,1.112l-1.372,0.793C2.233,14.18,2.068,14.795,2.344,15.271z M12,8 c2.206,0,4,1.794,4,4s-1.794,4-4,4s-4-1.794-4-4S9.794,8,12,8z'
		/>
	</svg>
);

export default SVG;