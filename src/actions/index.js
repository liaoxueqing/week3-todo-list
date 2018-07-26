export const editTodo = (id, name) => ({ type: 'EDIT_TODO', id, name });
export const addTodo = name => ({ type: 'ADD_TODO', name });
export const deleteTodo = id => ({ type: 'DELETE_TODO', id });
export const completeTodo = id => ({ type: 'COMPLETE_TODO', id });
export const canEditTodo = id => ({ type: 'CAN_EDIT_TODO', id });
export const searchTodo = searchItem => ({ type: 'SEARCH_TODO', searchItem });
