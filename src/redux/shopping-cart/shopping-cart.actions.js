import { ShoppingCartActionTypes } from './shopping-cart.types';

export const toggleShoppingCartHidden = () => ({
    type: ShoppingCartActionTypes.TOGGLE_SHOPPING_CART_DROPDOWN_HIDDEN
});

export const addItemToCart = item => ({
    type: ShoppingCartActionTypes.ADD_ITEM,
    payload: item
});