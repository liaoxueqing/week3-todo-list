const ADD_TODO = 'ADD_TODO';
const EDIT_TODO = 'EDIT_TODO';
const COMPLETE_TODO = 'COMPLETE_TODO';
const CAN_EDIT_TODO = 'CAN_EDIT_TODO';
const SEARCH_TODO = 'SEARCH_TODO';
/**
 * status:true可编辑状态
 * status:false不可编辑状态
 */
const initialState = {
  filterTodos: [],
  searchItem: '',
  myTodos: [
    { id: 1, name: 'todolist1', status: false, completed: false },
    { id: 2, name: 'todolist2', status: false, completed: false },
    { id: 3, name: 'todolist3', status: false, completed: false }
  ]
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        filterTodos: state.filterTodos,
        searchItem: state.searchItem,
        myTodos: [
          ...state.myTodos,
          {
            id: state.myTodos.length + 1,
            name: action.name,
            status: false,
            completed: false
          }
        ]
      };

    // case EDIT_TODO:
    //   return state.myTodos.map(
    //     todo =>
    //       todo.id === action.id
    //         ? {
    //             searchItem: state.searchItem,
    //             myTodos: [
    //               ...state.myTodos,
    //               { ...todo, name: action.name, status: false }
    //             ]
    //           }
    //         : {
    //             searchItem: state.searchItem,
    //             myTotodo: [...state.myTodos, { ...todo }]
    //           }
    //   );

    case EDIT_TODO:
      state.myTodos.map(todo => {
        if (todo.id === action.id) {
          todo.name = action.name;
          todo.status = false;
        }
        return todo;
      });
      return {
        filterTodos: state.filterTodos,
        searchItem: state.searchItem,
        myTodos: [...state.myTodos]
      };

    case COMPLETE_TODO:
      state.myTodos.map(todo => {
        if (todo.id === action.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        filterTodos: state.filterTodos,
        searchItem: state.searchItem,
        myTodos: [...state.myTodos]
      };

    case CAN_EDIT_TODO:
      state.myTodos.map(todo => {
        if (todo.id === action.id) {
          todo.status = !todo.status;
        }
        return todo;
      });
      return {
        filterTodos: state.filterTodos,
        searchItem: state.searchItem,
        myTodos: [...state.myTodos]
      };

    case SEARCH_TODO:
      console.log(action.searchItem);
      const myTodos = state.myTodos;
      const filterTodos = [];
      myTodos.map(todo => {
        if (todo.name.includes(action.searchItem)) {
          filterTodos.push(todo);
        }
      });
      console.log('search_todo', action.searchItem, filterTodos);
      return {
        filterTodos: filterTodos,
        searchItem: state.searchItem,
        myTodos: [...state.myTodos]
      };
    // return state.myTodos.map(
    //   todo =>
    //     todo.name === action.id
    //       ? {
    //           searchItem: state.searchItem,
    //           myTodos: [...state.myTodos, { ...todo, status: !action.status }]
    //         }
    //       : {
    //           searchItem: state.searchItem,
    //           myTodos: [...state.myTodos, { ...todo }]
    //         }
    // );

    default:
      return state;
  }
}
