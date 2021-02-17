import React from 'react';
import { Route } from 'react-router-dom';

import CategoryOverview from '../../components/categories-overview/categories-overview.component';
import CategoryPage from '../categorypage/category-page.component';

import './shoppage.styles.scss';

const ShopPage = ({ match }) => {
    // console.log(match);
    return (
        <div className="shop-page">
            <Route exact path={ `${match.path}` } component={ CategoryOverview } />
            <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
        </div>
    );
}


export default ShopPage;