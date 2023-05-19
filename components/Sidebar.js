import React from 'react'

export const Sidebar = ({ players = [] }) => {
	return (
		<div className="bg-blue-500 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:translate-x-0 transition duration-200 ease-in-out">
			<h2 className="text-2xl font-extrabold mb-6">Leaderboard</h2>
			<nav>
				{players.map((player, index) => (
					<div
						key={index}
						className="py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white flex justify-between items-center"
					>
						<div>{player.name}</div>
						<div>{player.score}</div>
					</div>
				))}
			</nav>
		</div>
	)
}
