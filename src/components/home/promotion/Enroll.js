import React, {Component} from 'react'
import Fade               from 'react-reveal/Fade'
import FormField          from '../../ui/FormField'
import {validateForm}     from '../../ui/misc'
import {promotions}       from '../../../firebase'

class Enroll extends Component {

	constructor(props) {
		super(props)
		this.state = {
			formError: false,
			formSuccess: '',
			formData: {
				email: {
					element: 'input',
					value: '',
					config: {
						name: 'email',
						type: 'email',
						placeholder: 'Enter your email'
					},
					validation: {
						required: true,
						email: true
					},
					valid: false,
					validationMessage: ''
				}
			}
		}
	}

	handleSubmit = (e) => {

		e.preventDefault()

		const {formData} = this.state
		const dataToSubmit = {}
		let formIsValid = true

		for (const key in formData) {

			if (formData.hasOwnProperty(key)) {
				dataToSubmit[key] = formData[key].value
				formIsValid = formData[key].valid && formIsValid
			}
		}

		if (formIsValid) {

			promotions.orderByChild('email')
				.equalTo(dataToSubmit.email)
				.once('value')
				.then((snapshot) => {

					if (!snapshot.val()) {
						promotions.push(dataToSubmit)
						this.resetForm(true)
					} else {
						this.resetForm(false)
					}
				})

		} else {
			this.setState({
				formError: true
			})
		}
	}

	resetForm = (isSuccess) => {

		const newFormData = {...this.state.formData}
		for (const key in newFormData) {

			if (newFormData.hasOwnProperty(key)) {
				newFormData[key].value = ''
				newFormData[key].valid = false
				newFormData[key].validationMessage = ''
			}
		}

		this.setState({
			formError: false,
			formData: newFormData,
			formSuccess: isSuccess ? 'Congratulations' : 'Already registered'

		})

		this.clearSuccessMessage()
	}

	handleInputChange = (element) => {

		const newFormData = {...this.state.formData}
		const newElement = {...newFormData[element.id]}
		newElement.value = element.event.target.value
		const result = validateForm(newElement)
		newElement.valid = result.isValid
		newElement.validationMessage = result.errMessage
		newFormData[element.id] = newElement

		this.setState({
			formError: false,
			formData: newFormData
		})
	}

	clearSuccessMessage = () => {

		setTimeout(() => {
			this.setState({
				formSuccess: ''
			})
		}, 2000)
	}

	render() {

		const {formData, formError, formSuccess} = this.state

		return (
			<Fade>
				<div className="enroll_wrapper">
					<form onSubmit={this.handleSubmit}>
						<div className="enroll_title">
							Enter your email
						</div>
						<div className="enroll_input">
							<FormField
								id="email"
								formData={formData.email}
								change={this.handleInputChange}
							/>
							{formError &&
							<div className="error_label">Please input valid email</div>}
							<div className="success_label">{formSuccess}</div>
							<button>Enroll</button>
							<div className="enroll_discl">
								It is a long established fact that a reader will be distracted by
								the readable content of a page when looking at its layout.
							</div>
						</div>
					</form>
				</div>
			</Fade>
		)
	}
}

export default Enroll
