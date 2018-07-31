export const editTodo = (id, name) => ({ type: 'EDIT_TODO', id, name });
export const addTodo = (name, time) => ({ type: 'ADD_TODO', name, time });
export const deleteTodo = id => ({ type: 'DELETE_TODO', id });
export const completeTodo = id => ({ type: 'COMPLETE_TODO', id });
export const canEditTodo = id => ({ type: 'CAN_EDIT_TODO', id });
export const searchTodo = searchItem => ({ type: 'SEARCH_TODO', searchItem });
export const setDetailTodo = id => ({ type: 'SET_DETAIL_TODO', id });
export const gotTodos = todos => ({ type: 'GOT_TODOS', todos });
export const getTodosFromServer = () => dispatch => {
  // return fetch('./api/todos')
  return fetch('./todos.json')
    .then(data => data.json())
    .then(todos => {
      return dispatch({
        type: 'GOT_TODOS',
        todos
      });
    });
};
