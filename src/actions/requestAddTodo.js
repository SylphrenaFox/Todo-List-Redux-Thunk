import { setIsCreating, setTodos } from './actions';

export const requestAddTodo = (todoItem) => {
	return (dispatch) => {
		dispatch(setIsCreating(true));
		fetch('http://localhost:3003/todos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				id: Date.now(),
				title: todoItem,
				completed: false,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((newTodo) => {
				dispatch(setTodos((prevTodos) => [...prevTodos, newTodo]));
			})
			.finally(() => dispatch(setIsCreating(false)));
	};
};
