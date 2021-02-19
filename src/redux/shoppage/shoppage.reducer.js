import SHOP_DATA from './shoppage.data';

import ShopPageActionTypes from './shoppage.types';

const INITIAL_STATE = {
    data: SHOP_DATA
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ShopPageActionTypes.UPDATE_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        default:
            return state;
    }
};

export default shopReducer;