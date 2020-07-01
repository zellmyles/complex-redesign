import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home.js';
import Nav from './components/nav.js'
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from './components/container.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Router>
      <div>
    
      <Container />
    </div>
  </Router>
 );

export default App;
