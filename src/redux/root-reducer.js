import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import userReducer from './user/user.reducer';
import shoppingCartReducer from './shopping-cart/shopping-cart.reducer';
import itemCategoryReducer from './item-category/item-category.reducer';
import shopReducer from './shoppage/shoppage.reducer';

const persistConfigs = {
    key: 'root',
    storage,
    whitelist: ['shoppingCart']
}

const rootReducer = combineReducers({
    user: userReducer,
    shoppingCart: shoppingCartReducer,
    itemCategory: itemCategoryReducer,
    shopData: shopReducer
});

export default persistReducer(persistConfigs, rootReducer);