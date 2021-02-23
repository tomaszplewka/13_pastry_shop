import React from 'react';
import { withRouter } from 'react-router-dom';

import './category-item.styles.scss';

const CategoryItem = ({title, imageUrl, size, pageUrl, history, match}) => (
    <div 
        className={`${size !== undefined ? size : ''} category-item`}
        onClick={() => history.push(`${match.url}${pageUrl}`)}
    >
        <div className="background-image" style={{ 
            backgroundImage: `url(${imageUrl})`
         }}></div>
        <div className="category-item-content">
            <h2 className="category-item-title">{title}</h2>
            {/* <span className="category-item-subtitle">See All</span> */}
        </div>
    </div>
);
export default withRouter(CategoryItem);