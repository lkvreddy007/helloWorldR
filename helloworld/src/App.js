import React from 'react';
import './App.css';
import logo from './logo.svg';

class App extends React.Component{
  url = 'https:www.google.com/'
  constructor(){
    super();
    this.state = {
      title: 'Hello From Krishna'
    }
  }
  onClick = ($event) => {
    console.log("save button is clicked",$event);
    window.open(this.url,"_blank")
  }
  render(){
    return(
      <div>
        <h1>{this.state.title}</h1>
        <img src={logo} onClick={this.onClick} className="App-logo" alt="logo" />
      </div>
    )
  }

}

export default App;
