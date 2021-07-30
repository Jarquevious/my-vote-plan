// This block of code imports the Action Types.

import { combineReducers } from 'redux'
import passwordReducer from './password-reducer'

export default combineReducers({
  passwords: passwordReducer
})

// Defines the passwordReducer function. This 
// function is responsible for providing the 
// default value for state. The default state 
// is defined here as the default value for 
// the state parameter -> const passwordReducer = (state = [], action) => {...

const passwordReducer = (state = [], action) => {

// The switch statement in the function handles each action type. Each case returns state. State is an array and when state is modified rather modifying state each case returns a new copy of the array.
  switch(action.type) {
    case ADD_PASSWORD:
      const { name, password } = action.payload
      return [...state, { name, password }]

    case DELETE_PASSWORD:
      const { index } = action.payload
      return [...state.slice(0, index), ...state.slice(index + 1)]

    case EDIT_PASSWORD:
      return state.map((item, index) => {
        if (index !== action.payload.index) {
          return item
        }
        return { ...item, ...action.payload }
      })

    default:
      return state
  }
}

export default passwordReducer