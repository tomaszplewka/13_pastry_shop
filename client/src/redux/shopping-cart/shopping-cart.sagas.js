import { all, put, takeLatest, call } from 'redux-saga/effects';

import UserActionTypes from '../user/user.types';
import { clearShoppingCart } from './shopping-cart.actions';

export function* clearShoppingCartOnSignOut() {
    yield put(clearShoppingCart());
};

export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearShoppingCartOnSignOut);
};

export function* shoppingCartSagas() {
    yield all([call(onSignOutSuccess)]);
};