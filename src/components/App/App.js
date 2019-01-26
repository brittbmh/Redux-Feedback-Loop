import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './../Header/Header.js';
import Review from './../Review/Review.js';
import Feelings from './../Feelings/Feelings.js';
import Understanding from './../Understanding/Understanding.js';
import Support from './../Support/Support.js'
import Comments from './../Comments/Comments.js'
import {HashRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <br/>
        <Router>
          <div>
            <Route exact path='/' component={Feelings}/>
            <Route exact path='/Understanding' component={Understanding} />
            <Route exact path='/Support' component={Support} />
            <Route exact path='/Comments' component={Comments} />
          </div>
        </Router>
        <br />
        <Review />
      </div>
    );
  }
}

export default App;
