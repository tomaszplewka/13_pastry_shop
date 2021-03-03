import React from 'react';

import { Svg, Rect } from './header-item.styles';

const HeaderItem = () => {
    const width = window.getComputedStyle(document.documentElement).getPropertyValue('--menu-item-width');
    const height = window.getComputedStyle(document.documentElement).getPropertyValue('--menu-item-height');
    return (
        <Svg width={ width } height={ height } viewBox={`0 0 ${width.slice(0, -2)} ${height.slice(0, -2)}`} xmlns="http://www.w3.org/2000/svg">
            <Rect x="0" y="0" fill="none" width={ width } height={ height }/>
        </Svg>
    );
};

export default HeaderItem;