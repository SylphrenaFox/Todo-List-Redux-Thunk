export const initialState = {
	todos: [],
	todoItem: '',
	searchQuery: '',
	isSortTurnedOn: false,
	isLoading: false,
	isCreating: false,
	isUpdating: false,
	isDeleting: false,
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_SEARCH_QUERY': {
			return {
				...state,
				searchQuery: action.payload,
			};
		}
		case 'IS_SORT_TURNED_ON': {
			return {
				...state,
				isSortTurnedOn: action.payload,
			};
		}
		case 'SET_TODOS': {
			return { ...state, todos: action.payload };
		}
		case 'SET_TODO_ITEM': {
			return { ...state, todoItem: action.payload };
		}
		case 'IS_LOADING': {
			return { ...state, isLoading: action.payload };
		}
		case 'IS_CREATING': {
			return { ...state, isCreating: action.payload };
		}
		case 'IS_UPDATING': {
			return { ...state, isUpdating: action.payload };
		}
		case 'IS_DELETING': {
			return { ...state, isDeleting: action.payload };
		}
		default:
			return state;
	}
};
