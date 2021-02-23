import React from 'react';

import './shopping-cart-item.styles.scss';

const ShoppingCartItem = ({ item: { name, price, imageUrl, cartQuantity } }) => (
    <div className="shopping-cart-item">
        <img src={ imageUrl } alt="shopping-item"/>
        <span className="shopping-cart-item-name">{ name }</span>
        <span className="shopping-cart-item-price">{ cartQuantity } x ${ price }</span>
    </div>
);

export default ShoppingCartItem;