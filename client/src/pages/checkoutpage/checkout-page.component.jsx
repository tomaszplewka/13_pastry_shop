import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectShoppingCartItems, selectShoppingCartItemsTotal } from '../../redux/shopping-cart/shopping-cart.selectors';

import CheckoutShoppingItem from '../../components/checkout-shopping-item/checkout-shopping-item.component';

import StripeCheckoutBtn from '../../components/stripe-checkout/stripe-checkout.component';

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
        <div className="payment-warning">
            *This is test mode. Please use the following test credit card details for payment:
            <br/>
            4242 4242 4242 4242 - Exp: any time in the future - CVV: any number
        </div>
        <StripeCheckoutBtn price={shoppingCartItemsTotal} />
    </div>
);

const mapStateToProps = createStructuredSelector({
    shoppingCartItems: selectShoppingCartItems,
    shoppingCartItemsTotal: selectShoppingCartItemsTotal
});

export default connect(mapStateToProps)(CheckoutPage);