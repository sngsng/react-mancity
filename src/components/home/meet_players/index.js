import React, {Component} from 'react'
import stripes            from '../../../resources/images/stripes.png'
import {Tag}              from '../../ui/misc'
import Reveal             from 'react-reveal/Reveal'
import HomeCards from './HomeCards'

class MeetPlayers extends Component {

	constructor(props) {
		super(props)
		this.state = {
			show: false
		}
	}

	render() {
		return (
			<Reveal
				fraction={0.7}
				onReveal={() => {
					this.setState({
						show: true
					})
				}}
			>
				<div
					className="home_meetplayers"
					style={{
						background: `#ffffff url(${stripes}`
					}}
				>
					<div className="container">
						<div className="home_meetplayers_wrapper">
							<div className="home_card_wrapper">
								<HomeCards
									show={this.state.show}
								/>
							</div>
							<div className="home_text_wrapper">
								<div>
									<Tag
										bck="#0e1731"
										fontSize={100}
										color="#ffffff"
										add={{
											display: 'inline-block',
											marginBottom: '20px'
										}}
									>
										Meet
									</Tag>
									<Tag
										bck="#0e1731"
										fontSize={100}
										color="#ffffff"
										add={{
											display: 'inline-block',
											marginBottom: '20px'
										}}
									>
										The
									</Tag>
									<Tag
										bck="#0e1731"
										fontSize={100}
										color="#ffffff"
										add={{
											display: 'inline-block',
											marginBottom: '20px'
										}}
									>
										Players
									</Tag>
									<Tag
										bck="#ffffff"
										fontSize={27}
										color="#0e1731"
										link="/the_team"
										add={{
											display: 'inline-block',
											marginBottom: '20px',
											border: '1px solid #0e1731'
										}}
									>
										Meet them here
									</Tag>

								</div>
							</div>
						</div>
					</div>
				</div>
			</Reveal>
		)
	}
}

export default MeetPlayers
