import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CategoryItem from '../category-item/category-item.component';
import { selectItemCategory } from '../../redux/item-category/item-category.selectors';

import './category-wrapper.styles.scss';


const CategoryWrapper = ({ itemCategories }) => (
    <div className="category-item-wrapper">
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

export default connect(mapStateToProps)(CategoryWrapper);