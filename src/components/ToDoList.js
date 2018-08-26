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
  completeServerTodo,
  getUserInfo,
  addTask
} from '../actions/index.js';
class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskAddState: false,
      currentTodo: null
    };
  }
  setTaskAddState = item => {
    this.setState({
      taskAddState: !this.state.taskAddState,
      currentTodo: item
    });
  };
  componentDidMount() {
    this.props.getTodosFromServer();
  }
  render() {
    const myTodos =
      this.props.todos.filterTodos.length !== 0
        ? this.props.todos.filterTodos
        : this.props.todos.myTodos;
    console.log('myTodos', myTodos);
    // console.log("+++", this.props.userInfo.id);
    const result =
      myTodos == undefined ? (
        <div className="row mx-auto text-center">Nothing</div>
      ) : (
        <div className="row mx-auto" style={{ width: 800 }}>
          <div className="col-6 input-group margin-div">
            <input
              type="text"
              className="form-control"
              placeholder="搜索TODO"
              ref={element => {
                this.searchItem = element;
              }}
            />
            <div className="input-group-append">
              <button
                onClick={() => {
                  this.props.searchTodo(this.searchItem.value);
                }}
              >
                搜索
              </button>
            </div>
          </div>
          <div className="col-6 input-group margin-div">
            <input
              type="text"
              className="form-control"
              placeholder="新增TODO"
              ref={element => {
                this.lastItem = element;
              }}
            />
            <div className="input-group-append">
              <button
                onClick={() => {
                  const time = new Date();

                  this.props.addTodo(
                    this.lastItem.value,
                    false,
                    false,
                    time,
                    this.props.userInfo.id
                  );
                }}
              >
                新增
              </button>
            </div>
          </div>
          <div className="row mx-auto" style={{ width: 800 }}>
            <table className="table table-striped text-center">
              <thead>
                <tr>
                  <th style={{ width: 80 }}>检查完成</th>
                  <th style={{ width: 200 }}>todo内容</th>
                  <th style={{ width: 120 }}>创建时间</th>
                  <th style={{ width: 180 }}>任务分解</th>
                  <th style={{ width: 200 }}>操作</th>
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
                          }}
                        />
                      </td>
                      <td>
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
                        <a
                          onClick={() => {
                            this.props.deleteServerTodo(item.id);
                          }}
                        >
                          delete
                        </a>
                        &nbsp;&nbsp;&nbsp;
                        <a
                          onClick={() => {
                            this.props.setDetailTodo(item.id);
                            // browserHistory.push(`/todoInfo/${item.id}`);
                          }}
                        >
                          detail
                        </a>
                        &nbsp;&nbsp;&nbsp;
                        <a
                          onClick={() => {
                            this.setTaskAddState(item);
                          }}
                        >
                          新增task
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {this.state.taskAddState ? (
              <div className="col-12 input-group margin-div" id="addTask">
                <input
                  type="text"
                  className="form-control"
                  placeholder="新增Task"
                  ref={element => {
                    this.lastTask = element;
                  }}
                />
                <div className="input-group-append">
                  <button
                    onClick={() => {
                      this.setTaskAddState();
                      this.props.addTask(
                        this.state.currentTodo.id,
                        this.lastTask.value
                      );
                    }}
                  >
                    新增
                  </button>
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      );
    return result;
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    userInfo: state.userInfo
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
  completeServerTodo,
  getUserInfo,
  addTask
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);
