import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function FiveSecondCountdown() {
	const [countdownValue, setCountdownValue] = useState(5)
	const router = useRouter()

	useEffect(() => {
		const timer = setInterval(() => {
			setCountdownValue((prevValue) => {
				if (prevValue > 0) {
					return prevValue - 1
				} else {
					clearInterval(timer)
					router.push('/gameshow')
					return prevValue
				}
			})
		}, 1000)

		return () => {
			clearInterval(timer)
		}
	}, [router])

	return (
		<div className="flex flex-col justify-center items-center h-screen">
			<h2 className="text-center text-2xl mb-4">Game will begin in</h2>
			<span className="countdown font-mono text-6xl">
				<span style={{ '--value': countdownValue }}></span>
			</span>
		</div>
	)
}
