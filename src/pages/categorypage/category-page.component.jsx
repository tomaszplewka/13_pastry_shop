import React from 'react';
import { connect } from 'react-redux';

import PreviewItem from '../../components/preview-item/preview-item.component';

import { selectCategory } from '../../redux/shoppage/shoppage.selectors'; 

import './category-page.styles.scss';

const CategoryPage = ({ categoryItems }) => {
    const { category, items } = categoryItems;
    return (
        <div className="category">
            <h2 className="category-title">{ category }</h2>
            <div className="category-items">
                {
                    items.map(item => <PreviewItem key={ item.id } item={ item } />)
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    categoryItems: selectCategory(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(CategoryPage);