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
            pageUrl: 'cakes'
        },
        {
            title: 'pies',
            imageUrl: pies,
            id: 2,
            pageUrl: 'pies'
        },
        {
            title: 'cookies',
            imageUrl: cookies,
            id: 3,
            pageUrl: 'cookies'
        },
        {
            title: 'donuts',
            imageUrl: donuts,
            id: 4,
            pageUrl: 'donuts'
        },
        // {
        //     title: 'scones',
        //     imageUrl: scones,
        //     id: 5,
        //     pageUrl: 'scones'
        // },
        {
            title: 'croissants',
            imageUrl: croissants,
            id: 6,
            pageUrl: 'croissants'
        },
        {
            title: 'treats',
            imageUrl: treats,
            size: 'large',
            id: 7,
            pageUrl: 'treats'
        },
        {
            title: 'gift boxes',
            imageUrl: giftBoxes,
            size: 'large',
            id: 8,
            pageUrl: 'gift-boxes'
        },
        {
            title: 'catering',
            imageUrl: catering,
            size: 'large',
            id: 9,
            pageUrl: 'catering'
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