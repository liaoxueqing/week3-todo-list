import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  editTodo,
  completeTodo,
  addTodo,
  deleteTodo,
  canEditTodo
} from '../actions/index';
class ToDoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.todos);
    return (
      <div>
        <input
          type="text"
          placeholder="搜索item"
          ref={element => {
            this.seachItem = element;
          }}
        />
        <button
          onClick={e => {
            this.props.addTodo(this.seachItem.value);
          }}
        >
          搜索
        </button>
        <div />
        <input
          type="text"
          placeholder="新增item"
          ref={element => {
            this.lastItem = element;
          }}
        />
        <button
          onClick={e => {
            this.props.addTodo(this.lastItem.value);
          }}
        >
          +
        </button>
        <table>
          <tbody>
            {this.props.todos.map(item => {
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
                  <td>{item.status ? 'true' : 'false'}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
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
  canEditTodo
  // noEditTodo
};
export default connect(
  mapActionToState,
  mapActionToDispatch
)(ToDoList);
