import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import Btn from '../button/button.component';
import ShoppingCartItem from '../shopping-cart-item/shopping-cart-item.component';

import { selectShoppingCartItems } from '../../redux/shopping-cart/shopping-cart.selectors';
import { toggleShoppingCartHidden } from '../../redux/shopping-cart/shopping-cart.actions';

import './shopping-cart-dropdown.styles.scss';

const ShoppingCartDropdown = ({ shoppingCartItems, history, dispatch }) => (
    <div className="shopping-cart-dropdown-wrapper">
        <div className="shopping-cart-dropdown">
            {
                shoppingCartItems.length ?
                shoppingCartItems.map(shoppingCartItem => (
                    <ShoppingCartItem key={shoppingCartItem.id} item={shoppingCartItem} />
                )) :
                <span className="shopping-cart-empty-message">Your cart is empty!</span>
            }
        </div>
        <Btn
            onClick={() => {
                history.push('/checkout');
                dispatch(toggleShoppingCartHidden());
            }}
        >
            checkout
        </Btn>
    </div>
);

const mapStateToProps = createStructuredSelector({
    shoppingCartItems: selectShoppingCartItems
});

export default withRouter(connect(mapStateToProps)(ShoppingCartDropdown));