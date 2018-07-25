import React, { Component } from 'react';
// import { connect } from "react-redux";
class ToDoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.todos);
    return (
      <div>
        {/* <input
          type="text"
          ref={element => {
            this.lastTodo = element;
          }}
        />
        <button
          onClick={e => {
            this.props.addToDoItem(e.target.value);
          }}
        >
          +
        </button> */}

        <table>
          <tbody>
            {this.props.todos.map(item => {
              return (
                <tr>
                  <td>
                    <input
                      type="checkbox"
                      // onChange={e => {
                      //   this.props.addTodoItem(e.target.value);
                      // }}
                    />
                  </td>
                  <td
                    id={item.id}
                    // onDoubleClick={this.doubleClick.bind(this, item.id)}
                    // onBlur={this.blur.bind(this, item.id)}
                  >
                    {item.status ? item.name : <del>{item.value}</del>}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default ToDoList;

// const mapStateToProps = state => {
//   return {
//     todoList: state.todos
//   };
// };
// const mapDispatchToProps = {
//   addTodoIem
// };
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ToDoList);
