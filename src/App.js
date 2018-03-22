import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MessageList from './messages/message-list';


class App extends Component {
 
  render() {
    return (
      <div> 
        <MessageList/>
      </div>
    );
  }
}

export default App;
