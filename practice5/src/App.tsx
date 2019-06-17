import * as React from 'react'
import { Provider } from 'react-redux'

import store from './store'

import CourseList from './components/CourseList'

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<CourseList />
		</Provider>
	)
}

export default App
