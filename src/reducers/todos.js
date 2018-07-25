const ADD_TODO = 'ADD_TODO';
const EDIT_TODO = 'EDIT_TODO';
const COMPLETE_TODO = 'COMPLETE_TODO';
const CAN_EDIT_TODO = 'CAN_EDIT_TODO';
const SEACH_TODO = 'SEACH_TODO';
/**
 * status:true可编辑状态
 * status:false不可编辑状态
 */
const initialState = [
  { id: 1, name: 'todolist1', status: false, completed: false },
  { id: 2, name: 'todolist2', status: false, completed: false },
  { id: 3, name: 'todolist3', status: false, completed: false }
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.length + 1,
          name: action.name,
          status: false,
          completed: false
        }
      ];

    case EDIT_TODO:
      return state.map(
        todo =>
          todo.id === action.id
            ? { ...todo, name: action.name, status: false }
            : todo
      );

    case COMPLETE_TODO:
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    case CAN_EDIT_TODO:
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, status: !action.status } : todo
      );

    case SEACH_TODO:
      console.log('ffff');
    // return state.map(
    //   todo =>
    //     todo.id === action.id ? { ...todo, status: !action.status } : todo
    // );

    default:
      return state;
  }
}
