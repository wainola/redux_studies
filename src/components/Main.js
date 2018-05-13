import React from 'react'
import {
  Container,
  Header,
  Divider
} from 'semantic-ui-react'
import AuthenticationToggle from '../containers/AuthenticationToggle'
import {Link} from 'react-router-dom'

const Main = () => (
  <Container textAlign='center'>
    <Header as='h1'>Redux Todo</Header>
    <Divider />
    <Link to='/signin'>Signin</Link>
    <br/>
    <Link to='/dashboard'>Dashboard</Link>
    <br/>
    <h3>Toggle for login: </h3>
    <AuthenticationToggle />
  </Container>
)

export default Main