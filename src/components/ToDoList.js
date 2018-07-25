import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  editTodo,
  completeTodo,
  addTodo,
  deleteTodo,
  canEditTodo,
  searchTodo
} from '../actions/index';
class ToDoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const myTodos =
      this.props.todos.filterTodos.length !== 0
        ? this.props.todos.filterTodos
        : this.props.todos.myTodos;
    return (
      <div className="text-center">
        <div className="text-center" style={{ margin: '10px' }}>
          <input
            type="text"
            placeholder="搜索item"
            ref={element => {
              this.searchItem = element;
            }}
          />
          <button
            onClick={() => {
              this.props.searchTodo(this.searchItem.value);
            }}
          >
            搜索
          </button>
        </div>
        <div className="text-center" style={{ margin: '10px' }}>
          <input
            type="text"
            placeholder="新增item"
            ref={element => {
              this.lastItem = element;
            }}
          />
          <button
            onClick={() => {
              this.props.addTodo(this.lastItem.value);
            }}
          >
            新增
          </button>
        </div>
        <div className="text-center col-md-4" style={{ margin: '10px auto' }}>
          <table className="table">
            <thead style={{ backgroundColor: '#555', color: '#eee' }}>
              <tr>
                <th>check</th>
                <th>content</th>
              </tr>
            </thead>
            <tbody>
              {myTodos.map(item => {
                return (
                  <tr key={item.id}>
                    <td>
                      <input
                        type="checkbox"
                        onChange={e => {
                          this.props.completeTodo(item.id);
                        }}
                      />
                    </td>
                    <td
                      contentEditable={item.status}
                      onDoubleClick={e => {
                        this.props.canEditTodo(item.id);
                      }}
                      onBlur={e => {
                        this.props.editTodo(item.id, e.target.innerHTML);
                      }}
                    >
                      {item.completed ? <del>{item.name}</del> : item.name}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
// export default ToDoList;

const mapActionToState = state => {
  return {
    todos: state.todos
  };
};
const mapActionToDispatch = {
  editTodo,
  completeTodo,
  addTodo,
  deleteTodo,
  canEditTodo,
  searchTodo
  // noEditTodo
};
export default connect(
  mapActionToState,
  mapActionToDispatch
)(ToDoList);
