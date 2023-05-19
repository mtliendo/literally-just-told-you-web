import { useState, useEffect } from 'react'
import * as gen from '@/utils/generated'
import { Amplify } from '@aws-amplify/core'
Amplify.configure(gen.config)

let id = 0
const QuizForm = () => {
	const [question, setQuestion] = useState('')
	const [isSubmitting, setIsSubmitting] = useState(false)

	const [answers, setAnswers] = useState([
		{ text: '', isCorrect: false },
		{ text: '', isCorrect: false },
		{ text: '', isCorrect: false },
	])

	const handleAnswerChange = (text, index) => {
		const newAnswers = [...answers]
		newAnswers[index].text = text
		setAnswers(newAnswers)
	}

	const handleCheckBoxChange = (index) => {
		const newAnswers = answers.map((answer, i) => {
			return i === index
				? { ...answer, isCorrect: true }
				: { ...answer, isCorrect: false }
		})
		setAnswers(newAnswers)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		id += 1
		// handle the form submission here
		console.log({
			id,
			text: question,
			answers,
		})
		gen
			.publish(
				'chainreact',
				JSON.stringify({
					id,
					text: question,
					answers,
				})
			)
			.then(() => {
				setQuestion('')
				setIsSubmitting(true)
				setAnswers([
					{ text: '', isCorrect: false },
					{ text: '', isCorrect: false },
					{ text: '', isCorrect: false },
				])
			})
	}
	useEffect(() => {
		if (isSubmitting) {
			const timer = setTimeout(() => {
				setIsSubmitting(false)
			}, 3000)
			return () => clearTimeout(timer)
		}
	}, [isSubmitting])

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<input
				className="w-full p-2 border border-gray-300 rounded"
				type="text"
				placeholder="Enter your question here..."
				onChange={(e) => {
					setQuestion(e.target.value)
				}}
				value={question}
			/>
			{answers.map((answer, index) => (
				<div key={index} className="flex items-center space-x-2">
					<input
						type="checkbox"
						checked={answer.isCorrect}
						onChange={() => handleCheckBoxChange(index)}
						className="form-checkbox text-blue-600"
					/>
					<input
						type="text"
						placeholder={`Answer ${index + 1}`}
						onChange={(e) => handleAnswerChange(e.target.value, index)}
						value={answer.text}
						className="w-full p-2 border border-gray-300 rounded"
					/>
				</div>
			))}
			<button
				className="w-full p-2 bg-blue-600 text-white rounded"
				type="submit"
				disabled={isSubmitting}
			>
				{isSubmitting ? 'Submitting...' : 'Submit'}
			</button>
		</form>
	)
}

export default QuizForm
