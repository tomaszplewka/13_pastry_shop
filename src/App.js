import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'; 

import './App.css';

import FrontPageCategories from './pages/frontpage/frontpage-categories.component';
import ShopPage from './pages/shoppage/shoppage.component';
import CheckoutPage from './pages/checkoutpage/checkout-page.component';
import Header from './components/header/header.component';
import Auth from './pages/auth/auth.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

const App = ({ checkUserSession, currentUser }) => {
    useEffect(() => {
        checkUserSession();
    }, [checkUserSession]);
    
    return (
        <div>
        <Header/>
        <Switch>
            <Route exact path='/' component={ FrontPageCategories } />
            <Route path='/shop' component={ ShopPage } />
            <Route exact path='/checkout' component={ CheckoutPage } />
            <Route exact path='/sign-in' render={() => currentUser ? (<Redirect to="/" />) : <Auth/>} />
        </Switch>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
