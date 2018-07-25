// import * as types from "../constants/ActionTypes";

// export const completeTodo = id => ({ type: types.COMPLETE_TODO, id });
// export const setVisibilityFilter = filter => ({
//   type: types.SET_VISIBILITY_FILTER,
//   filter
// });

// const addTodoItem = name => {
//   return {
//     type: "ADD_TODO_ITEM",
//     payload: { name: name, id: Math.random(), completed: false }
//   };
// };

export const editTodo = (id, name) => ({ type: 'EDIT_TODO', id, name });
export const addTodo = name => ({ type: 'ADD_TODO', name });
export const deleteTodo = id => ({ type: 'DELETE_TODO', id });
export const completeTodo = id => ({ type: 'COMPLETE_TODO', id });
export const canEditTodo = id => ({ type: 'CAN_EDIT_TODO', id });
// const updateToDo = (id, name) => {
//   return {
//     type: "TEST_ACTION",
//     payload: { id: id, name: name }
//   };
// };
