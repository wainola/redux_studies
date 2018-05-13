import React, { Component } from 'react'
import { Container } from 'semantic-ui-react';
import {connect} from 'react-redux'

class EmployeeCard extends Component {
  render() {
    console.log('this.props en EmployeeCard', this.props)
    return (
      <Container>
        Cards Employee
      </Container>
    )
  }
}

function mapStateToProps({EmpsData}){
  return {EmpsData}
}

export default connect(mapStateToProps)(EmployeeCard)
