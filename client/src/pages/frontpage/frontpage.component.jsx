import React from 'react'

// import './frontpage.styles.scss';

import CategoryWrapper from '../../components/category-wrapper/category-wrapper.component';
import ShapeDividerTop from '../../components/shape-divider-top/shape-divider-top.components';
import ShapeDividerBottom from '../../components/shape-divider-bottom/shape-divider-bottom.components';
import DeliveryBanner from '../../components/delivery-banner/delivery-banner.components';

import { FrontPageContainer, FrontPageHeading } from './frontpage.styles';

const FrontPage = () => (
    <div>
        <FrontPageContainer>
            <ShapeDividerTop color="light"/>
            <FrontPageHeading>Discover Our Offer</FrontPageHeading>
            <CategoryWrapper/>
            <ShapeDividerBottom color="yellow"/>
        </FrontPageContainer>
        <DeliveryBanner/>
        <p>Follow Us on social media</p>
        <p>Testimonials</p>
    </div>
);
export default FrontPage;