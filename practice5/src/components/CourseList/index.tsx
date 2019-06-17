import * as React from 'react'
import * as Redux from 'react-redux'

export default function CourseList() {
	const qty = 2

	const courses = Redux.useSelector(
		(state: any) => state.data.slice(0, qty),
		[qty]
	)
	const dispatch = Redux.useDispatch()

	function addCourse() {
		dispatch({ type: 'ADD_COURSE', title: 'GraphQL' })
	}
	return (
		<React.Fragment>
			<ul>
				{courses.map((course: any) => (
					<li key={course}>{course}</li>
				))}
			</ul>
			<button type="button" onClick={addCourse}>
				Add Course
			</button>
		</React.Fragment>
	)
}
