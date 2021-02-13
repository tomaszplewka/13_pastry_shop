import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleShoppingCartHidden } from '../../redux/shopping-cart/shopping-cart.actions';
import { selectShoppingCartItemsCount } from '../../redux/shopping-cart/shopping-cart.selectors';

// import { ReactComponent as CartIcon} from '../../assets/shopping-bag.svg';

import './shopping-cart.styles.scss';

const ShoppingCart = ( { toggleShoppingCartHidden, shoppingItemCount }) => (
    <div className="shopping-cart">
        {/* <CartIcon className="shopping-cart-icon" /> */}
        <span className="shopping-cart-icon" onClick={toggleShoppingCartHidden}>
            {/* <i className="fas fa-shopping-cart"></i> */}
            <i className="fas fa-shopping-bag"></i>
            <span className="shopping-cart-icon-item-count">{ shoppingItemCount }</span>
        </span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleShoppingCartHidden: () => dispatch(toggleShoppingCartHidden())
});

const mapStateToProps = createStructuredSelector({
    shoppingItemCount: selectShoppingCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);