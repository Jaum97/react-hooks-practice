import React, { useReducer } from 'react'

const Count: React.FC = () => {
	const [count, dispatch] = useReducer((state, action) => {
		switch (action) {
			case 'add':
				return state + 1
			case 'remove':
				return state - 1
			default:
				return state
		}
	}, 0)
	return (
		<div>
			{count}
			<button onClick={() => dispatch('add')}>+</button>
			<button onClick={() => dispatch('remove')}>-</button>
		</div>
	)
}

export default Count
