import React, { Component } from 'react';
import {Container, Header, Divider} from 'semantic-ui-react'
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Container textAlign='center'>
        <Header as='h1'>Redux Todo</Header>
        <Divider />
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </Container>
    );
  }
}

export default App;
