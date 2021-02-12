import { ShoppingCartActionTypes } from './shopping-cart.types';
import { addItem } from './shopping-cart.utilities';

const INITIAL_STATE = {
    hidden: true,
    shoppingCartItems: []
};

const shoppingCartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShoppingCartActionTypes.TOGGLE_SHOPPING_CART_DROPDOWN_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case ShoppingCartActionTypes.ADD_ITEM:
            return {
                ...state,
                shoppingCartItems: addItem(state.shoppingCartItems, action.payload)
            }
        default:
            return state;
    }
};

export default shoppingCartReducer;