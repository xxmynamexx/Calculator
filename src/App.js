import React, { Component } from 'react';
import logo from './logo.svg';
import Calculator from './Calculator'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Calculator />
        </header>
      </div>
    );
  }
}

export default App;
