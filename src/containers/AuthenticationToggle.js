import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { AuthToggle } from '../actions/index'
import {bindActionCreators} from 'redux'

class AuthenticationToggle extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isAuthenticated: this.props.authState.auth
    }
  }
  onHandleChange(){
    this.props.AuthToggle(!this.state.isAuthenticated)
    this.setState({isAuthenticated: !this.state.isAuthenticated})
  }
  render(){
    console.log('auhtToggle', this.state.isAuthenticated)
    return(
      <Checkbox toggle onChange={this.onHandleChange.bind(this)} />
    )
  }
}

function MapStateToProps({authState}){
  return {authState}
}

function mapDispatchToProp(dispatch){
  return bindActionCreators({AuthToggle}, dispatch)
}

export default connect(MapStateToProps, mapDispatchToProp)(AuthenticationToggle)