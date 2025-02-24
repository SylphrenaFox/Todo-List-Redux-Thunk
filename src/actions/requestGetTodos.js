import { setIsLoading, setTodos } from './actions';

export const requestGetTodos = () => {
	return (dispatch) => {
		dispatch(setIsLoading(true));
		fetch('http://localhost:3003/todos')
			.then((response) => response.json())
			.then((data) => {
				dispatch(setTodos(data));
			})
			.finally(() => dispatch(setIsLoading(false)));
	};
};
