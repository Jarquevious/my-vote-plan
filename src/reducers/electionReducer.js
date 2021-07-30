import { ADD_CANDIDATE } from "../actions";

const electionReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CANDIDATE:
      return [...state, action.payload.name]
    default:
      return state;
  }
};

export default electionReducer;
