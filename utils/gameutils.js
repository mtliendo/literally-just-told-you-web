export const getCurrentRoundInfo = (gameData) => {
	console.log('my game data', gameData)
	if (gameData.currentRound > gameData.numRounds) {
		gameData.isGameOver = true
		return {
			currentQuestion: 'gameover',
			questions: [],
		}
	}
	return gameData.rounds.find((round) => round.id === gameData.currentRound)
}

export const getCurrentPlayer = (gameData) => {
	return gameData.players.find((player) => player.id === gameData.currentPlayer)
}

export const getCurrentQuestion = (gameData) => {
	const { currentQuestion, questions } = getCurrentRoundInfo(gameData)

	if (currentQuestion === 'gameover') {
		return 'gameover'
	}
	return questions.find((question) => {
		return question.id === currentQuestion
	})
}
