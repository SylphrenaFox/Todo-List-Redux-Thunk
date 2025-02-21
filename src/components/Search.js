import styles from '../App.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { debounce } from '../utils/debounce';
import { setSearchQuery } from '../actions';
import { selectSearchQuery } from '../selectors/selectors';

export const Search = () => {
	const searchQuery = useSelector(selectSearchQuery);
	const dispatch = useDispatch();

	const debouncedSearchChange = debounce((value) => {
		dispatch(setSearchQuery(value));
	}, 250);

	const handleSearchChange = ({ target }) => {
		debouncedSearchChange(target.value);
	};
	return (
		<div>
			<input
				type="text"
				className={styles.searchInput}
				placeholder="Поиск задачи"
				value={searchQuery}
				onChange={handleSearchChange}
			/>
		</div>
	);
};
