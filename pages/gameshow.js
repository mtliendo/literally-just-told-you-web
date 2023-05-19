import React, { useEffect, useState } from 'react'
import { Sidebar } from '../components/Sidebar'
import { MainContent } from '../components/MainContent'
import sampledata from '@/sampledata'
import cloneDeep from 'lodash/cloneDeep'
import {
	getCurrentPlayer,
	getCurrentQuestion,
	getCurrentRoundInfo,
} from '@/utils/gameutils'
import * as gen from '@/utils/generated'
import { Amplify } from '@aws-amplify/core'
Amplify.configure(gen.config)

export default function Home() {
	const [gameData, setGameData] = useState(sampledata)

	const currentPlayer = getCurrentPlayer(gameData)
	const currentRoundInfo = getCurrentRoundInfo(gameData)
	const currentQuestion = getCurrentQuestion(gameData)

	const updateGame = ({ correct }) => {
		const newGameData = cloneDeep(gameData)

		//update the current players score
		newGameData.players[currentPlayer.id - 1].score += correct
			? currentRoundInfo.pointValue
			: 0

		//update who the current player is
		newGameData.players.length === currentPlayer.id
			? (newGameData.currentPlayer = 1)
			: (newGameData.currentPlayer += 1)

		//update the current round if needed, otherwise update the current question
		if (currentRoundInfo.questions.length === currentQuestion.id) {
			newGameData.currentRound += 1
			newGameData.currentQuestion = 1
		} else {
			newGameData.rounds[newGameData.currentRound - 1].currentQuestion += 1
		}
		setGameData(newGameData)
	}

	useEffect(() => {
		const sub = gen.subscribe('chainreact', ({ data }) => {
			console.log(JSON.parse(data))
			gameData.rounds[5].questions.push(JSON.parse(data))
		})

		return () => {
			sub.unsubscribe()
		}
	}, [])

	return (
		<>
			<main className="flex h-screen">
				<Sidebar players={gameData.players} />
				<MainContent
					updateGame={updateGame}
					currentPlayer={currentPlayer}
					currentQuestion={currentQuestion}
					currentRoundInfo={currentRoundInfo}
					isGameOver={gameData.isGameOver}
					players={gameData.players}
				/>
			</main>
		</>
	)
}
