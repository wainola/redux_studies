import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import AuthReducer from './AuthReducer'

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  authState: AuthReducer
});

export default rootReducer