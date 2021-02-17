import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CategoryPreview from '../category-preview/category-preview.component';
import { selectShopDataForPreview } from '../../redux/shoppage/shoppage.selectors';

import './categories-overview.styles.scss';

const CategoriesOverview = ({ itemCategories }) => {

    // console.log(itemCategories)
        return (
            <div className="categories-overview">
                {
                    itemCategories.map(({id, ...itemsProps}) => (
                        <CategoryPreview key={id} {...itemsProps} />
                    ))
                }
            </div>
        )
}

const mapStateToProps = createStructuredSelector({
    itemCategories: selectShopDataForPreview 
});

export default connect(mapStateToProps)(CategoriesOverview);