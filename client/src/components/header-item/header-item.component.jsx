import React from 'react';

import './header-item.styles.scss';

const HeaderItem = () => {
    const width = window.getComputedStyle(document.documentElement).getPropertyValue('--menu-item-width');
    const height = window.getComputedStyle(document.documentElement).getPropertyValue('--menu-item-height');
    return (
        <svg width={ width } height={ height } viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" fill="none" width={ width } height={ height }/>
        </svg>
    );
};

export default HeaderItem;