import React from 'react';
import PropTypes from 'prop-types';
import { isCompositeComponent } from 'react-dom/test-utils';

export function HomeIcon(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={props.width || '24'}
			height={props.width || '24'}
			style={props.style}
			viewBox='0 0 24 24'
		>
			<path
				fill={props.fill || '#fffffe'}
				d='M21.743,12.331l-9-10c-0.379-0.422-1.107-0.422-1.486,0l-9,10c-0.265,0.293-0.331,0.715-0.17,1.076	C2.247,13.768,2.605,14,3,14h2v7c0,0.552,0.447,1,1,1h3c0.553,0,1-0.448,1-1v-4h4v4c0,0.552,0.447,1,1,1h3c0.553,0,1-0.448,1-1v-7h2	c0.395,0,0.753-0.232,0.913-0.593C22.074,13.046,22.008,12.625,21.743,12.331z'
			/>
		</svg>
	);
}

export function AboutIcon(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={props.width || '24'}
			height={props.width || '24'}
			style={props.style}
			viewBox='0 0 24 24'
		>
			<path
				fill={props.fill || '#fffffe'}
				d='M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h1 1 14H20z'
			/>
		</svg>
	);
}

export function SkillsIcon(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={props.width || '24'}
			height={props.width || '24'}
			style={props.style}
			viewBox='0 0 24 24'
		>
			<path
				fill={props.fill || '#fffffe'}
				d='M2.344,15.271l2,3.46c0.276,0.478,0.888,0.642,1.366,0.365l1.396-0.806c0.58,0.457,1.221,0.832,1.895,1.112V21 c0,0.552,0.447,1,1,1h4c0.553,0,1-0.448,1-1v-1.598c0.674-0.28,1.314-0.655,1.895-1.112l1.396,0.806 c0.477,0.275,1.091,0.11,1.366-0.365l2-3.46c0.275-0.476,0.11-1.091-0.365-1.366l-1.372-0.793C19.973,12.743,20,12.371,20,12 s-0.027-0.743-0.081-1.112l1.372-0.793c0.476-0.275,0.641-0.89,0.365-1.366l-2-3.46c-0.276-0.478-0.888-0.642-1.366-0.365 l-1.396,0.806C16.314,5.253,15.674,4.877,15,4.598V3c0-0.552-0.447-1-1-1h-4C9.447,2,9,2.448,9,3v1.598 c-0.674,0.28-1.314,0.655-1.895,1.112L5.71,4.904C5.231,4.627,4.62,4.791,4.344,5.269l-2,3.46c-0.275,0.476-0.11,1.091,0.365,1.366 l1.372,0.793C4.027,11.257,4,11.629,4,12s0.027,0.743,0.081,1.112l-1.372,0.793C2.233,14.18,2.068,14.795,2.344,15.271z M12,8 c2.206,0,4,1.794,4,4s-1.794,4-4,4s-4-1.794-4-4S9.794,8,12,8z'
			/>
		</svg>
	);
}

export function ProjectsIcon(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={props.width || '24'}
			height={props.width || '24'}
			style={props.style}
			viewBox='0 0 24 24'
		>
			<path
				fill={props.fill || '#fffffe'}
				d='M20 6h-3V4c0-1.103-.897-2-2-2H9C7.897 2 7 2.897 7 4v2H4C2.897 6 2 6.897 2 8v3h20V8C22 6.897 21.103 6 20 6zM9 4h6v2H9V4zM14 14h-4v-2H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-8V14z'
			/>
		</svg>
	);
}

export function ContactIcon(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={props.width || '24'}
			height={props.width || '24'}
			style={props.style}
			viewBox='0 0 24 24'
		>
			<path
				fill={props.fill || '#fffffe'}
				d='M20,4H4C2.896,4,2,4.896,2,6v12c0,1.104,0.896,2,2,2h16c1.104,0,2-0.896,2-2V6C22,4.896,21.104,4,20,4z M20,8.7l-8,5.334 L4,8.7V6.297l8,5.333l8-5.333V8.7z'
			/>
		</svg>
	);
}

export default function Icons(props) {
	return (
		<svg
			width={props.width || '32'}
			style={props.style}
			height={props.width || '32'}
			viewBox={props.viewBox || '0 0 32 32'}
			xmlns='http://www.w3.org/2000/svg'
			className={`svg-icon ${props.className || ''}`}
			xmlnsXlink='http://www.w3.org/1999/xlink'
		>
			<path
				fill={props.fill}
				d='M 2.56635 12.9241C 0.708307 9.55549 0 6.83983 0 5.00558C 0 3.17134 0.450658 2.64526 0.907953 2.22025C 1.36525 1.79524 3.42732 0.523908 3.77867 0.286808C 4.13002 0.0497085 5.47099 -0.41107 6.31193 0.798636C 7.15287 2.00834 8.73646 4.43718 9.82825 6.05069C 11.5415 8.33611 10.1766 9.33937 9.73572 9.94069C 8.92447 11.0472 8.45734 11.3201 8.45734 12.6788C 8.45734 14.0375 12.2545 17.8976 13.1625 18.8487C 14.0635 19.7926 17.8471 23.1094 19.0195 23.2868C 20.2002 23.4654 21.7807 22.2154 22.1168 21.8985C 23.8263 20.586 24.7912 21.581 25.5787 22.0136C 26.3661 22.4461 29.9239 24.663 31.0264 25.4103C 32.0641 26.1576 31.9992 27.3125 31.9992 27.3125C 31.9992 27.3125 29.859 30.7092 29.5996 31.1168C 29.2753 31.5924 28.4971 32 26.746 32C 24.995 32 23.1241 31.6802 18.6777 29.2349C 15.0396 27.234 11.5714 24.1009 9.75551 22.2666C 7.87475 20.4324 4.68876 16.772 2.56635 12.9241Z'
			/>
		</svg>
	);
}

Icons.propTypes = {
	width: PropTypes.string,
	style: PropTypes.object,
	fill: PropTypes.string
};
