import React from 'react';

import CategoriesOverview from '../categories-overview/categories-overview.component';

import './category-wrapper.styles.scss';


const CategoryWrapper = () => (
    <div className="category-item-wrapper">
        <CategoriesOverview/>
    </div>
);

export default CategoryWrapper;