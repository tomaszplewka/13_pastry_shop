import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CategoryPreview from '../category-preview/category-preview.component';
import { selectShopDataForPreview } from '../../redux/shoppage/shoppage.selectors';

import './categories-overview.styles.scss';

const CategoriesOverview = ({ itemCategories }) => {

    const item_order = ["cakes", "cookies", "croissants", "donuts", "pies", "treats", "gift boxes", "catering"];
    itemCategories.sort((a, b) => item_order.indexOf(a.category) - item_order.indexOf(b.category));
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