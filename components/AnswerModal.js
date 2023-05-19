import React from 'react'

export const AnswerModal = ({ selectedAnswer, modalId }) => {
	return (
		<>
			<input type="checkbox" id={modalId} className="modal-toggle" />
			<label htmlFor={modalId} className="modal cursor-pointer ml-64">
				<label className="modal-box relative" htmlFor="">
					<h3 className="text-lg font-bold text-center">
						{selectedAnswer.isCorrect
							? `Correct!`
							: `So sorry, that is incorrect.`}
					</h3>
				</label>
			</label>
		</>
	)
}
