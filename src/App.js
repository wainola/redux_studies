import React, { Component } from 'react';
import Main from './components/Main'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Login from './containers/Login'

class App extends Component {
  render() {
    return (
    <Router>
      <div>
        <Route exact path='/' component={Main} />
        <Route exact path='/Login' component={Login}/>
      </div>
    </Router>
    );
  }
}

export default App;
