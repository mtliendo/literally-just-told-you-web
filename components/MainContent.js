import React, { useState } from 'react'
import { MultipleChoiceQuizArea } from './MultipleChoiceQuizArea'
import { Stats } from './Stats'
import { ProgressArrows } from './ProgressArrows'
import DisplayWinner from './DisplayWinner'

export const MainContent = ({
	updateGame,
	currentPlayer,
	currentQuestion,
	currentRoundInfo,
	isGameOver,
	players,
}) => {
	const [isCorrect, setIsCorrect] = useState(null)
	const updateIsCorrect = (correctStatus) => {
		setIsCorrect({ correct: correctStatus })
	}
	return (
		<div className="flex-grow p-4 ml-64 flex flex-col">
			{!isGameOver ? (
				<>
					<Stats
						currentRound={currentRoundInfo.id}
						currentPlayer={currentPlayer.name}
						roundName={currentRoundInfo.name}
						roundPointValue={currentRoundInfo.pointValue}
					/>
					<MultipleChoiceQuizArea
						currentQuestion={currentQuestion}
						updateIsCorrect={updateIsCorrect}
					/>
					<ProgressArrows updateGame={updateGame} isCorrect={isCorrect} />
				</>
			) : (
				<DisplayWinner />
			)}
		</div>
	)
}
