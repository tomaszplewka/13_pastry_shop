import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utilities';

// create and import logo
import {ReactComponent as Logo} from '../../assets/crown.svg';

import HeaderItem from '../header-item/header-item.component';

import ShoppingCart from '../shopping-cart/shopping-cart.component';
import ShoppingCartDropdown from '../shopping-cart-dropdown/shopping-cart-dropdown.component';

import { selectShoppingCartHidden } from '../../redux/shopping-cart/shopping-cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { HeaderContainer, LogoContainer, HeaderMenuContainer, MenuItemLink } from './header.styles';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            {/* insert created logo here!!! */}
            <Logo className="header-logo" />
        </LogoContainer>
        <HeaderMenuContainer>
            <MenuItemLink to="/shop">
                shop
                <HeaderItem/>
            </MenuItemLink>
            <MenuItemLink to="/contact">
                contact
                <HeaderItem/>
            </MenuItemLink>
            {
                currentUser ?
                <MenuItemLink as="div" onClick={() => auth.signOut()}>
                    sign out
                    <HeaderItem/>
                </MenuItemLink> :
                <MenuItemLink to="/sign-in">
                    sign in
                    <HeaderItem/>
                </MenuItemLink>
            }
            <ShoppingCart/>
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

export default connect(mapStateToProps)(Header);