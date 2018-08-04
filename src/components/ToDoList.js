import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Task from './Task.js';
import {
  editTodo,
  completeTodo,
  addTodo,
  deleteTodo,
  canEditTodo,
  searchTodo,
  setDetailTodo,
  gotTodos,
  getTodosFromServer,
  deleteServerTodo,
  completeServerTodo
} from '../actions/index.js';
class ToDoList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    debugger;
    this.props.getTodosFromServer();
  }
  render() {
    const myTodos =
      this.props.todos.filterTodos.length !== 0
        ? this.props.todos.filterTodos
        : this.props.todos.myTodos;
    console.log('myTodos', myTodos);
    const result =
      myTodos == undefined ? (
        <div>Nothing</div>
      ) : (
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
                const time = new Date();
                this.props.addTodo(this.lastItem.value, time);
              }}
            >
              新增
            </button>
          </div>
          <div className="text-center col-md-8 margin-div">
            <table className="table">
              <thead>
                <tr>
                  <th>check</th>
                  <th>content</th>
                  <th>time</th>
                  <th>task in todo</th>
                  <th>operater</th>
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
                            this.props.completeServerTodo(item.id);
                            // this.props.completeTodo(item.id);
                          }}
                        />
                      </td>
                      <td
                        contentEditable={item.status}
                        onClick={() => {
                          this.props.setDetailTodo(item.id);
                          browserHistory.push('/todoInfo');
                        }}
                      >
                        {item.completed ? <del>{item.name}</del> : item.name}
                      </td>
                      <td>{item.time}</td>
                      <td>
                        {item.tasks == undefined ? (
                          '0'
                        ) : (
                          <Task tasks={item.tasks} />
                        )}
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            this.props.deleteServerTodo(item.id);
                          }}
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      );
    return result;
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
  setDetailTodo,
  gotTodos,
  getTodosFromServer,
  deleteServerTodo,
  completeServerTodo
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);
