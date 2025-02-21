import styles from '../App.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsSortTurnedOn } from '../selectors/selectors';
import { setIsSortTurnedOn } from '../actions';

export const Sort = () => {
	const isSortTurnedOn = useSelector(selectIsSortTurnedOn);
	const dispatch = useDispatch();

	return (
		<button
			className={styles.sortButton}
			onClick={() => dispatch(setIsSortTurnedOn(!isSortTurnedOn))}
		>
			{isSortTurnedOn ? 'Отменить сортировку' : 'Сортировать'}
		</button>
	);
};
