import { ShoppingCartActionTypes } from './shopping-cart.types';
import { addItem, removeItem } from './shopping-cart.utilities';

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
        case ShoppingCartActionTypes.DELETE_ITEM_FROM_SHOPPING_CART:
            return {
                ...state,
                shoppingCartItems: state.shoppingCartItems.filter(shoppingCartItem => shoppingCartItem.id !== action.payload.id)
            };
        case ShoppingCartActionTypes.REMOVE_SHOPPING_ITEM:
            return {
                ...state,
                shoppingCartItems: removeItem(state.shoppingCartItems, action.payload)
            };
        case ShoppingCartActionTypes.CLEAR_SHOPPING_CART:
            return {
                ...state,
                shoppingCartItems: []
            }
        default:
            return state;
    }
};

export default shoppingCartReducer;