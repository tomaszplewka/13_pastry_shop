import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CategoryItem from '../category-item/category-item.component';
import { selectItemCategory } from '../../redux/item-category/item-category.selectors';

import './categories-overview.styles.scss';

const CategoriesOverview = ({ itemCategories }) => (
    <div className="categories-overview">
        {
            itemCategories.map(({id, ...itemsProps}) => (
                <CategoryItem key={id} {...itemsProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    itemCategories: selectItemCategory 
});

export default connect(mapStateToProps)(CategoriesOverview);