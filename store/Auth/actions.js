  
import * as types from "./types";

export const loginRecieve = (payload) => ({
  type: types.LOGIN_RECIEVE,
  payload,
});