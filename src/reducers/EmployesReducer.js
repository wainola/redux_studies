import {GET_EMPLOYEES, GET_SALARIES} from '../actions/types'

export default function(state={}, action){
  switch(action.type){
    case GET_EMPLOYEES:
      return {...state, emps: action.payload.data}
    case GET_SALARIES:
      return {...state, salaries: action.payload.data}
  }
  return state
}