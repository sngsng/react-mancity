import React, {Component} from 'react'
import {CityLogo}         from '../ui/icons'

class Footer extends Component {
	render() {
		return (
			<footer className="bck_blue">
				<div className="footer_logo">
					<CityLogo
						link="/"
					/>
				</div>
				<div className="footer_discl">
					Manchester city 2018.All rights reserved.
				</div>
			</footer>
		)
	}
}

export default Footer
