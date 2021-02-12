import React from 'react';

import { ReactComponent as CartIcon} from '../../assets/shopping-bag.svg';

import './shopping-cart.styles.scss';

const ShoppingCart = () => (
    <div className="shopping-cart">
        <CartIcon className="shopping-cart-icon" />
        <span className="shopping-cart-item-count">0</span>
    </div>
);

export default ShoppingCart;