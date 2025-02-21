import { setTodos, setIsDeleting } from './actions';

export const requestDeleteTodo = (id) => {
	return (dispatch) => {
		dispatch(setIsDeleting(true));
		fetch(`http://localhost:3003/todos/${id}`, {
			method: 'DELETE',
		})
			.then(() =>
				dispatch(
					setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id)),
				),
			)
			.finally(() => dispatch(setIsDeleting(false)));
	};
};
