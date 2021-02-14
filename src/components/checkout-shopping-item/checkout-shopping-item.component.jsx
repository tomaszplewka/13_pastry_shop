import React from 'react';
import { connect } from 'react-redux';

import { deleteItemFromShoppingCart, addItemToCart, removeShoppingItem } from '../../redux/shopping-cart/shopping-cart.actions';

import './checkout-shopping-item.styles.scss';

const CheckoutShoppingItem = ({ shoppingCartItem, deleteItem, addItem, removeItem }) => {
    const { name, price, imageUrl, cartQuantity } = shoppingCartItem;
    return (
        <div className="checkout-shopping-item">
            <div className="checkout-shopping-item-image">
                <img src={ imageUrl } alt="item"/>
            </div>
            <span className="checkout-shopping-item-name">{ name }</span>
            <span className="checkout-shopping-item-quantity">
                <div className="checkout-shopping-item-arrow" onClick={() => removeItem(shoppingCartItem)}>&#10094;</div>
                <span className="checkout-shopping-item-count">{ cartQuantity }</span>
                <div className="checkout-shopping-item-arrow" onClick={() => addItem(shoppingCartItem)}>&#10095;</div>
            </span>
            <span className="checkout-shopping-item-price">{ price }</span>
            <div className="checkout-shopping-item-remove-btn" onClick={() => deleteItem(shoppingCartItem)}>&#10005;</div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    deleteItem: item => dispatch(deleteItemFromShoppingCart(item)),
    addItem: item => dispatch(addItemToCart(item)),
    removeItem: item => dispatch(removeShoppingItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutShoppingItem);