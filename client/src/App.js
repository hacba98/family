import React from 'react';
import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import Login from './Login.js';
=======
import Home from './home/home.js'
>>>>>>> 2ac105cc7ecbb01bc10aff464a60cf25f62f9050

function App() {
  return (
    <div className="App">
      <Home/>
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
      </header>
      <Login></Login>
    </div>
  );
}



export default App;
