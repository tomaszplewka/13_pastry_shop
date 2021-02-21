import { all, call } from 'redux-saga/effects';

import { shopPageSagas } from './shoppage/shoppage.sagas';
import { userSagas } from './user/user.sagas';
import { shoppingCartSagas } from './shopping-cart/shopping-cart.sagas';

export default function* rootSaga() {
    yield all([call(shopPageSagas), call(userSagas), call(shoppingCartSagas)]);
};