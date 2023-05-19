export default {
	isGameOver: false,
	players: [
		{ id: 1, name: 'Jack Herrington', score: 0 },
		{ id: 2, name: 'Robin Heinze', score: 0 },
		{ id: 3, name: 'Mike Hartington', score: 0 },
	],
	numRounds: 2,
	currentPlayer: 1,
	currentRound: 1,
	rounds: [
		{
			id: 1,
			name: 'Computer Knowledge',
			pointValue: 100,
			currentQuestion: 1,
			questions: [
				{
					id: 1,
					text: 'What does HTTP stand for in a website address?',
					answers: [
						{ text: 'Davenport', isCorrect: false },
						{ text: 'Madison', isCorrect: false },
						{ text: 'HyperText Transfer Protocol', isCorrect: true },
					],
				},
				{
					id: 2,
					text: 'What Harvard dropout co-founded Microsoft?	',
					answers: [
						{ text: 'Bill Gates', isCorrect: true },
						{ text: 'Sebastion', isCorrect: false },
						{ text: 'Nicole', isCorrect: false },
					],
				},
				{
					id: 3,
					text: 'When referring to computer memory, what does that acronym RAM stand for?',
					answers: [
						{ text: 'The man', isCorrect: false },
						{ text: 'Random Access Memory', isCorrect: true },
						{ text: 'ChainReact', isCorrect: false },
					],
				},
			],
		},
		{
			id: 2,
			name: 'Intro (ILJTY)',
			pointValue: 200,
			currentQuestion: 1,
			questions: [
				{
					id: 1,
					text: 'What is the capital of Turkey?',
					exclude: ['Jack Herrington'],
					answers: [
						{ text: 'Davenport', isCorrect: false },
						{ text: 'Madison', isCorrect: false },
						{ text: 'Des Moines', isCorrect: true },
					],
				},
				{
					id: 2,
					text: 'What is my middle name?',
					exclude: ['Robin Heinze'],
					answers: [
						{ text: 'Thomas', isCorrect: true },
						{ text: 'Sebastion', isCorrect: false },
						{ text: 'Nicole', isCorrect: false },
					],
				},
				{
					id: 3,
					text: 'Who is Gant?',
					exclude: ['Mike Hartington'],
					answers: [
						{ text: 'The man', isCorrect: false },
						{ text: 'Laborde', isCorrect: true },
						{ text: 'ChainReact', isCorrect: false },
					],
				},
			],
		},
	],
}
