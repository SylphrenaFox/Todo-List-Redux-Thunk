import React from 'react';
import styles from './App.module.css';
import { AddTodo, Search, Sort, TodoList } from './components';

export const App = () => {
	return (
		<div className={styles.app}>
			<Sort />
			<AddTodo />
			<Search />
			<TodoList />
		</div>
	);
};
