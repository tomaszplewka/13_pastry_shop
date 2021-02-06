import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import FrontPageCategories from './pages/frontpage/frontpage-categories.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import Auth from './pages/auth/auth.component';

import { auth, storeUser } from '../src/firebase/firebase.utilities';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null,
        }
    }

    unsubscribeFromAuthService = null;

    componentDidMount() {
        this.unsubscribeFromAuthService = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userDocRef = await storeUser(userAuth);
                userDocRef.onSnapshot(snapshot => {
                    this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    });
                    console.log(this.state);
                });
            } else {
                this.setState({ currentUser: userAuth });
            }
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuthService();
    }

    render() {
        return (
            <div>
            <Header currentUser={ this.state.currentUser } />
            <Switch>
                <Route exact path='/' component={FrontPageCategories} />
                <Route exact path='/shop' component={ShopPage} />
                <Route exact path='/sign-in' component={Auth} />
            </Switch>
            </div>
        );
    }
}

export default App;
