import React from 'react';
import { withRouter } from 'react-router-dom';

import './category-item.styles.scss';
import { CategoryItemContainer, CategoryItemBackgroundImg, CategoryItemContent, CategoryItemTitle } from './category-item.styles';

const CategoryItem = ({title, imageUrl, pageUrl, history, match}) => (
    <CategoryItemContainer>
        <CategoryItemBackgroundImg
            style={{ backgroundImage: `url(${imageUrl})` }}
        ></CategoryItemBackgroundImg>
        <CategoryItemContent onClick={() => history.push(`${match.url}${pageUrl}`)} >
            <CategoryItemTitle className="category-item-title">{title}</CategoryItemTitle>
        </CategoryItemContent>
    </CategoryItemContainer>
);
export default withRouter(CategoryItem);