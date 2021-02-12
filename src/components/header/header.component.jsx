import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utilities';

// create and import logo
import {ReactComponent as Logo} from '../../assets/crown.svg';

import HeaderItem from '../header-item/header-item.component';

import ShoppingCart from '../shopping-cart/shopping-cart.component';
import ShoppingCartDropdown from '../shopping-cart-dropdown/shopping-cart-dropdown.component';

import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className="header">
        <Link className="header-logo-wrapper" to="/">
            {/* insert created logo here!!! */}
            <Logo className="header-logo" />
        </Link>
        <div className="header-menu">
            <Link className="header-menu-item" to="/shop">
                shop
                <HeaderItem/>
            </Link>
            <Link className="header-menu-item" to="/contact">
                contact
                <HeaderItem/>
            </Link>
            {
                currentUser ?
                <div className="header-menu-item" onClick={() => auth.signOut()}>
                    sign out
                    <HeaderItem/>
                </div> :
                <Link className="header-menu-item" to="/sign-in">
                    sign in
                    <HeaderItem/>
                </Link>
            }
            <ShoppingCart/>
        </div>
        <ShoppingCartDropdown/>
    </div>
);

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);