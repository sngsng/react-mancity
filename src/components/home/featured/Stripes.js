import React, {Component} from 'react'
import {Animate}          from 'react-move'
import {easePolyOut}    from 'd3-ease'

class Stripes extends Component {

	constructor(props) {
		super(props)

		this.state = {
			stripes: [{
				background: '#98c5e9',
				left:120,
				rotate:25,
				top:-260,
				delay:0
			}, {
				background: '#ffffff',
				left:360,
				rotate:25,
				top:-397,
				delay:200
			}, {
				background: '#98c5e9',
				left:600,
				rotate:25,
				top:-498,
				delay:400
			}]
		}
	}

	showStripes = () => {

		const {stripes} = this.state

		return stripes.map((stripe, index) => (

			<Animate
				key={index}
				show={true}
				start={{
					background: '#ffffff',
					opacity:0,
					left:0,
					rotate:0,
					top:0
				}}
				enter={{
					background: [stripe.background],
					opacity:[1],
					left:stripe.left,
					rotate:[stripe.rotate],
					top:[stripe.top],
					timing:{
						delay:stripe.delay,
						duration:200,
						ease: easePolyOut
					},
					events:{

					}
				}}
			>
				{({opacity, left, rotate, top, background}) => (
					<div
						className="stripe"
						style={{
							background,
							opacity,
							transform: `rotate(${rotate}deg) translate(${left}px, ${top}px)`
						}}
					>
					</div>
				)}
			</Animate>
		))
	}

	render() {
		return (
			<div className="featured_stripes">
				{this.showStripes()}
			</div>
		)
	}
}

export default Stripes
