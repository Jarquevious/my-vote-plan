// This block of code imports the Action Types.

import { combineReducers } from 'redux'
import passwordReducer from './password-reducer'
import electionReducer from './electionReducer'

export default combineReducers({
  passwords: passwordReducer,
  elections: electionReducer
})

