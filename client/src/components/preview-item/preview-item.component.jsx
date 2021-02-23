import React from 'react';
import { connect } from 'react-redux';

import Btn from '../button/button.component';
import { addItemToCart } from '../../redux/shopping-cart/shopping-cart.actions';

import './preview-item.styles.scss';

const PreviewItem = ({ item, addItemToCart }) => {
    const { name, price, imageUrl, quantity } = item;
    return (
        <div className='preview-item'>
            <div className="preview-item-img-wrapper">
                <div
                    className='preview-item-img'
                    style={{ 
                        backgroundImage: `url(${imageUrl})`
                        }}
                ></div>
            </div>
            <div className='preview-item-body'>
                <span className="name">{name}</span>
                <span className="price">
                    {`$${price} / ${quantity}`}
                </span>
            </div>
            <Btn inverted onClick={() => addItemToCart(item)}>add to cart</Btn>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    addItemToCart: item => dispatch(addItemToCart(item))
});

export default connect(null, mapDispatchToProps)(PreviewItem);