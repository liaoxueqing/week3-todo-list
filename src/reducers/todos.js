const ADD_TODO = 'ADD_TODO';
const EDIT_TODO = 'EDIT_TODO';
const COMPLETE_TODO = 'COMPLETE_TODO';
const CAN_EDIT_TODO = 'CAN_EDIT_TODO';
const SEARCH_TODO = 'SEARCH_TODO';
const SET_DETAIL_TODO = 'SET_DETAIL_TODO';
const GOT_TODOS = 'GOT_TODOS';
/**
 * status:true可编辑状态
 * status:false不可编辑状态
 */
const initialState = {
  filterTodos: [],
  detailTodo: {
    id: 1,
    name: 'todolist1',
    status: false,
    completed: false,
    generateTime: '2018-7-26'
  },
  searchItem: '',
  myTodos: [
    {
      id: 1,
      name: 'todolist1',
      status: false,
      completed: false,
      generateTime: '2018-7-26'
    },
    {
      id: 2,
      name: 'todolist2',
      status: false,
      completed: false,
      generateTime: '2018-7-26'
    },
    {
      id: 3,
      name: 'todolist3',
      status: false,
      completed: false,
      generateTime: '2018-7-26'
    }
  ]
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        filterTodos: state.filterTodos,
        searchItem: state.searchItem,
        detailTodo: state.detailTodo,
        myTodos: [
          ...state.myTodos,
          {
            id: state.myTodos.length + 1,
            name: action.name,
            status: false,
            completed: false,
            generateTime: action.time
          }
        ]
      };

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
        detailTodo: state.detailTodo,
        searchItem: state.searchItem,
        myTodos: [...state.myTodos]
      };

    case GOT_TODOS:
      return {
        ...state,
        myTodos: action.todos
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
        detailTodo: state.detailTodo,
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
        detailTodo: state.detailTodo,
        searchItem: state.searchItem,
        myTodos: [...state.myTodos]
      };

    case SEARCH_TODO:
      const myTodos = state.myTodos;
      const filterTodos = [];
      myTodos.map(todo => {
        if (todo.name.includes(action.searchItem)) {
          filterTodos.push(todo);
        }
      });
      return {
        filterTodos: filterTodos,
        detailTodo: state.detailTodo,
        searchItem: state.searchItem,
        myTodos: [...state.myTodos]
      };
    case SET_DETAIL_TODO:
      let detailTodoInfo = {};
      const len = state.myTodos.length;
      for (let i = 0; i < len; i++) {
        if (state.myTodos[i].id === action.id) {
          detailTodoInfo = Object.assign({}, state.myTodos[i]);
        }
      }

      return {
        filterTodos: state.filterTodos,
        detailTodo: detailTodoInfo,
        searchItem: state.searchItem,
        myTodos: state.myTodos
      };
    default:
      return state;
  }
}
