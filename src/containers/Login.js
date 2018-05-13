import React from 'react'
import {connect} from 'react-redux'
import {Route, Redirect} from 'react-router-dom'
import GuestRoute from './GuestRoute'

class Login extends React.Component{
  render(){
    console.log(this.props)
    return(
      <div>
        <h1>Login</h1>
        <Route render={this.props.auth ? <Redirect to='/dashboard' /> : <GuestRoute />} />
      </div>
    )
  }
}

function mapStateToProps({authState}){
  return {authState}
}

export default connect(mapStateToProps)(Login)