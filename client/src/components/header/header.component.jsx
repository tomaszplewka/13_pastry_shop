import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// create and import logo
// import {ReactComponent as Logo} from '../../assets/crown.svg';

import HeaderItem from '../header-item/header-item.component';

import ShoppingCart from '../shopping-cart/shopping-cart.component';
import ShoppingCartDropdown from '../shopping-cart-dropdown/shopping-cart-dropdown.component';
import ShoppingSearch from '../shopping-search/shopping-search.components';

import { selectShoppingCartHidden } from '../../redux/shopping-cart/shopping-cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import { HeaderContainer, LogoContainer, HeaderMenuContainer, MenuItemLink } from './header.styles';

const Header = ({ currentUser, hidden, signOutStart }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <h1 className="header-logo">Pastry Shop</h1>
        </LogoContainer>
        <HeaderMenuContainer>
            <MenuItemLink to="/offer">
                offer
                <HeaderItem/>
            </MenuItemLink>
            <MenuItemLink to="/about-us">
                about us
                <HeaderItem/>
            </MenuItemLink>
            <MenuItemLink to="/contact">
                contact
                <HeaderItem/>
            </MenuItemLink>
            {
                currentUser ?
                <MenuItemLink as="div" onClick={ signOutStart }>
                    sign out
                    <HeaderItem/>
                </MenuItemLink> :
                <MenuItemLink to="/sign-in">
                    sign in
                    <HeaderItem/>
                </MenuItemLink>
            }
            <ShoppingCart/>
            <ShoppingSearch/>
        </HeaderMenuContainer>
        {
            hidden ? null :
            <ShoppingCartDropdown/>
        }
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectShoppingCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);