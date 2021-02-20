import ShopPageActionTypes from './shoppage.types';

const INITIAL_STATE = {
    data: null,
    isFetching: false,
    errorMsg: undefined
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ShopPageActionTypes.FETCH_DATA_START:
            return {
                ...state,
                isFetching: true
            };
        case ShopPageActionTypes.FETCH_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload
            };
        case ShopPageActionTypes.FETCH_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMsg: action.payload
            };
        default:
            return state;
    }
};

export default shopReducer;