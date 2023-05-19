export default {
	isGameOver: false,
	players: [
		{ id: 1, name: 'Jack Herrington', score: 0 },
		{ id: 2, name: 'Robin Heinze', score: 0 },
		{ id: 3, name: 'Mike Hartington', score: 0 },
	],
	numRounds: 6,
	currentPlayer: 1,
	currentRound: 1,
	rounds: [
		{
			id: 1,
			name: 'Portland',
			pointValue: 100,
			currentQuestion: 1,
			questions: [
				{
					id: 1,
					text: 'What is the largest city in Oregon?',
					answers: [
						{ text: 'Portland', isCorrect: true },
						{ text: 'Eugene', isCorrect: false },
						{ text: 'Salem', isCorrect: false },
					],
				},

				{
					id: 2,
					text: 'Which river flows through Portland, Oregon?',
					answers: [
						{ text: 'Columbia River', isCorrect: false },
						{ text: 'Willamette River', isCorrect: true },
						{ text: 'Snake River', isCorrect: false },
					],
				},
				{
					id: 3,
					text: 'Which NBA team is based in Portland, Oregon?',
					answers: [
						{ text: 'Lakers', isCorrect: false },
						{ text: 'Warriors', isCorrect: false },
						{ text: 'Trail Blazers', isCorrect: true },
					],
				},
			],
		},
		{
			id: 2,
			name: 'Intro to Computers',
			pointValue: 200,
			currentQuestion: 1,
			questions: [
				{
					id: 1,
					text: 'What does RAM stand for in computer terminology?',
					answers: [
						{ text: 'Random Access Memory', isCorrect: true },
						{ text: 'Read-Only Memory', isCorrect: false },
						{ text: 'Randomly Allocated Memory', isCorrect: false },
					],
				},

				{
					id: 2,
					text: 'What does CPU stand for in computer science?',
					answers: [
						{ text: 'Central Processing Unit', isCorrect: true },
						{ text: 'Computer Processing Unit', isCorrect: false },
						{ text: 'Controlled Processing Unit', isCorrect: false },
					],
				},
				{
					id: 3,
					text: 'What does CSS stand for in web development?',
					answers: [
						{ text: 'Cascading Style Sheets', isCorrect: true },
						{ text: 'Creative Style Syntax', isCorrect: false },
						{ text: 'Computer Style System', isCorrect: false },
					],
				},
			],
		},
		{
			id: 3,
			name: 'Hotels',
			pointValue: 400,
			currentQuestion: 1,
			questions: [
				{
					id: 1,
					text: 'What is the term used to describe a hotel room occupied by one person?',
					answers: [
						{ text: 'Single room', isCorrect: true },
						{ text: 'Double room', isCorrect: false },
						{ text: 'Suite', isCorrect: false },
					],
				},

				{
					id: 2,
					text: 'What does "B&B" stand for in the context of hotels?',
					answers: [
						{ text: 'Bed and Breakfast', isCorrect: true },
						{ text: 'Board and Bathe', isCorrect: false },
						{ text: 'Breakfast and Beverage', isCorrect: false },
					],
				},

				{
					id: 3,
					text: 'Which term refers to a hotel room with a separate living area and bedroom?',
					answers: [
						{ text: 'Suite', isCorrect: true },
						{ text: 'Studio', isCorrect: false },
						{ text: 'Loft', isCorrect: false },
					],
				},
			],
		},
		{
			id: 4,
			name: 'Amazing Animals',
			pointValue: 600,
			currentQuestion: 1,
			questions: [
				{
					id: 1,
					text: 'The tongue of a blue whale is so large that up to 50 people could stand on it.',
					answers: [
						{
							text: 'True, it is the largest tongue of any animal.',
							isCorrect: true,
						},
						{
							text: 'False, a blue whale tongue is not that large.',
							isCorrect: false,
						},
						{
							text: 'Not Sure, I have no idea about the size of a blue whale tongue.',
							isCorrect: false,
						},
					],
				},

				{
					id: 2,
					text: 'A group of flamingos is called a "flamboyance."',
					answers: [
						{
							text: 'True, a group of flamingos is indeed called a flamboyance.',
							isCorrect: true,
						},
						{
							text: 'False, the term flamboyance is not used for a group of flamingos.',
							isCorrect: false,
						},
						{
							text: 'Not Sure, I am unsure about the collective noun for flamingos.',
							isCorrect: false,
						},
					],
				},
				{
					id: 3,
					text: 'Honeybees communicate with each other by performing a unique "waggle dance" to indicate the direction and distance of nectar sources.',
					answers: [
						{
							text: 'True, honeybees use the waggle dance to communicate about nectar sources.',
							isCorrect: true,
						},
						{
							text: 'False, honeybees have a different way of communicating about nectar sources.',
							isCorrect: false,
						},
						{
							text: 'Not Sure, I do not know how honeybees communicate about nectar sources.',
							isCorrect: false,
						},
					],
				},
			],
		},
		{
			id: 5,
			name: 'Mobile Phones',
			pointValue: 800,
			currentQuestion: 1,
			questions: [
				{
					id: 1,
					text: 'Which company released the first commercial mobile phone?',
					answers: [
						{ text: 'Motorola', isCorrect: true },
						{ text: 'Nokia', isCorrect: false },
						{ text: 'Apple', isCorrect: false },
					],
				},

				{
					id: 2,
					text: 'What does the term "4G" refer to in mobile phone technology?',
					answers: [
						{ text: 'Fourth Generation', isCorrect: true },
						{ text: 'Four Gigabytes', isCorrect: false },
						{ text: 'Fourth Gear', isCorrect: false },
					],
				},

				{
					id: 3,
					text: 'Which mobile phone manufacturer introduced the concept of a modular smartphone?',
					answers: [
						{ text: 'Google (Project Ara)', isCorrect: true },
						{ text: 'Samsung', isCorrect: false },
						{ text: 'Apple', isCorrect: false },
					],
				},
			],
		},
		{
			id: 6,
			name: 'I Literally Just Told You!',
			pointValue: 1000,
			currentQuestion: 1,
			questions: [],
		},
	],
}
