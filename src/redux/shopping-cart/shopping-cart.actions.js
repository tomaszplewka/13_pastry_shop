import { ShoppingCartActionTypes } from './shopping-cart.types';

export const toggleShoppingCartHidden = () => ({
    type: ShoppingCartActionTypes.TOGGLE_SHOPPING_CART_DROPDOWN_HIDDEN
});

export const addItemToCart = item => ({
    type: ShoppingCartActionTypes.ADD_ITEM,
    payload: item
});

export const removeShoppingItem = item => ({
    type: ShoppingCartActionTypes.REMOVE_SHOPPING_ITEM,
    payload: item
});

export const deleteItemFromShoppingCart = item => ({
    type: ShoppingCartActionTypes.DELETE_ITEM_FROM_SHOPPING_CART,
    payload: item
});