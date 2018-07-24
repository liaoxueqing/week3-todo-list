import React, { Component } from 'react';
import './App.css';

class App extends Component {
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
  doubleClick(id){
    console.log("double click",id);
    // document.getElementById(id).contentEditable=true;
    // this.currTd.contentEditable=true;
  }
  tdChange(){
    console.log('td change');
  }
  render() {
    return (
      <div className="App">
        <table><tr>
          <td ref={element=>{
            this.currTd = element;
            }} onDoubleClick={this.doubleClick}>111</td>
          </tr></table>


          <h1 className="App-title">TO DO LIST</h1>
          <input type="text" ref={element=>{
            this.lastTodo = element;
          }}/>
          <button onClick={this.addTodoList}>+</button>
          <table style={{margin:'auto'}}><tbody>
          {
            this.state.myTodolist.map(item => {
            return (
              <tr>
                <td>
                  <input type="checkbox" onChange={this.onChange.bind(this,item.id)}/>
                </td>
                <td id={item.id} onDoubleClick={this.doubleClick.bind(this,item.id)}
                    contentEditable={item.complete}
                >
                  {item.status?item.value:<del>{item.value}</del>}
                </td>
              </tr>
              )
            })
          }   
          </tbody></table>      
      </div>
    );
  }
}

export default App;
