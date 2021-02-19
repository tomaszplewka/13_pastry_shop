import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CategoryOverview from '../../components/categories-overview/categories-overview.component';
import CategoryPage from '../categorypage/category-page.component';

import { db, convertCategoriesToObject } from '../../firebase/firebase.utilities';

import { updateCategories } from '../../redux/shoppage/shoppage.actions';

import './shoppage.styles.scss';

class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCategories } = this.props;
        const categoriesRef = db.collection('categories');

        categoriesRef.onSnapshot(async snapshot => {
            const categoriesObj = convertCategoriesToObject(snapshot);
            updateCategories(categoriesObj);
        });
    };

    render() {
        const { match } = this.props;
        return (
            <div className="shop-page">
                <Route exact path={ `${match.path}` } component={ CategoryOverview } />
                <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCategories: categories => dispatch(updateCategories(categories))
});

export default connect(null, mapDispatchToProps)(ShopPage);