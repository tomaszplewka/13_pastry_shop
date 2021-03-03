import React from 'react';

import ShapeDividerBottom from '../shape-divider-bottom/shape-divider-bottom.components';

import { DeliveryBannerContainer, DeliveryBannerTitle, DeliveryBannerSubitle, DeliveryBannerIconsWrapper, DeliveryBannerIconContainer, DeliveryBannerIcon } from './delivery-banner.styles';

import UberEats from '../../images/delivery-banner/uber-eats.png';
import SkipTheDishes from '../../images/delivery-banner/skip-the-dishes.png';

const DeliveryBanner = () => (
    <DeliveryBannerContainer>
        <DeliveryBannerTitle>Serious craving? Get seriously fast delivery!</DeliveryBannerTitle>
        <DeliveryBannerSubitle>Selected Areas Only</DeliveryBannerSubitle>
        <DeliveryBannerIconsWrapper>
            <DeliveryBannerIconContainer>
                <DeliveryBannerIcon src={ UberEats } alt="uber eats"/>
            </DeliveryBannerIconContainer>
            <DeliveryBannerIconContainer>
                <DeliveryBannerIcon src={ SkipTheDishes } alt="skip the dishes"/>
            </DeliveryBannerIconContainer>
        </DeliveryBannerIconsWrapper>
        <ShapeDividerBottom color="light" />
    </DeliveryBannerContainer>
);

export default DeliveryBanner;