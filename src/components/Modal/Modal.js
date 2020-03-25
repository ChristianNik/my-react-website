import React from 'react';
import style from './Modal.module.css';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Icon from '../icons';

function Modal(props) {
	console.log(props.show);

	if (props.show) {
		return (
			<div className={[style.Modal].join(' ')}>
				<div className={style.Modal__Container}>
					<Button className={style.Modal__close} onClick={props.onHide}>
						<Icon name='close' fill='#fff' width='32px' />
					</Button>
					<img className={style.Modal__image} src={props.image} alt='' />
					<div className={style.Modal__Header}>
						<h2 className={style.Modal__title}>{props.title}</h2>
						<div className={style.Modal__Links}>
							{props.hrefDemo ? (
								<Button href={props.hrefDemo} type='primary'>
									DEMO
								</Button>
							) : (
								''
							)}
							<Button rounded href={props.hrefCode}>
								<Icon name='github' fill='#fff' width='28px' />
							</Button>
						</div>
					</div>
					<p className={style.Modal__description}>{props.description}</p>
				</div>
			</div>
		);
	}
	return <> </>;
}

Modal.propTypes = {};

export default Modal;
