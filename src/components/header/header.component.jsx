import React from 'react';
import { Link } from 'react-router-dom';

// create and import logo
import {ReactComponent as Logo} from '../../assets/crown.svg';

import './header.styles.scss';

const Header = () => (
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
        </div>
    </div>
);

export default Header;