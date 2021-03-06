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

export const selectShoppingCartHidden = createSelector(
    [selectShoppingCart],
    shoppingCart => shoppingCart.hidden
);

export const selectShoppingCartItemsTotal = createSelector(
    [selectShoppingCartItems],
    shoppingCartItems => shoppingCartItems.reduce((accumulatedCartQuantity, shoppingCartItem) => accumulatedCartQuantity + shoppingCartItem.cartQuantity * shoppingCartItem.price, 0)
)