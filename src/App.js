import React, { Component } from 'react';
import Main from './components/Main'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {AuthToggle} from './actions/index'
import {bindActionCreators} from 'redux'
import {PrivateRoute} from './containers/auth/RequireAuth'
import Dashboard from './containers/dashboard/Dashboard'
import Signin from './containers/auth/Signin';

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    // console.log('this.props en App component: ', this.props)
    return (
    <Router>
      <div>
        <Route exact path='/' component={Main} />
        <PrivateRoute path='/dashboard' component={Dashboard} />
        <Route path='/signin' component={Signin} />
      </div>
    </Router>
    );
  }
}

function mapStateToProps({authState}){
  return {isAuthenticated: authState.auth}
}

function mapDispatchToProp(dispatch){
  return bindActionCreators({AuthToggle}, dispatch)
}

App.defaultProps = {
  isAuthenticated: false
}

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
}

export default connect(mapStateToProps, mapDispatchToProp)(App);
