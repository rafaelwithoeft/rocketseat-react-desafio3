import { all, takeLatest } from 'redux-saga/effects';

import { ActionTypes as UsersTypes } from '../ducks/users';
import { addUser } from './users';

export default function* rootSaga() {
  yield all([takeLatest(UsersTypes.ADD_REQUEST, addUser)]);
}
