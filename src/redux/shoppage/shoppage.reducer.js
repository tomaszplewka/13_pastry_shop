import ShopPageActionTypes from './shoppage.types';

const INITIAL_STATE = {
    data: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ShopPageActionTypes.UPDATE_CATEGORIES:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
};

export default shopReducer;