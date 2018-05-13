import {
  GET_EMPLOYEES,
  GET_SALARIES,
  GET_ALL_MEN,
  GET_ALL_WOMEN,
  GET_ALL_EMPLOYEES
} from '../actions/types'

export default function(state={}, action){
  switch(action.type){
    case GET_EMPLOYEES:
      return {...state, emps: action.payload.data}
    case GET_SALARIES:
      return {...state, salaries: action.payload.data}
    case GET_ALL_MEN:
      console.log('GET_ALL_MEN case!', action.payload)
      let current_state = action.payload
      let all_men = current_state.filter(item => item.gender === 'M')
      console.log('all men', all_men)
      return {current_state, emps: all_men}
    case GET_ALL_WOMEN:
      console.log('GET_ALL_WOMEN case!', action.payload)
      let cr = action.payload
      let all_women = cr.filter(item => item.gender === 'F')
      console.log('current_state', cr)
      return {current_state: cr, emps: all_women}
    case GET_ALL_EMPLOYEES:
      console.log('GET_ALL_EMPLOYEES case!', action.payload)
      return {emps: action.payload}
  }
  return state
}