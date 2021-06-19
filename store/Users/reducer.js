  
import * as types from "./types";

const INITIAL_STATE = {
  users: [],
  user: {},
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.USERS_RECIEVE:
      return {
        ...state,
        users: action.payload,
      };
    case types.USER_RECIEVE:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}