import React, {Component} from 'react'
import {matches}          from '../../../firebase'
import {firebaseLooper}   from '../../ui/misc'
import MatchesBlock       from '../../ui/matches-block'
import Slide from 'react-reveal/Slide'

class Blocks extends Component {

	constructor(props) {
		super(props)
		this.state = {
			matches: []
		}
	}

	componentDidMount() {
		matches.limitToLast(6).once('value').then((snapshot) => {

			const matches = firebaseLooper(snapshot).reverse()
			this.setState({
				matches
			})
		})
	}

	showMatches = () => this.state.matches.map((match) => (

		<Slide bottom
		       key={match.id}>
			<div
				className="item"
			>
				<div className="wrapper">
					<MatchesBlock match={match}/>
				</div>
			</div>
		</Slide>

	))

	render() {
		return (
			<div className="home_matches">
				{this.showMatches()}
			</div>
		)
	}
}

export default Blocks
