import { createSelector } from 'reselect';

const selectShoppingCart = state => state.shoppingCart;

export const selectShoppingCartItems = createSelector(
    [selectShoppingCart],
    shoppingCart => shoppingCart.shoppingCartItems
);

export const selectShoppingCartItemsCount = createSelector(
    [selectShoppingCartItems],
    shoppingCartItems => shoppingCartItems.reduce((accumulatedCartQuantity, shoppingCartItem) => accumulatedCartQuantity + shoppingCartItem.cartQuantity, 0)
)