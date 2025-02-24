import { requestGetTodos } from './requestGetTodos';
import { setIsUpdating } from './actions';

export const requestUpdateTodo = (todoId, isCompleted) => {
	return (dispatch) => {
		dispatch(setIsUpdating(true));

		fetch(`http://localhost:3003/todos/${todoId}`, {
			method: 'PATCH',
			headers: { 'Content-type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				completed: !isCompleted,
			}),
		})
			.then((rawResponse) => rawResponse.json())

			.then((updatedTodo) => {
				dispatch(requestGetTodos());
			})
			.finally(() => dispatch(setIsUpdating(false)));
	};
};
