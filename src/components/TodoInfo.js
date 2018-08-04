import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { goBack } from 'connected-react-router';
class ToDoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const detailTodo = this.props.todos.detailTodo;
    return (
      <div className="text-center margin-div">
        <h1>Detail TODO INFO</h1>
        <table className="table">
          <thead>
            <tr>
              <th>content</th>
              <th>completed</th>
              <th>time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{detailTodo.name}</td>
              <td>{detailTodo.completed ? 'YES' : 'NO'}</td>
              <td>{detailTodo.time}</td>
            </tr>
          </tbody>
        </table>

        <button
          onClick={() => {
            browserHistory.push('/');
          }}
        >
          GO BACK
        </button>
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
