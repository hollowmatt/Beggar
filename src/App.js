import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MessageView from './messages/message-view';


class App extends Component {
 
  render() {
    const user = {firstName: "Matt", lastName: "Man"}
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React {user.firstName} {user.lastName}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <hr/>
        <MessageView/>
      </div>
    );
  }
}

export default App;
