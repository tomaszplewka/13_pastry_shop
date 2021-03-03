import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleShoppingCartHidden } from '../../redux/shopping-cart/shopping-cart.actions';
import { selectShoppingCartItemsCount } from '../../redux/shopping-cart/shopping-cart.selectors';

// import { ReactComponent as CartIcon} from '../../assets/shopping-bag.svg';

import { ShoppingCartContainer, ShoppingCartIcon, ShoppingCartIconSvg, ShoppingCartItemCount } from './shopping-cart-styles';

const ShoppingCart = ( { toggleShoppingCartHidden, shoppingItemCount }) => (
    <ShoppingCartContainer className="shopping-cart">
        <ShoppingCartIcon className="shopping-cart-icon" onClick={toggleShoppingCartHidden}>
            <ShoppingCartIconSvg className="fas fa-shopping-bag"></ShoppingCartIconSvg>
            <ShoppingCartItemCount className="shopping-cart-icon-item-count">{ shoppingItemCount }</ShoppingCartItemCount>
        </ShoppingCartIcon>
    </ShoppingCartContainer>
);

const mapDispatchToProps = dispatch => ({
    toggleShoppingCartHidden: () => dispatch(toggleShoppingCartHidden())
});

const mapStateToProps = createStructuredSelector({
    shoppingItemCount: selectShoppingCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);