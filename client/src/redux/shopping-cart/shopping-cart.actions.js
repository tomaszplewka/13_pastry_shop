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

export const clearShoppingCart = () => ({
    type: ShoppingCartActionTypes.CLEAR_SHOPPING_CART
});
export const updateCartInFirebase = () => ({
    type: ShoppingCartActionTypes.UPDATE_CART_IN_FIREBASE
});

export const setCartFromFirebase = shoppingCartItems => ({
    type: ShoppingCartActionTypes.SET_CART_FROM_FIREBASE,
    payload: shoppingCartItems
});