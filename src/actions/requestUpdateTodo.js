import { setTodos, setIsUpdating } from './actions';

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
				dispatch(
					setTodos((prevTodos) =>
						prevTodos.map((todo) =>
							todo.id === updatedTodo.id ? updatedTodo : todo,
						),
					),
				);
			})
			.finally(() => dispatch(setIsUpdating(false)));
	};
};
