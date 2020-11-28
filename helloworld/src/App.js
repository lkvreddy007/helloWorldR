import React from 'react';
import './App.css';
import logo from './logo.svg';

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      title: 'Hello From Krishna'
    }
  }
  render(){
    return(
      <div>
        <h1>{this.state.title}</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    )
  }

}

export default App;
