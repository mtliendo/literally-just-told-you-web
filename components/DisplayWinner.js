import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

export default () => {
	const { width, height } = useWindowSize()
	return (
		<>
			<Confetti width={width} height={height} />
			<div className="flex justify-center align-middle">
				<h1 className="text-center text-white font-bold text-5xl mt-4">
					Congrats! You're all winners...ignore the scoreboard to the left 😜
				</h1>
			</div>
		</>
	)
}
