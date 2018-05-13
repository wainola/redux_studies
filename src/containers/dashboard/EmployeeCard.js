import React, { Component } from 'react'
import { Container, Loader, Segment, Dimmer, Card, Header, Image } from 'semantic-ui-react';
import {connect} from 'react-redux'

class EmployeeCard extends Component {
  renderEmps(){
    this.props.EmpsData.emps.map(e => console.log(e))
    return this.props.EmpsData.emps.map(e => 
      <Card key={e.emp_no}>
        <Image src='https://media.giphy.com/media/3o6ZtbWOMJAm4iwtPi/giphy.gif' />
        <Card.Header>
          <Header as='h1'>{e.first_name} {e.last_name}</Header>
        </Card.Header>
        <Card.Meta>
          <span className='date'>
            Nacido el: {e.birth_date}
          </span>
        </Card.Meta>
      </Card>
    )
  }
  render() {
    console.log('this.props en EmployeeCard', this.props)
    return (
      <Container>
        {this.props.EmpsData.emps ? 
          <div>
            <Card.Group itemsPerRow={3}>
              {this.renderEmps()}
            </Card.Group>
          </div>
          :
          <Dimmer active inverted>
              <Loader>
                Cargando datos!!
              </Loader>          
          </Dimmer>
        }
      </Container>
    )
  }
}

function mapStateToProps({EmpsData}){
  return {EmpsData}
}

export default connect(mapStateToProps)(EmployeeCard)
