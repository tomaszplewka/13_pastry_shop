import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'; 

import './App.css';

import FrontPageCategories from './pages/frontpage/frontpage-categories.component';
import ShopPage from './pages/shoppage/shoppage.component';
import CheckoutPage from './pages/checkoutpage/checkout-page.component';
import Header from './components/header/header.component';
import Auth from './pages/auth/auth.component';

import { auth, storeUser } from '../src/firebase/firebase.utilities';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends React.Component {
    unsubscribeFromAuthService = null;

    componentDidMount() {
        const { setCurrentUser } = this.props;

        this.unsubscribeFromAuthService = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userDocRef = await storeUser(userAuth);
                userDocRef.onSnapshot(snapshot => {
                    setCurrentUser({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    });
                    // console.log(this.state);
                });
            } else {
                setCurrentUser(userAuth);
            }
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuthService();
    }

    render() {
        return (
            <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={ FrontPageCategories } />
                <Route exact path='/shop' component={ ShopPage } />
                <Route exact path='/checkout' component={ CheckoutPage } />
                <Route exact path='/sign-in' render={() => this.props.currentUser ? (<Redirect to="/" />) : <Auth/>} />
            </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
