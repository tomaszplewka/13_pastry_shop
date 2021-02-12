import React from 'react';
import Btn from '../button/button.component';

import './shopping-cart-dropdown.styles.scss';

const ShoppingCartDropdown = () => (
    <div className="shopping-cart-dropdown-wrapper">
        <div className="shopping-cart-dropdown"/>
        <Btn>checkout</Btn>
    </div>
);

export default ShoppingCartDropdown;