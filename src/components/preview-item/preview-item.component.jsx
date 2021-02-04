import React from 'react';

import './preview-item.styles.scss';

const PreviewItem = ({id, name, imageUrl, price, quantity}) => (
    <div className='preview-item'>
        <div className="preview-item-img-wrapper">
            <div
                className='preview-item-img'
                style={{ 
                    backgroundImage: `url(${imageUrl})`
                    }}
            ></div>
        </div>
        <div className='preview-item-body'>
             <span className="name">{name}</span>
             <span className="price">
                 {`$${price} / ${quantity}`}
             </span>
        </div>
    </div>
);

export default PreviewItem;