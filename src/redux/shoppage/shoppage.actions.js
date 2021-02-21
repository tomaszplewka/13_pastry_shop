import ShopPageActionTypes from './shoppage.types';

import { db, convertCategoriesToObject } from '../../firebase/firebase.utilities';

export const fetchDataStart = () => ({
    type: ShopPageActionTypes.FETCH_DATA_START
});

export const fetchDataSuccess = categoriesObj => ({
    type: ShopPageActionTypes.FETCH_DATA_SUCCESS,
    payload: categoriesObj
});

export const fetchDataFailure = errorMsg => ({
    type: ShopPageActionTypes.FETCH_DATA_FAILURE,
    payload: errorMsg
});

export const fetchDataStartAsync = () => {
    return dispatch => {
        const categoriesRef = db.collection('categories');
        dispatch(fetchDataStart());
        // Observable pattern
        // this.unsubscribeFromSnapshot = categoriesRef.onSnapshot(async snapshot => {
        //     const categoriesObj = convertCategoriesToObject(snapshot);
        //     console.log(categoriesObj);
        //     updateCategories(categoriesObj);
        //     this.setState({ loading: false });
        // });
        // Promise pattern
        categoriesRef.get()
            .then(snapshot => {
                const categoriesObj = convertCategoriesToObject(snapshot);
                dispatch(fetchDataSuccess(categoriesObj))
            })
            .catch(error => dispatch(fetchDataFailure(error.message)));
    };
};