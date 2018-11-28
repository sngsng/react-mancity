import React     from 'react'
import PropTypes from 'prop-types'

const PlayerCard = props => {

	const {bck, number, name, lastName} = props

	return (
		<div className="player_card_wrapper">
			<div
				className="player_card_thmb"
				style={{
					background: `#f2f9ff url(${bck})`
				}}
			/>
			<div className="player_card_nfo">
				<div className="player_card_number">{number}</div>
				<div className="player_card_name">
					<span>{name}</span>
					<span>{lastName}</span>
				</div>
			</div>
		</div>
	)
}

PlayerCard.propTypes = {

	number: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	lastName: PropTypes.string.isRequired,
	bck: PropTypes.string.isRequired
}

export default PlayerCard
