import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { browserHistory } from 'react-router';
import {
  editTodo,
  completeTodo,
  addTodo,
  deleteTodo,
  canEditTodo,
  searchTodo,
  setDetailTodo
} from '../actions/index';
class ToDoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const today = new Date();
    const year = today.getFullYear();
    const mouth = today.getMonth() + 1;
    const day = today.getDate();

    console.log(today, year, mouth, day);

    const myTodos =
      this.props.todos.filterTodos.length !== 0
        ? this.props.todos.filterTodos
        : this.props.todos.myTodos;
    return (
      <div className="text-center">
        <div className="text-center margin-div">
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
        <div className="text-center margin-div">
          <input
            type="text"
            placeholder="新增item"
            ref={element => {
              this.lastItem = element;
            }}
          />
          <button
            onClick={() => {
              const time = year + '-' + mouth + '-' + day;
              this.props.addTodo(this.lastItem.value, time);
            }}
          >
            新增
          </button>
        </div>
        <div className="text-center col-md-4 margin-div">
          <table className="table">
            <thead>
              <tr>
                <th>check</th>
                <th>content</th>
                <th>time</th>
              </tr>
            </thead>
            <tbody>
              {myTodos.map(item => {
                return (
                  <tr
                    key={item.id}
                    onClick={() => {
                      this.props.setDetailTodo(item.id);
                      browserHistory.push('/todoInfo');
                    }}
                  >
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
                      // onDoubleClick={e => {
                      //   this.props.canEditTodo(item.id);
                      // }}
                      // onBlur={e => {
                      //   this.props.editTodo(item.id, e.target.innerHTML);
                      // }}
                    >
                      {item.completed ? <del>{item.name}</del> : item.name}
                    </td>
                    <td>{item.generateTime}</td>
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

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};
const mapDispatchToProps = {
  editTodo,
  completeTodo,
  addTodo,
  deleteTodo,
  canEditTodo,
  searchTodo,
  setDetailTodo
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);
