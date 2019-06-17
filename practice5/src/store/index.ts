import * as Redux from 'redux'

const INITIAL_STATE = {
	data: ['React Native', 'ReactJS']
}

function courses(state = INITIAL_STATE, action: any) {
	switch (action.type) {
		case 'ADD_COURSE':
			return { ...state, data: [...state.data, action.title] }
		default:
			return state
	}
}

const store = Redux.createStore(courses)

export default store
