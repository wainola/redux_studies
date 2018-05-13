import React, { Component } from 'react'
import { Button, Container } from 'semantic-ui-react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {GetEmployees, GetSalaries} from '../../actions/index'

class FilterPills extends Component {
  handleClick(){
    this.props.GetEmployees()
  }
  render() {
    console.log('filter pills props', this.props)
    return (
      <Container>
        <Button basic color='teal' onClick={this.handleClick.bind(this)}>Employees</Button>
        <Button basic color='orange' onClick={this.handleClick.bind(this)}>Salaries</Button>
      </Container>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({GetEmployees, GetSalaries}, dispatch)
}

export default connect(null, mapDispatchToProps)(FilterPills)
