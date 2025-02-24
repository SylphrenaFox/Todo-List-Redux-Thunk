import { setIsDeleting } from './actions';
import { requestGetTodos } from './requestGetTodos';

export const requestDeleteTodo = (id) => {
	return (dispatch) => {
		dispatch(setIsDeleting(true));
		fetch(`http://localhost:3003/todos/${id}`, {
			method: 'DELETE',
		})
			.then(() => dispatch(requestGetTodos()))
			.finally(() => dispatch(setIsDeleting(false)));
	};
};
