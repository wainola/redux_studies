import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Container, Grid, Responsive} from 'semantic-ui-react'
import MenuDashboard from './MenuDashboard'
import EmployeeCard from './EmployeeCard'
import FilterPills from './FilterPills'

class Dashboard extends Component{
  render(){
    return(
      <Responsive>
        <Container>
          <MenuDashboard />
          <Grid>
            <Grid.Row>
              <FilterPills/>
            </Grid.Row> 
            <Grid.Row>
              <EmployeeCard />
            </Grid.Row>
          </Grid>
        </Container>
      </Responsive>
    )
  }
}

export default Dashboard