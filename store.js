import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import mockTaskData from './components/Tasks/mockTaskData';

const initState = {
	tasks: mockTaskData,
};


// ### ACTION TYPES

export const actionTypes = {
	TOGGLE_TASK: '@DuDigital/TOGGLE_TASK',
};


// ### REDUCERS

export const reducer = (state = initState, action) => {
	switch (action.type) {

		case actionTypes.TOGGLE_TASK:
			const newTaskArr = state.tasks.map((task) => {
				if (task.id === action.taskId) {
					task.done = !task.done;
				}

				return task;
			});

			return Object.assign({}, state, {
				tasks: newTaskArr,
			});

		default:
			return state;
	}
};


// ### ACTIONS

/**
 * Toggles tasks "done"-state
 *
 * @param {number} taskId
 *
 * @returns {function(*): *}
 */
export const toggleTask = (taskId) => dispatch => {
	return dispatch({
		type: actionTypes.TOGGLE_TASK,
		taskId,
	});
};


export function initializeStore (initialState = initState) {
	return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}
