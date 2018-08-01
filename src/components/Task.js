import React, { Component } from 'react';
class Task extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.tasks.map(task => {
          return (
            <div key={task.id} className="text-center">
              {task.content}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Task;
