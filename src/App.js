import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import FrontPageCategories from './pages/frontpage/frontpage-categories.component';
import ShopPage from './pages/shoppage/shoppage.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={FrontPageCategories} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
