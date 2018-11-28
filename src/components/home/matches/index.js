import React from 'react'
import {Tag} from '../../ui/misc'
import Blocks from './Blocks'

const Matches = () => {
	return (
		<div className="home_matches_wrapper">
			<div className="container">
				<Tag
					bck ="#0e1731"
					fontSize={50}
					color ="#ffffff"
				>
					Matches
				</Tag>
				<Blocks/>
				<Tag
					link="/the_team"
					bck ="#ffffff"
					fontSize={22}
					color ="#0e1731"
				>
					See more matches
				</Tag>

			</div>
		</div>
	)
}

export default Matches
