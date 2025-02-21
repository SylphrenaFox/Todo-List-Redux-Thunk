import styles from '../App.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
	selectIsLoading,
	selectTodos,
	selectIsUpdating,
	selectIsDeleting,
	selectSearchQuery,
	selectIsSortTurnedOn,
} from '../selectors/selectors';
import { requestGetTodos, requestUpdateTodo, requestDeleteTodo } from '../actions';

export const TodoList = () => {
	const isLoading = useSelector(selectIsLoading);
	const isUpdating = useSelector(selectIsUpdating);
	const isDeleting = useSelector(selectIsDeleting);
	const todos = useSelector(selectTodos);
	const searchQuery = useSelector(selectSearchQuery);
	const isSortTurnedOn = useSelector(selectIsSortTurnedOn);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(requestGetTodos());
	}, []);

	const filteredTodos = Array.isArray(todos)
		? todos.filter((todo) =>
				todo.title?.toLowerCase().includes(searchQuery.toLowerCase()),
			)
		: [];

	const sortedTodos = isSortTurnedOn
		? [...filteredTodos].sort((a, b) => a.title.localeCompare(b.title))
		: filteredTodos;

	return (
		<div>
			{isLoading ? (
				<div className={styles.loader}></div>
			) : (
				sortedTodos.map(({ id, title, completed }) => (
					<div key={id} className={styles.todoItem}>
						{title}
						<button
							onClick={() => dispatch(requestUpdateTodo(id, completed))}
							className={styles.updateButton}
							disabled={isUpdating}
						>
							{completed ? '✅' : '❌'}
						</button>
						<button
							className={styles.deleteButton}
							disabled={isDeleting}
							id={id}
							onClick={() => dispatch(requestDeleteTodo(id))}
						>
							Удалить
						</button>
					</div>
				))
			)}
		</div>
	);
};
