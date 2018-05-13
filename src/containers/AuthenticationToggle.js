import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { AuthToggle } from '../actions/index'

class AuthenticationToggle extends React.Component{
  onHandleChange(){
    console.log('change: ', this.props)
    console.log('this auth state? ', this.props.authState)
    this.props.dispatch(AuthToggle(true))
  }
  render(){
    return(
      <Checkbox toggle onChange={this.onHandleChange.bind(this)} />
    )
  }
}

function MapStateToProps({authState}){
  return {authState}
}

export default connect(MapStateToProps)(AuthenticationToggle)