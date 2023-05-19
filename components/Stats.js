import React from 'react'

export const Stats = ({
	currentRound,
	currentPlayer,
	roundName,
	roundPointValue,
}) => {
	return (
		<div>
			<p className="text-center">
				Round {currentRound} | {roundName} | {roundPointValue}
			</p>
			<h1 className="text-center text-2xl">Current Player: {currentPlayer}</h1>
		</div>
	)
}
