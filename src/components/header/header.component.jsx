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
                <div class="basicBox">
                    shop
                    <svg width="120" height="50" viewBox="0 0 120 50" xmlns="http://www.w3.org/2000/svg">
                        <rect x='0' y='0' fill='none' width='120' height='50'/>
                    </svg>
                </div>
            </Link>
            {/* <div class="basicBox">
                Hover
                <svg width="120" height="50" viewBox="0 0 120 50" xmlns="http://www.w3.org/2000/svg">
                    <rect x='0' y='0' fill='none' width='120' height='50'/>
                </svg>
            </div> */}
            {/* <div class="swiggleBox">
                Hover
                <svg width="130" height="65" viewBox="0 0 130 65" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.6,0.5c0,5.4,0,61.5,0,61.5s4.5,5.4,9.9,0c5.4-5.4,9.9,0,9.9,0s4.5,5.4,9.9,0c5.4-5.4,9.9,0,9.9,0
                    s4.5,5.4,9.9,0c5.4-5.4,9.9,0,9.9,0s4.5,5.4,9.9,0c5.4-5.4,9.9,0,9.9,0s4.5,5.4,9.9,0c5.4-5.4,9.9,0,9.9,0s4.5,5.4,9.9,0
                    c5.4-5.4,9.9,0,9.9,0s4.5,5.4,9.9,0c0,0,0-56.1,0-61.5H0.6z"/>
                    <path d="M 0 3 C 3 0 3 6 5 3 A 1 1 90 0 0 5 3 C 7 0 7 6 10 3 C 13 0 13 6 15 3 Z"/>
                </svg>
            </div> */}
            <Link className="header-menu-item" to="/contact">
                <div class="basicBox">
                    contact
                    <svg width="120" height="50" viewBox="0 0 120 50" xmlns="http://www.w3.org/2000/svg">
                        <rect x='0' y='0' fill='none' width='120' height='50'/>
                    </svg>
                </div>
            </Link>
            {
                currentUser ?
                <div className="header-menu-item" onClick={() => auth.signOut()}>
                    <div class="basicBox">
                        sign out
                        <svg width="120" height="50" viewBox="0 0 120 50" xmlns="http://www.w3.org/2000/svg">
                            <rect x='0' y='0' fill='none' width='120' height='50'/>
                        </svg>
                    </div>
                </div> :
                <Link className="header-menu-item" to="/sign-in">
                    <div class="basicBox">
                        sign in
                        <svg width="120" height="50" viewBox="0 0 120 50" xmlns="http://www.w3.org/2000/svg">
                            <rect x='0' y='0' fill='none' width='120' height='50'/>
                        </svg>
                    </div>
                </Link>
            }
        </div>
    </div>
);

export default Header;