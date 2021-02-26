import { all, put, takeLatest, call, select } from 'redux-saga/effects';

import { getUserShoppingCartRef } from '../../firebase/firebase.utilities';
import UserActionTypes from '../user/user.types';
import { selectCurrentUser } from '../user/user.selectors';
import { clearShoppingCart, setCartFromFirebase } from './shopping-cart.actions';
import { selectShoppingCartItems } from './shopping-cart.selectors';
import { ShoppingCartActionTypes } from './shopping-cart.types';

export function* clearShoppingCartOnSignOut() {
    yield put(clearShoppingCart());
};

export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearShoppingCartOnSignOut);
};

export function* shoppingCartSagas() {
    yield all([call(onSignOutSuccess), call(onShoppingCartChange), call(onUserSignIn)]);
};

export function* updateShoppingCartInFirebase() {
  const currentUser = yield select(selectCurrentUser);
  if (currentUser) {
    try {
      const cartRef = yield getUserShoppingCartRef(currentUser.id);
      const shoppingCartItems = yield select(selectShoppingCartItems);
      yield cartRef.update({ shoppingCartItems });
    } catch (error) {
      console.log(error);
    }
  }
}

export function* checkShoppingCartFromFirebase({ payload: user }) {
  const cartRef = yield getUserShoppingCartRef(user.id);
  const cartSnapshot = yield cartRef.get();
  yield put(setCartFromFirebase(cartSnapshot.data().shoppingCartItems));
}

export function* onUserSignIn() {
  yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, checkShoppingCartFromFirebase);
}

export function* onShoppingCartChange() {
  yield takeLatest(
    [
      ShoppingCartActionTypes.ADD_ITEM,
      ShoppingCartActionTypes.REMOVE_SHOPPING_ITEM,
      ShoppingCartActionTypes.DELETE_ITEM_FROM_SHOPPING_CART
    ],
    updateShoppingCartInFirebase
  );
}
