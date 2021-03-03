import React from 'react';

import { FloatingImgContainer } from './floating-img.styles';

const FloatingImg = ({ position, backgroundImg }) => {
    console.log(position);
    console.log(backgroundImg);
    return (
        <FloatingImgContainer position={ position } backgroundImg={ backgroundImg }>
            <div>
                <div></div>
            </div>
        </FloatingImgContainer>
    );
}


export default FloatingImg;