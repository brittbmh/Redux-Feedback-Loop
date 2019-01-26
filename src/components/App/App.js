import React, { Component } from 'react';
import './App.css';
import Header from './../Header/Header.js';
import Feelings from './../Feelings/Feelings.js';
import Understanding from './../Understanding/Understanding.js';
import Support from './../Support/Support.js';
import Comments from './../Comments/Comments.js';
import FinalReview from './../FinalReview/FinalReview.js';
import Success from './../Success/Success.js';
import {HashRouter as Router, Route } from 'react-router-dom';

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
            <Route exact path='/FinalReview' component={FinalReview} />
            <Route exact path='/Success' component={Success} />
          </div>
        </Router>
        <br />
        
      </div>
    );
  }
}

export default App;
