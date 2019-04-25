import React from 'react'
import Count from './components/Count'
import ShoppingList from './components/ShoppingList'

import './App.css'

const App: React.FC = () => {
	return (
		<div className="App">
			<Count />
			<ShoppingList />
		</div>
	)
}

export default App
