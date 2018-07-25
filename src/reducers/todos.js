// const ADD_TODO = "ADD_TODO";
// const EDIT_TODO = "EDIT_TODO";
// const COMPLETE_TODO = "COMPLETE_TODO";

const initialState = [
  { id: 1, name: 'todolist1', status: true, complete: false },
  { id: 2, name: 'todolist2', status: true, complete: false },
  { id: 3, name: 'todolist3', status: true, complete: false }
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    // case ADD_TODO:
    //   return [
    //     ...state,
    //     {
    //       id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
    //       completed: false,
    //       text: action.text
    //     }
    //   ];

    // case EDIT_TODO:
    //   return state.map(
    //     todo => (todo.id === action.id ? { ...todo, text: action.text } : todo)
    //   );

    // case COMPLETE_TODO:
    //   return state.map(
    //     todo =>
    //       todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
    //   );

    default:
      return state;
  }
}
