import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route, Redirect} from 'react-router-dom'

export const PrivateRoute = ({component: ComposedComponent, ...rest}) => {
  class Authentication extends Component {
    handlerRender(props){
      console.log('this.handleRender', this.props)
      console.log('this.handleRender', this.props.isAuthenticated)
      if(!this.props.isAuthenticated){
        return <Redirect to={{
          pathname: '/signin',
          state: {
            from: props.location,
            message: 'You need to be logged'
          }
        }} />
      }
      else {
        return <ComposedComponent {...props} />
      }
    }

    render(){
      return(
        <Route {...rest} render={this.handlerRender.bind(this)} />
      )
    }
  }

  function mapStateToProps(state){
    return {isAuthenticated: state.authState.auth}
  }
  const AuthenticationContainer = connect(mapStateToProps)(Authentication)
  return <AuthenticationContainer/>
}