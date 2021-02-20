import React from 'react';
import { withRouter } from 'react-router-dom';

import PreviewItem from '../preview-item/preview-item.component';

import './category-preview.styles.scss';

const CategoryPreview = ({category, items, history, match, route}) => (
    <div className="category-preview-wrapper">
        <h2 className="category-preview-name" onClick={() => history.push(`${match.path}/${route}`)}>{category}</h2>
        <div className="category-preview">
            {
                items
                    .filter((item, index) => index < 3)
                    .map(item => (
                        <PreviewItem key={ item.id } item={ item } />
                ))
            }
        </div>
    </div>
);

export default withRouter(CategoryPreview);