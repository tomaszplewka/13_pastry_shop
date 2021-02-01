import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import FrontPageCategories from './pages/frontpage/frontpage-categories.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={FrontPageCategories} />
        {/* <Route exact path='/' component={FrontPageCategories} /> */}
      </Switch>
    </div>
  );
}

export default App;
