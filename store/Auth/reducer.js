import * as types from "./types";

const INITIAL_STATE = {
  user:{}
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.LOGIN_RECIEVE:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}