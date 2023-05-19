import React from 'react'
import { AnswerModal } from './AnswerModal'

export const MultipleChoiceQuizArea = ({
	currentQuestion,
	updateIsCorrect,
}) => {
	const indexColor = {
		0: 'primary',
		1: 'secondary',
		2: 'accent',
	}

	const checkIfCorrect = (selectedAnswer) => {
		if (selectedAnswer.isCorrect) {
			updateIsCorrect(true)
		} else {
			updateIsCorrect(false)
		}
	}

	return (
		<div className="flex flex-col justify-center items-center mt-24">
			<h1 className="text-6xl py-4">{currentQuestion.text}</h1>

			<section className="flex flex-col max-w-md w-full mt-12">
				{currentQuestion.answers.map((answer, index) => {
					return (
						<>
							<label
								htmlFor={`my-modal-${index}`}
								className={`btn btn-${indexColor[index]} my-2`}
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
