import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Dude, you should <i>REALLY</i> edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          That is some pointless feature :-)
        </p>
        <p>
          Added this to test GitHub's super-linter
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
