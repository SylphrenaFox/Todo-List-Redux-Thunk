import { useSelector, useDispatch } from 'react-redux';
import { setTodoItem, requestAddTodo } from '../actions';
import styles from '../App.module.css';
import { selectTodoItem, selectIsCreating } from '../selectors/selectors';

export const AddTodo = () => {
	const isCreating = useSelector(selectIsCreating);
	const todoItem = useSelector(selectTodoItem);
	const dispatch = useDispatch();

	const handleSubmitButton = (event) => {
		event.preventDefault();
		dispatch(requestAddTodo(todoItem));
		dispatch(setTodoItem(''));
	};

	return (
		<div>
			<form onSubmit={handleSubmitButton}>
				<input
					className={styles.todoInput}
					type="text"
					value={todoItem}
					placeholder="Введите задачу"
					onChange={({ target }) => dispatch(setTodoItem(target.value))}
				/>
				<button
					type="submit"
					className={styles.submitButton}
					disabled={isCreating}
				>
					Создать задачу
				</button>
			</form>
		</div>
	);
};
