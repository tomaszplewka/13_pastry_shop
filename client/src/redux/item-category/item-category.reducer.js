import cakes from '../../images/cakes.jpg';
import pies from '../../images/pies.jpg';
import cookies from '../../images/cookies.jpg';
import donuts from '../../images/donuts.jpg';
// import scones from '../../images/scones.jpg';
import croissants from '../../images/croissants.jpg';
import treats from '../../images/treats.jpg';
import giftBoxes from '../../images/gift-boxes.jpg';
import catering from '../../images/catering.jpg';

const INITIAL_STATE = {
    itemCategories: [
        {
            title: 'cakes',
            imageUrl: cakes,
            id: 1,
            pageUrl: 'offer/cakes'
        },
        {
            title: 'pies',
            imageUrl: pies,
            id: 2,
            pageUrl: 'offer/pies'
        },
        {
            title: 'cookies',
            imageUrl: cookies,
            id: 3,
            pageUrl: 'offer/cookies'
        },
        {
            title: 'donuts',
            imageUrl: donuts,
            id: 4,
            pageUrl: 'offer/donuts'
        },
        // {
        //     title: 'scones',
        //     imageUrl: scones,
        //     id: 5,
        //     pageUrl: 'offer/scones'
        // },
        {
            title: 'croissants',
            imageUrl: croissants,
            id: 6,
            pageUrl: 'offer/croissants'
        },
        {
            title: 'treats',
            imageUrl: treats,
            size: 'large',
            id: 7,
            pageUrl: 'offer/treats'
        },
        {
            title: 'gift boxes',
            imageUrl: giftBoxes,
            size: 'large',
            id: 8,
            pageUrl: 'offer/gift-boxes'
        },
        {
            title: 'catering',
            imageUrl: catering,
            size: 'large',
            id: 9,
            pageUrl: 'offer/catering'
        }
    ]
};

const itemCategoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default itemCategoryReducer;