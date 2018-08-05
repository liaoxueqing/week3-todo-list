import React, { Component } from 'react';
class Task extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul style={{ marginBottom: 0 }}>
        {this.props.tasks.map(task => {
          return (
            <li key={task.id} className="text-left">
              {task.content}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Task;
