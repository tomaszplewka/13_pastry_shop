export const addItem = (shoppingCartItems, newShoppingCartItems) => {
    const cartItemExists = shoppingCartItems.find(cartItem => (
        cartItem.id === newShoppingCartItems.id
    ));

    if (cartItemExists) {
        return shoppingCartItems.map(cartItem => (
            cartItem.id === newShoppingCartItems.id
                ? {...cartItem, cartQuantity: cartItem.cartQuantity + 1}
                : cartItem
        ));
    }

    return [...shoppingCartItems, { ...newShoppingCartItems, cartQuantity: 1}];
};

export const removeItem = (shoppingCartItems, shoppingCartItemToRemove) => {
    const cartItemExists = shoppingCartItems
        .find(shoppingCartItem => shoppingCartItem.id === shoppingCartItemToRemove.id);
    
    if (cartItemExists.cartQuantity === 1) {
        return shoppingCartItems
            .filter(shoppingCartItem => shoppingCartItem.id !== shoppingCartItemToRemove.id);
    }

    return shoppingCartItems.map(shoppingCartItem => (
        shoppingCartItem.id === shoppingCartItemToRemove.id ?
        { ...shoppingCartItem, cartQuantity: shoppingCartItem.cartQuantity - 1} : 
        shoppingCartItem
    ));
};