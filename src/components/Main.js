import React from 'react'
import {
  Container,
  Header,
  Divider
} from 'semantic-ui-react'
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';
import {Link} from 'react-router-dom'

const Main = () => (
  <Container textAlign='center'>
    <Header as='h1'>Redux Todo</Header>
    <Divider />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <Link to='login'>Login</Link>
  </Container>
)

export default Main