import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Btn from '../button/button.component';
import ShoppingCartItem from '../shopping-cart-item/shopping-cart-item.component';

import { selectShoppingCartItems } from '../../redux/shopping-cart/shopping-cart.selectors';

import './shopping-cart-dropdown.styles.scss';

const ShoppingCartDropdown = ({ shoppingCartItems }) => (
    <div className="shopping-cart-dropdown-wrapper">
        <div className="shopping-cart-dropdown">
            {
                shoppingCartItems.map(shoppingCartItem => (
                    <ShoppingCartItem key={shoppingCartItem.id} item={shoppingCartItem} />
                ))
            }
        </div>
        <Btn>checkout</Btn>
    </div>
);

const mapStateToProps = createStructuredSelector({
    shoppingCartItems: selectShoppingCartItems
});

export default connect(mapStateToProps)(ShoppingCartDropdown);