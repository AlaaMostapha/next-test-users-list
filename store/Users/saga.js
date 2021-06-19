import { takeLatest, call, put } from "redux-saga/effects";
import * as types from "./types";
import * as api from "./api";
import * as actions from "./actions";

function* usersREcieve() {
  try {
    const response = yield call(api.UsersRecieve);
    yield put(actions.usersRecieve(response.data));
  } catch (err) {
    console.error(err);
  }
}

function* userReceive({ payload }) {
  try {
    const response = yield call(api.UserRecieve, payload);
    yield put(actions.userRecieve(response.data));
  } catch (err) {
    console.error(err);
  }
}

export function* usersSaga() {
  yield takeLatest(types.USERS_REQUEST, usersREcieve);
  yield takeLatest(types.USER_REQUEST, userReceive);
}