import React from 'react';

import './category-item.styles.scss';

const CategoryItem = ({title, imageUrl, size}) => (
    <div className={`${size !== undefined ? size : ''} category-item`}>
        <div className="background-image" style={{ 
            backgroundImage: `url(${imageUrl})`
         }}></div>
        <div className="category-item-content">
            <h2 className="category-item-title">{title}</h2>
            <span className="category-item-subtitle">See All</span>
        </div>
    </div>
);
export default CategoryItem;