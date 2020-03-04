import React from 'react';
import PropTypes from 'prop-types';

export function HomeIcon(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={props.width || '24'}
			height={props.width || '24'}
			style={props.style}
			viewBox='0 0 24 24'
			className={`svg-icon ${props.className || ''}`}
			fill={props.fill}
		>
			<path
				className={`svg-icon ${props.className || ''}`}
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
			fill={props.fill || '#fffffe'}
		>
			<path
				className={`svg-icon ${props.className || ''}`}
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
			fill={props.fill || '#fffffe'}
		>
			<path
				className={`svg-icon ${props.className || ''}`}
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
			fill={props.fill || '#fffffe'}
		>
			<path
				className={`svg-icon ${props.className || ''}`}
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
			fill={props.fill || '#fffffe'}
		>
			<path
				className={`svg-icon ${props.className || ''}`}
				d='M20,4H4C2.896,4,2,4.896,2,6v12c0,1.104,0.896,2,2,2h16c1.104,0,2-0.896,2-2V6C22,4.896,21.104,4,20,4z M20,8.7l-8,5.334 L4,8.7V6.297l8,5.333l8-5.333V8.7z'
			/>
		</svg>
	);
}

export function LinkedInIcon(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={props.width || '24'}
			height={props.width || '24'}
			style={props.style}
			viewBox='0 0 24 23.959'
			fill={props.fill || '#fffffe'}
		>
			<ellipse
				className={`svg-icon ${props.className || ''}`}
				cx='3.089'
				cy='3.089'
				rx='3.089'
				ry='3.089'
				transform='translate(0 0)'
			/>
			<path
				className={`svg-icon ${props.className || ''}`}
				d='M11.182,8.979V26.117h4.963V17.642c0-2.236.392-4.4,2.978-4.4,2.551,0,2.582,2.557,2.582,4.543v8.335h4.965v-9.4c0-4.617-.927-8.165-5.96-8.165a5.166,5.166,0,0,0-4.7,2.767h-.067V8.979Zm-8.087,0H8.066V26.117H3.1Z'
				transform='translate(-2.671 -2.159)'
			/>
		</svg>
	);
}

export function GithubIcon(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={props.width || '24'}
			height={props.width || '24'}
			style={props.style}
			viewBox='0 0 29.948 29.456'
			fill={props.fill || '#fffffe'}
		>
			<path
				className={`svg-icon ${props.className || ''}`}
				d='M17.026,2a15.12,15.12,0,0,0-4.734,29.431c.749.136,1.019-.329,1.019-.728,0-.359-.012-1.31-.017-2.568-4.166.911-5.046-2.026-5.046-2.026A3.981,3.981,0,0,0,6.587,23.9c-1.359-.937.1-.916.1-.916A3.139,3.139,0,0,1,8.984,24.54,3.173,3.173,0,0,0,13.34,25.8a3.248,3.248,0,0,1,.953-2.02C10.97,23.4,7.475,22.1,7.475,16.312a5.879,5.879,0,0,1,1.537-4.05,5.474,5.474,0,0,1,.149-4s1.257-.407,4.117,1.546a14.056,14.056,0,0,1,7.495,0c2.861-1.955,4.117-1.546,4.117-1.546a5.449,5.449,0,0,1,.149,4,5.842,5.842,0,0,1,1.537,4.05c0,5.8-3.5,7.078-6.834,7.452a3.635,3.635,0,0,1,1.013,2.795c0,2.02-.018,3.649-.018,4.144,0,.4.267.874,1.031.725A15.12,15.12,0,0,0,17.026,2Z'
				transform='translate(-2.052 -2)'
			/>
		</svg>
	);
}

export function LogoIcon(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={props.width || '24'}
			height={props.width || '24'}
			style={props.style}
			viewBox='0 0 64 64'
		>
			<g transform='translate(-2 -1)'>
				<path
					d='M-180.825-199.195h-12.66v-5.275h12.66l10.55-21.628-10.55-21.627h-12.66V-253h17.935L-165-226.1l-10.55,26.9Zm-32.349,0h-5.275L-229-226.1l10.55-26.9h17.935v5.275h-12.66l-10.55,21.627,10.55,21.628h12.66v5.275Z'
					transform='translate(231 259)'
					fill='#636363'
				/>
				<path
					d='M12.966,3.711A10.962,10.962,0,0,1,7.026,2.05,11.477,11.477,0,0,1,2.869-2.54a14.254,14.254,0,0,1-1.5-6.609,14.134,14.134,0,0,1,1.52-6.609,11.588,11.588,0,0,1,4.173-4.591A10.962,10.962,0,0,1,13-22.01a10.983,10.983,0,0,1,4.871,1.072,10.13,10.13,0,0,1,3.723,3.108l-2.606,2.822a7.186,7.186,0,0,0-5.8-2.929,7.3,7.3,0,0,0-4,1.125,7.636,7.636,0,0,0-2.761,3.126,10.071,10.071,0,0,0-.993,4.537,10.071,10.071,0,0,0,.993,4.537A7.636,7.636,0,0,0,9.182-1.487a7.3,7.3,0,0,0,4,1.125,7.158,7.158,0,0,0,5.8-2.965L21.591-.468a10.1,10.1,0,0,1-3.738,3.108A11.082,11.082,0,0,1,12.966,3.711Z'
					transform='translate(21.688 42.252)'
					fill='#4aa1e8'
					stroke='#4aa1e8'
				/>
			</g>
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