import React from 'react';
import { connect } from 'react-redux';

import { toggleShoppingCartHidden } from '../../redux/shopping-cart/shopping-cart.actions';

// import { ReactComponent as CartIcon} from '../../assets/shopping-bag.svg';

import './shopping-cart.styles.scss';

const ShoppingCart = ( { toggleShoppingCartHidden }) => (
    <div className="shopping-cart">
        {/* <CartIcon className="shopping-cart-icon" /> */}
        <span className="shopping-cart-icon" onClick={toggleShoppingCartHidden}>
            {/* <i className="fas fa-shopping-cart"></i> */}
            <i className="fas fa-shopping-bag"></i>
            <span className="shopping-cart-icon-item-count">0</span>
        </span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleShoppingCartHidden: () => dispatch(toggleShoppingCartHidden())
});

export default connect(null, mapDispatchToProps)(ShoppingCart);