import React, { Component } from 'react';
import './App.css';

class App2 extends Component {
  constructor(props){
    super(props);
    this.state={
      myTodolist:[
        {id:1,value:"todolist1",status:true,complete:false},
        {id:2,value:"todolist2",status:true,complete:false},
        {id:3,value:"todolist3",status:true,complete:false}
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

  onChange(id){
    console.log("onchange",id);
    let currTodolist = this.state.myTodolist;
    currTodolist.map((item)=>{
      if(item.id===id){
        item.status = !item.status;
        console.log(item.id,item.value,item.status);
      }
    });
    this.setState({
      myTodolist:currTodolist
    });
  }
  doubleClick(curritem){
    console.log("double click",curritem);
    let currTodolist = this.state.myTodolist;
    currTodolist.map((item)=>{
      if(item===curritem){
        item.complete = !item.complete;
      }
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
            return (
              <div>
                  <input type="checkbox" onChange={this.onChange.bind(this,item.id)}/>
                  {item.status?item.value:<del>{item.value}</del>}
                  <p>
                  {
                    !item.complete
                    ?"不可编辑"
                    // <p onDoubleClick={this.doubleClick(item)}>
                    //   {item.status?item.value:<del>{item.value}</del>}
                    // </p>
                    :
                    <input value={item.value}/>
                  }
                  </p>
               </div>
              )
            })
          }   
      </div>
    );
  }
}

export default App2;
