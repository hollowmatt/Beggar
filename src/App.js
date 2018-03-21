import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MessageList from './messages/message-list';


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
        <MessageList/>
      </div>
    );
  }
}

export default App;
