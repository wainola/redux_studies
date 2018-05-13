import React, { Component } from 'react'
import { Button, Container } from 'semantic-ui-react';

class FilterPills extends Component {
  render() {
    return (
      <Container>
        <Button basic color='teal'>Employees</Button>
        <Button basic color='orange'>Salaries</Button>
      </Container>
    )
  }
}

export default FilterPills
