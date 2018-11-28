import React        from 'react'
import {Link}       from 'react-router-dom'
import PropTypes    from 'prop-types'
import mainCityLogo from '../../resources/images/logos/manchester_city_logo.png'

export const CityLogo = (props) => {

	const template =
		<div
			className="img_cover"
			style={{
				width: `${props.width}px`,
				height: `${props.height}px`,
				background: `url(${mainCityLogo}) no-repeat`
			}}
		>
		</div>

	if (props.link) {
		return (
			<Link to={props.link} className="link_logo">
				{template}
			</Link>
		)
	} else {
		return template
	}
}

CityLogo.propTypes = {
	link: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number
}

CityLogo.defaultProps = {
	width: 70,
	height: 70
}
