import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      myTodolist:[
        {id:1,value:"todolist1",status:true},
        {id:2,value:"todolist2",status:true},
        {id:3,value:"todolist3",status:true}
      ]
    }
  }
  addTodoList=()=>{
    console.log(this.lastTodo.value);
    let lastValue = this.lastTodo.value;
    let currTodolist = this.state.myTodolist;
    let lastId = currTodolist.length;
    currTodolist.push({
      id:lastId,
      value:lastValue,
      status:true
    });
    this.setState({
      myTodolist:currTodolist
    });
  }
  render() {
    return (
      <div className="App">
          <h1 className="App-title">TO DO LIST</h1>
          <input type="text" ref={element=>{
            this.lastTodo = element;
          }}/>
          <button onClick={this.addTodoList}>+</button>
          {
            this.state.myTodolist.map(item => {
            return <p><input type="checkbox"/>{item.value}</p>
            })
          }         
      </div>
    );
  }
}

export default App;
