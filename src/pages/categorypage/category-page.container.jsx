import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CategoryPage from './category-page.component';

import { selectIsDataLoaded } from '../../redux/shoppage/shoppage.selectors'

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsDataLoaded(state)
});

const CategoryPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner    
)(CategoryPage);

export default CategoryPageContainer;