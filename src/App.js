import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import FrontPageCategories from './pages/frontpage/frontpage-categories.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import Auth from './pages/auth/auth.component';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={FrontPageCategories} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/sign-in' component={Auth} />
      </Switch>
    </div>
  );
}

export default App;
