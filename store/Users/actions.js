import * as types from "./types";

export const usersRequest = (payload) => ({
  type: types.USERS_REQUEST,
  payload,
});

export const usersRecieve = (payload) => ({
  type: types.USERS_RECIEVE,
  payload,
});

export const userRequest = (payload) => ({
  type: types.USER_REQUEST,
  payload,
});

export const userRecieve = (payload) => ({
  type: types.USER_RECIEVE,
  payload,
});