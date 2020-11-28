import React from 'react';
import './App.css';
import logo from './logo.svg';

class App extends React.Component{
  url = 'https:www.google.com/'
  constructor(){
    super();
    this.state = {
      userName: ''
    }
  }
  onClick = ($event) => {
    console.log("save button is clicked",$event);
    window.open(this.url,"_blank")
  }
  onNameChange = (event) => {
    console.log("values is ",event.target.value);
    this.setState({userName: event.target.value})
  }
  render(){
    return(
      <div>
        <div>
          <h1>Hello {this.state.userName} from Krishna</h1>
          <img src={logo} onClick={this.onClick} className="App-logo" alt="logo" />
        </div>
        <div>
          <input onChange={this.onNameChange}/>
        </div>
      </div>
    )
  }

}

export default App;
