import React from 'react';

function LinkGroup(props) {
	const styleOverwrite = {
		alignSelf: props.position ? props.position : ''
	};
	return <ul style={styleOverwrite ? styleOverwrite : ''}>{props.children}</ul>;
}

export default LinkGroup;
