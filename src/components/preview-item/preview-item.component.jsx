import React from 'react';

import './preview-item.styles.scss';

const PreviewItem = ({id, name, imageUrl, price}) => (
    <div className='preview-item'>
        <div
            className='preview-item-img'
            style={{ 
                backgroundImage: `url(${imageUrl})`
             }}
        ></div>
        <div className='preview-item-footer'>
             <span className="name">{name}</span>
             <span className="price">{price}</span>
        </div>
    </div>
);

export default PreviewItem;