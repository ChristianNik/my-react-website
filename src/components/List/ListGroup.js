import React from 'react';
import style from './ListGroup.module.css';

function ListGroup(props) {
	return <div className={style.ListGroup}>{props.children}</div>;
}

export default ListGroup;
