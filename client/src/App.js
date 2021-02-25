import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'; 

import './App.css';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

const FrontPageCategories = lazy(() => import('./pages/frontpage/frontpage-categories.component'));
const ShopPage = lazy(() => import('./pages/shoppage/shoppage.component'));
const CheckoutPage = lazy(() => import('./pages/checkoutpage/checkout-page.component'));
const Auth = lazy(() => import('./pages/auth/auth.component'));

const App = ({ checkUserSession, currentUser }) => {
    useEffect(() => {
        checkUserSession();
    }, [checkUserSession]);
    
    return (
        <div>
        <Header/>
        <Switch>
            <ErrorBoundary>
                <Suspense fallback={<Spinner/>}>
                    <Route exact path='/' component={ FrontPageCategories } />
                    <Route path='/shop' component={ ShopPage } />
                    <Route exact path='/checkout' component={ CheckoutPage } />
                    <Route exact path='/sign-in' render={() => currentUser ? (<Redirect to="/" />) : <Auth/>} />
                </Suspense>
            </ErrorBoundary>
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
