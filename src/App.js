import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      list:[{id:1,value:"todolist1"},{id:2,value:"todolist2"},{id:3,value:"todolist3"}]
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TO DO LIST</h1>
        </header>
        <p className="App-intro">
        <table>
          {
            this.list.map(()=>{

            });
          }
          </table>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
