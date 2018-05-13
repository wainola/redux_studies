import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import AuthReducer from './AuthReducer'
import EmployeesReducer from './EmployesReducer'

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  authState: AuthReducer,
  EmpsData: EmployeesReducer
});

export default rootReducer