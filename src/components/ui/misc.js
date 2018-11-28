import React     from 'react'
import {Link}    from 'react-router-dom'
import PropTypes from 'prop-types'

export const Tag = (props) => {
	const template =
		<div style={{
			background: props.bck,
			color: props.color,
			fontSize: `${props.fontSize}px`,
			padding: '5px 10px',
			display: 'inline-block',
			fontFamily: 'Righteous',
			...props.add
		}}>{props.children}</div>

	if (props.link) {
		return (
			<Link to={props.link}>
				{template}
			</Link>
		)
	} else {
		return template
	}
}

Tag.propTypes = {
	link: PropTypes.string,
	fontSize: PropTypes.number,
	color: PropTypes.string,
	bck: PropTypes.string
}

Tag.defaultProps = {
	fontSize: 50,
	color: '#ffffff',
	bck: '#0e1731'
}

export const firebaseLooper = (snapshot) => {

	const data = []
	snapshot.forEach((childSnapshot) => {
		data.push({
			...childSnapshot.val(),
			id: childSnapshot.key
		})
	})
	return data
}

export const validateForm = (form) => {

	const formValue = form.value

	let result = {
		isValid: true,
		errMessage: ''
	}

	if (form.validation.email) {
		const isValid = /\S+@\S+\.\S+/.test(formValue)
		const errMessage = `${!isValid ? 'Must be a valid email' : ''}`
		result = !isValid ? {isValid, errMessage} : result
	}

	if (form.validation.required) {
		const isValid = formValue.trim() !== ''
		const errMessage = `${!isValid ? 'This field is required' : ''}`
		result = !isValid ? {isValid, errMessage} : result
	}

	return result


}
