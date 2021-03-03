import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CategoryItem from '../category-item/category-item.component';
import { selectItemCategory } from '../../redux/item-category/item-category.selectors';
import FloatingImg from '../floating-img/floating-img.components';

// import './category-wrapper.styles.scss';
import { CategoryItemContainer } from './category-wrapper.styles';

import ChocolateCookies from '../../images/category-wrapper/chocolate-cookies.png';
import ChocolateCupcake from '../../images/category-wrapper/chocolate-cupcake.png';
import Croissants from '../../images/category-wrapper/croissants.png';


const CategoryWrapper = ({ itemCategories }) => (
    <CategoryItemContainer className="category-item-wrapper">
        {
            itemCategories.map(({id, ...itemsProps}) => (
                <CategoryItem key={id} {...itemsProps} />
            ))
        }
        <FloatingImg position={ { top: "-16%", left: "0%"} } backgroundImg={ ChocolateCupcake } />
        <FloatingImg position={ { top: "90%", left: "85%"} } backgroundImg={ Croissants } />
        <FloatingImg position={ { top: "85%", left: "0%"} } backgroundImg={ ChocolateCookies } />
    </CategoryItemContainer>
);

const mapStateToProps = createStructuredSelector({
    itemCategories: selectItemCategory 
});

export default connect(mapStateToProps)(CategoryWrapper);