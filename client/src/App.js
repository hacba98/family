import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home/home.js'
import ViewPost from './home/view-post'
import { Container, Row, Col } from 'reactstrap';

function App() {
  return (
    <Container className="App">
      <ViewPost/>

    </Container>
  );
}

export default App;
