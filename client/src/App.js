import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home/home.js'
import { Container, Row, Col } from 'reactstrap';

function App() {
  return (
    <Container className="App">
      <Home/>

    </Container>
  );
}

export default App;
