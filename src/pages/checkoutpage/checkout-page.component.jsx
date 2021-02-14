import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectShoppingCartItems, selectShoppingCartItemsTotal } from '../../redux/shopping-cart/shopping-cart.selectors';

import CheckoutShoppingItem from '../../components/checkout-shopping-item/checkout-shopping-item.component';

import './checkout-page.styles.scss';

const CheckoutPage = ({ shoppingCartItems, shoppingCartItemsTotal }) => (
    <div className="checkout-page">
        <div className="checkout-page-header">
            <div className="checkout-page-header-title">
                <span>Product</span>
            </div>
            <div className="checkout-page-header-title">
                <span>Description</span>
            </div>
            <div className="checkout-page-header-title">
                <span>Quantity</span>
            </div>
            <div className="checkout-page-header-title">
                <span>Price</span>
            </div>
            <div className="checkout-page-header-title">
                <span>Remove</span>
            </div>
        </div>
        {
            shoppingCartItems.map(shoppingCartItem => (
                <CheckoutShoppingItem key={shoppingCartItem.id} shoppingCartItem={shoppingCartItem} />
            ))
        }
        <div className="checkout-page-total">
            Total ${shoppingCartItemsTotal}
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    shoppingCartItems: selectShoppingCartItems,
    shoppingCartItemsTotal: selectShoppingCartItemsTotal
});

export default connect(mapStateToProps)(CheckoutPage);