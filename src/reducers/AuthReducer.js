import { LOG_STATE } from '../actions/types'

const initialState = {
  auth: false
}

export default function(state=initialState, action){
  console.log('this is auth reducer!')
  switch (action.type) {
    case LOG_STATE:
      console.log('log_state')
      return {auth: action.payload}
  }
  return state
}