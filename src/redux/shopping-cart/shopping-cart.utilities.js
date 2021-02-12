export const addItem = (cartItems, newCartItem) => {
    const cartItemExists = cartItems.find(cartItem => (
        cartItem.id === newCartItem.id
    ));

    if (cartItemExists) {
        return cartItems.map(cartItem => (
            cartItem.id === newCartItem.id
                ? {...cartItem, cartQuantity: cartItem.cartQuantity + 1}
                : cartItem
        ));
    }

    return [...cartItems, { ...newCartItem, cartQuantity: 1}];
};