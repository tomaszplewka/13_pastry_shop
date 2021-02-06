import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utilities';

// create and import logo
import {ReactComponent as Logo} from '../../assets/crown.svg';

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
            </Link>
            <Link className="header-menu-item" to="/contact">
                contact
            </Link>
            {
                currentUser ?
                <div className="header-menu-item" onClick={() => auth.signOut()}>sign out</div> :
                <Link className="header-menu-item" to="/sign-in">sign in</Link>
            }
        </div>
    </div>
);

export default Header;