import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { goBack } from 'connected-react-router';
import Task from './Task';
class ToDoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let start = window.location.href.lastIndexOf('/');
    const detailTodoId = window.location.href.substring(start + 1);
    // console.log("+++=", this.props.todos.detailTodo);
    // const detailTodoId = localStorage.detailTodo;
    console.log(detailTodoId);
    console.log(this.props.todos.myTodos);
    let detailTodo = '';
    for (let i = 0; i < this.props.todos.myTodos.length; i++) {
      if (this.props.todos.myTodos[i].id == detailTodoId) {
        console.log('find');
        detailTodo = this.props.todos.myTodos[i];
      }
    }
    console.log(detailTodo);

    if (detailTodo)
      return (
        <div>
          <div className="row">
            <h1 className="mx-auto">Detail TODO INFO</h1>
          </div>
          <div className="row">
            <label
              className="mx-auto"
              onClick={() => {
                browserHistory.push('/');
              }}
            >
              Click Here Go Back
            </label>
          </div>

          <ul className="mx-auto detail" style={{ width: 800 }}>
            <li>TODO内容&nbsp;&nbsp;:&nbsp;&nbsp;{detailTodo.name}</li>
            <li>
              完成了吗&nbsp;?&nbsp;&nbsp;
              {detailTodo.completed ? 'YES' : 'NO'}
            </li>

            <li>创建时间&nbsp;&nbsp;:&nbsp;&nbsp;{detailTodo.time}</li>

            <li>
              任务分解&nbsp;&nbsp;:&nbsp;&nbsp;
              {detailTodo.tasks == undefined ? (
                '0'
              ) : (
                <Task tasks={detailTodo.tasks} />
              )}
            </li>
          </ul>
        </div>
      );
    return (
      <div>
        <div className="row">
          <h1 className="mx-auto">TODO INFO NOT FOUND</h1>
        </div>
        <div className="row">
          <label
            className="mx-auto"
            onClick={() => {
              browserHistory.push('/');
            }}
          >
            Click Here Go Back
          </label>
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
  goBack
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);
