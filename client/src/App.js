import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home/home.js'
import Post from './post/post.js'
import Mess from './mess/mess.js'

function App() {
  return (
    <div className="App">
      <Home/>
      
      <Mess/>
    </div>
  );
}



export default App;
