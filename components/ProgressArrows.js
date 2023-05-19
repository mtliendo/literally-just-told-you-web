import React from 'react'

export const ProgressArrows = ({ updateGame, isCorrect }) => {
	return (
		<div className="flex justify-between items-center">
			<button className="btn">Previous</button>
			<button className="btn" onClick={() => updateGame(isCorrect)}>
				Next
			</button>
		</div>
	)
}
