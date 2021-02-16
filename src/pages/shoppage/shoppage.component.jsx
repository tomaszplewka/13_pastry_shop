import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CategoryPreview from '../../components/category-preview/category-preview.component';
import { selectShopDataItems } from '../../redux/shoppage/shoppage.selectors';

import './shoppage.styles.scss';

const ShopPage = ({ data }) => (
    <div className="shop-page">
        {
            data
                .map(({ id, ...otherCategoryProps }) => (
                <CategoryPreview key={id} {...otherCategoryProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    data: selectShopDataItems
});

export default connect(mapStateToProps)(ShopPage);