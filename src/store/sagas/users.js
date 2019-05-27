import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as UsersActions } from '../ducks/users';
import { Creators as ModalActions } from '../ducks/modal';

export function* addUser(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.user}`);
    const isDuplicated = yield select(state => state.users.data.find(user => user.id === data.id));
    if (isDuplicated) {
      yield put(UsersActions.addUserFailure('Usuário duplicado.'));
    } else {
      const userData = {
        id: data.id,
        name: data.name,
        username: data.login,
        avatar_url: data.avatar_url,
        url: data.html_url,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
      };

      yield put(UsersActions.addUserSuccess(userData));
      yield put(ModalActions.hideModal());
    }
  } catch (err) {
    yield put(UsersActions.addUserFailure('Erro ao adicionar o usuário.'));
  }
}
