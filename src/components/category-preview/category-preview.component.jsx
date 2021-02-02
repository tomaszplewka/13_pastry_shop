import React from 'react'

import PreviewItem from '../preview-item/preview-item.component';

import './category-preview.styles.scss';

const CategoryPreview = ({category, items}) => (
    <div className="category-preview-wrapper">
        <h2 className="category-preview-name">{category}</h2>
        <div className="category-preview">
            {
                items
                    .filter((item, index) => index < 3)
                    .map(({id, ...otherItemProps}) => (
                        <PreviewItem key={id} {...otherItemProps} />
                ))
            }
        </div>
    </div>
);

export default CategoryPreview;