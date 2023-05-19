import React from 'react'
import { AnswerModal } from './AnswerModal'

export const MultipleChoiceQuizArea = ({
	currentQuestion,
	updateIsCorrect,
}) => {
	const checkIfCorrect = (selectedAnswer) => {
		if (selectedAnswer.isCorrect) {
			updateIsCorrect(true)
		} else {
			updateIsCorrect(false)
		}
	}

	// 1. Basketball
	// 2. Cecelia Martinez
	//3. Manchester city
	// 4. Math
	// 5. Underhill
	// 6. MagnoliaJS

	return (
		<div className="flex flex-col justify-center items-center mt-24">
			<h1 className="text-6xl py-4 text-center">{currentQuestion.text}</h1>

			<section className="flex flex-col max-w-md w-full mt-12">
				{currentQuestion.answers.map((answer, index) => {
					const indexColor = {
						0: 'primary',
						1: 'secondary',
						2: 'accent',
					}
					const buttonColor = `btn-secondary`
					return (
						<>
							<label
								htmlFor={`my-modal-${index}`}
								className={`btn ${buttonColor} my-2`}
								onClick={() => {
									checkIfCorrect(answer)
								}}
							>
								{answer.text}
							</label>
							<AnswerModal
								selectedAnswer={answer}
								modalId={`my-modal-${index}`}
							/>
						</>
					)
				})}
			</section>
		</div>
	)
}
