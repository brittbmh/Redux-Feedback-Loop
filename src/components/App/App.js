import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './../Header/Header.js'
import Review from './../Review/Review.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <br/>
        <Review />
      </div>
    );
  }
}

export default App;
