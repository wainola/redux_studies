import { LOG_STATE, GET_EMPLOYEES, GET_SALARIES } from './types'
import axios from 'axios'

let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

// action that sends to reducer the toggle of the auth state
export const AuthToggle = (auth) => {
  return{
    type: LOG_STATE,
    payload: auth
  }
}

export const GetEmployees = () => {
  return function(dispatch){
    axios.get('http://localhost:4777/employees')
    .then(response => {
      console.log('response en action', response)
      dispatch({
        type: GET_EMPLOYEES,
        payload: response.data 
      })
    })
  }
}

export const GetSalaries = () => {
  return function(dispatch){
    axios.get('http://localhost:4777/salaries')
    .then(response => {
      dispatch({
        type: GET_SALARIES,
        payload: response.data 
      })
    })
  }
}