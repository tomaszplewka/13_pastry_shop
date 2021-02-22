import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CategoryOverviewContainer from '../../components/categories-overview/categories-overview.container';
import CategoryPageContainer from '../categorypage/category-page.container';

import { fetchDataStart } from '../../redux/shoppage/shoppage.actions';

import './shoppage.styles.scss';

import chocolateCake from '../../images/cakes/chocolate-cake.jpg';
import whiteCakeChocolate from '../../images/cakes/white-cake-chocolate-topping.jpg';
import whiteCakeBlackberry from '../../images/cakes/white-cake-blackberry.jpg';
import whiteCakeStrawberry from '../../images/cakes/white-cake-strawberry.jpg';
import coffeeCake from '../../images/cakes/coffee-cake.jpg';

import carrotPie from '../../images/pies/carrot-pie.jpg';
import orangePie from '../../images/pies/orange-pie.jpg';
import raspberryPie from '../../images/pies/raspberry-pie.jpg';
import pumpkinPieTopping from '../../images/pies/pumpkin-pie-with-topping.jpg';
import plumPie from '../../images/pies/plum-pie.jpg';

import oatCookies from '../../images/cookies/oat-cookies.jpg';
import chocolateChipCookies from '../../images/cookies/chocolate-chip-cookies.jpg';
import cocoaCookiesPeanuts from '../../images/cookies/cocoa-cookies-peanuts.jpg';
import butterCookies from '../../images/cookies/butter-cookies.jpg';
import gingerbreadCookies from '../../images/cookies/gingerbread-cookies.jpg';

import crispyDonut from '../../images/donuts/crispy-donut.jpg';
import chocolateDonut from '../../images/donuts/chocolate-donut.jpg';
import honeyDonut from '../../images/donuts/honey-donut.jpg';
import pinkDonut from '../../images/donuts/pink-donut.jpg';
import blueDonut from '../../images/donuts/blue-donut.jpg';

import xlCroissants from '../../images/croissants/xl-croissants.jpg';
import sugarCroissants from '../../images/croissants/sugar-croissants.jpg';
import peanutButterCroissants from '../../images/croissants/peanut-butter-croissants.jpg';
import plainCroissants from '../../images/croissants/plain-croissants.jpg';
import chocolateCroissants from '../../images/croissants/chocolate-croissants.jpg';

import classicCandies from '../../images/treats/classic-candies.jpg';
import chocolateCandies from '../../images/treats/chocolate-candies.jpg';
import pinkLollipops from '../../images/treats/pink-lollipops.jpg';
import chocolateGlazedLollipops from '../../images/treats/chocolate-glazed-lollipops.jpg';
import sourWorms from '../../images/treats/sour-worms.jpg';

import cookiesGiftBoxSet1 from '../../images/gift-boxes/cookies-gift-box-set-1.jpg';
import cookiesGiftBoxSet2 from '../../images/gift-boxes/cookies-gift-box-set-2.jpg';
import donutsGiftBox from '../../images/gift-boxes/donuts-gift-box.jpg';
import candiesGiftBox from '../../images/gift-boxes/candies-gift-box.jpg';
import customGiftBox from '../../images/gift-boxes/custom-gift-box.jpg';

import showcase1 from '../../images/catering/showcase-1.jpg';
import showcase2 from '../../images/catering/showcase-2.jpg';
import showcase3 from '../../images/catering/showcase-3.jpg';
import showcase4 from '../../images/catering/showcase-4.jpg';

const ShopPage = ({ fetchDataStart, match }) => {
    useEffect(() => {
        fetchDataStart();
    }, [fetchDataStart]);

    return (
        <div className="shop-page">
            <Route exact path={ `${match.path}` } component={CategoryOverviewContainer} />
            <Route path={`${match.path}/:categoryId`} component={CategoryPageContainer} />
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    fetchDataStart: () => dispatch(fetchDataStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);