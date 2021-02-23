import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import WithSpinner from '../with-spinner/with-spinner.component';

import CategoryOverview from './categories-overview.component';

import { selectIsDataFetched } from '../../redux/shoppage/shoppage.selectors'

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsDataFetched
});

const CategoryOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner    
)(CategoryOverview);

export default CategoryOverviewContainer;