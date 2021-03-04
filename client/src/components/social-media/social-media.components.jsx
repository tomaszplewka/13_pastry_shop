import React from 'react';

import ShapeDividerBottom from '../shape-divider-bottom/shape-divider-bottom.components';

import { SocialMediaContainer, SocialMediaTitle, SocialMediaImgContainer, SocialMediaImgColumn, SocialMediaImgWrapper, SocialMediaImg, SocialMediaImgOverlay, SocialMediaIcon } from './social-media.styles';

import Social1 from '../../images/social-media/social1.jpg';
import Social2 from '../../images/social-media/social2.jpg';
import Social3 from '../../images/social-media/social3.jpg';
import Social4 from '../../images/social-media/social4.jpg';

const SocialMedia = () => (
    <SocialMediaContainer>
        <SocialMediaTitle>Follow @pastryshop on Social Media</SocialMediaTitle>
        <SocialMediaImgContainer>
            <SocialMediaImgColumn>
                <SocialMediaImgWrapper>
                    <SocialMediaImg tilted="right" src={ Social1 } alt=""/>
                    <SocialMediaImgOverlay tilted="right">
                        <SocialMediaIcon className="fab fa-facebook-square"></SocialMediaIcon>
                        <SocialMediaIcon className="fab fa-instagram-square"></SocialMediaIcon>
                    </SocialMediaImgOverlay>
                </SocialMediaImgWrapper>
                <SocialMediaImgWrapper>
                    <SocialMediaImg src={ Social2 } alt=""/>
                    <SocialMediaImgOverlay>
                        <SocialMediaIcon className="fab fa-facebook-square"></SocialMediaIcon>
                        <SocialMediaIcon className="fab fa-instagram-square"></SocialMediaIcon>
                    </SocialMediaImgOverlay>
                </SocialMediaImgWrapper>
            </SocialMediaImgColumn>
            <SocialMediaImgColumn>
                <SocialMediaImgWrapper>
                    <SocialMediaImg src={ Social3 } alt=""/>
                    <SocialMediaImgOverlay>
                        <SocialMediaIcon className="fab fa-facebook-square"></SocialMediaIcon>
                        <SocialMediaIcon className="fab fa-instagram-square"></SocialMediaIcon>
                    </SocialMediaImgOverlay>
                </SocialMediaImgWrapper>
                <SocialMediaImgWrapper>
                    <SocialMediaImg tilted="right" src={ Social4 } alt=""/>
                    <SocialMediaImgOverlay tilted="right">
                        <SocialMediaIcon className="fab fa-facebook-square"></SocialMediaIcon>
                        <SocialMediaIcon className="fab fa-instagram-square"></SocialMediaIcon>
                    </SocialMediaImgOverlay>
                </SocialMediaImgWrapper>
            </SocialMediaImgColumn>
        </SocialMediaImgContainer>
        <ShapeDividerBottom color="apricot" />
    </SocialMediaContainer>
);

export default SocialMedia;