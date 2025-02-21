export const setTodoItem = (delta) => ({
	type: 'SET_TODO_ITEM',
	payload: delta,
});
export const setTodos = (delta) => ({
	type: 'SET_TODOS',
	payload: delta,
});
export const setIsSortTurnedOn = (delta) => ({
	type: 'IS_SORT_TURNED_ON',
	payload: delta,
});
export const setSearchQuery = (delta) => ({
	type: 'SET_SEARCH_QUERY',
	payload: delta,
});
export const setIsCreating = (delta) => ({
	type: 'IS_CREATING',
	payload: delta,
});
export const setIsUpdating = (delta) => ({
	type: 'IS_UPDATING',
	payload: delta,
});
export const setIsDeleting = (delta) => ({
	type: 'IS_DELETING',
	payload: delta,
});
export const setIsLoading = (delta) => ({
	type: 'IS_LOADING',
	payload: delta,
});
