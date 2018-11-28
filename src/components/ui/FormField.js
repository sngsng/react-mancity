import React     from 'react'
import PropTypes from 'prop-types'

const FormField = ({formData, id, change}) => {

	const showError = () => {
		return(
			<div className="error_label">
				{
					formData.validation && !formData.valid ?
						formData.validationMessage : null
				}
			</div>
		)

	}

	const renderTemplate = () => {

		let formTemplate = null

		switch (formData.element) {
			case 'input': {
				formTemplate = (
					<div>
						<input
							{...formData.config}
							value={formData.value}
							onChange={(event) => change({
								event,
								id
							})}
						/>
						{showError()}
					</div>
				)
				break
			}

			default:
				formTemplate = null
		}

		return formTemplate
	}

	return (
		<div>
			{renderTemplate()}
		</div>
	)
}

FormField.propTypes = {
	id: PropTypes.string.isRequired,
	formData: PropTypes.object.isRequired,
	change: PropTypes.func
}

FormField.defaultProps = {
	change: () => {}
}

export default FormField
