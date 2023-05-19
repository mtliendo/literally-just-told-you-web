import Link from 'next/link'
import React from 'react'

export default function Home() {
	return (
		<div
			className="hero min-h-screen"
			style={{
				backgroundImage: `url("/images/stock/photo-1507358522600-9f71e620c44e.jpg")`,
			}}
		>
			<div className="hero-overlay bg-opacity-60"></div>
			<div className="hero-content text-center text-neutral-content">
				<div className="max-w-md">
					<h1 className="mb-5 text-5xl font-bold">
						I Literally Just Told You! (nerd edition!)
					</h1>
					<p className="mb-5">
						A quiz game to test your knowledge of general nerd stuff. Some
						questions are pre-determinded, others...not so much.
					</p>
					<p className="my-5">Ready?</p>
					<Link href="/countdown">
						<button className="btn btn-primary">Let's Play!</button>
					</Link>
				</div>
			</div>
		</div>
	)
}
