import { takeLatest, call, put, all } from 'redux-saga/effects';

import ShopPageActionTypes from './shoppage.types';

import { db, convertCategoriesToObject } from '../../firebase/firebase.utilities';

import { fetchDataSuccess, fetchDataFailure } from './shoppage.actions';

export function* fetchDataAsync() {
    try {
        const categoriesRef = db.collection('categories');
        const snapshot = yield categoriesRef.get();
        const categoriesObj = yield call(convertCategoriesToObject, snapshot);
        yield put(fetchDataSuccess(categoriesObj));
    } catch (error) {
        yield put(fetchDataFailure(error.message));
    }
};

export function* fetchDataStart() {
    yield takeLatest(
        ShopPageActionTypes.FETCH_DATA_START,
        fetchDataAsync
    );
};

export function* shopPageSagas() {
    yield all([call(fetchDataStart)]);
};