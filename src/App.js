import React, { Component } from 'react';
import logo from 'logo.svg';
import 'App.css';
import Comp1 from 'Group1/Comp1';
import Comp2 from 'Group2/Comp2';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Comp1 />
          <Comp2 />
        </header>
      </div>
    );
  }
}

export default App;
