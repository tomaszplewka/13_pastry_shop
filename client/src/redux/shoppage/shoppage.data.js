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

const ShopPageData = {
    cakes: {
        id: 1,
        category: 'cakes',
        route: 'cakes',
        items: [
            {
                id: 1,
                name: 'chocolate cake',
                imageUrl: chocolateCake,
                price: 30,
                quantity: 'each'
            },
            {
                id: 2,
                name: 'white cake with topping',
                imageUrl: whiteCakeChocolate,
                price: 35,
                quantity: 'each'
            },
            {
                id: 3,
                name: 'white cake with blackberries',
                imageUrl: whiteCakeBlackberry,
                price: 40,
                quantity: 'each'
            },
            {
                id: 4,
                name: 'white cake with strawberries',
                imageUrl: whiteCakeStrawberry,
                price: 30,
                quantity: 'each'
            },
            {
                id: 5,
                name: 'coffee cake',
                imageUrl: coffeeCake,
                price: 25,
                quantity: 'each'
            }
        ]
    },
    pies: {
        id: 2,
        category: 'pies',
        route: 'pies',
        items: [
            {
                id: 6,
                name: 'carrot pie',
                imageUrl: carrotPie,
                price: 15,
                quantity: 'each'
            },
            {
                id: 7,
                name: 'orange pie',
                imageUrl: orangePie,
                price: 20,
                quantity: 'each'
            },
            {
                id: 8,
                name: 'raspberry pie',
                imageUrl: raspberryPie,
                price: 17,
                quantity: 'each'
            },
            {
                id: 9,
                name: 'pumpkin pie with topping',
                imageUrl: pumpkinPieTopping,
                price: 13,
                quantity: 'each'
            },
            {
                id: 10,
                name: 'plum pie',
                imageUrl: plumPie,
                price: 15,
                quantity: 'each'
            }
        ]
    },
    cookies: {
        id: 3,
        category: 'cookies',
        route: 'cookies',
        items: [
            {
                id: 11,
                name: 'oat cookies',
                imageUrl: oatCookies,
                price: 3,
                quantity: 'each'
            },
            {
                id: 12,
                name: 'chocolate chip cookies',
                imageUrl: chocolateChipCookies,
                price: 4,
                quantity: 'each'
            },
            {
                id: 13,
                name: 'cocoa cookies with peanuts',
                imageUrl: cocoaCookiesPeanuts,
                price: 5,
                quantity: 'each'
            },
            {
                id: 14,
                name: 'butter cookies with chocolate',
                imageUrl: butterCookies,
                price: 3,
                quantity: 'each'
            },
            {
                id: 15,
                name: 'gingerbread cookies',
                imageUrl: gingerbreadCookies,
                price: 5,
                quantity: 'each'
            }
        ]
    },
    donuts: {
        id: 4,
        category: 'donuts',
        route: 'donuts',
        items: [
            {
                id: 16,
                name: 'crispy donut',
                imageUrl: crispyDonut,
                price: 3,
                quantity: 'each'
            },
            {
                id: 17,
                name: 'chocolate donut',
                imageUrl: chocolateDonut,
                price: 4,
                quantity: 'each'
            },
            {
                id: 18,
                name: 'honey donut',
                imageUrl: honeyDonut,
                price: 5,
                quantity: 'each'
            },
            {
                id: 19,
                name: 'pink donut',
                imageUrl: pinkDonut,
                price: 3,
                quantity: 'each'
            },
            {
                id: 20,
                name: 'blue donut',
                imageUrl: blueDonut,
                price: 5,
                quantity: 'each'
            }
        ]
    },
    // scones: {
    //     id: 5,
    //     category: 'scones',
    //     route: 'scones',
    //     items: [
    //         {
    //             id: 1,
    //             name: 'strawberry jam scone with raisins',
    //             imageUrl: scone,
    //             price: 5
    //         }
    //     ]
    // },
    croissants: {
        id: 6,
        category: 'croissants',
        route: 'croissants',
        items: [
            {
                id: 21,
                name: 'extra large croissants',
                imageUrl: xlCroissants,
                price: 3,
                quantity: 'each'
            },
            {
                id: 22,
                name: 'sugar-croissants',
                imageUrl: sugarCroissants,
                price: 4,
                quantity: 'each'
            },
            {
                id: 23,
                name: 'peanut butter croissants',
                imageUrl: peanutButterCroissants,
                price: 5,
                quantity: 'each'
            },
            {
                id: 24,
                name: 'plain croissants',
                imageUrl: plainCroissants,
                price: 3,
                quantity: 'each'
            },
            {
                id: 25,
                name: 'chocolate croissants',
                imageUrl: chocolateCroissants,
                price: 5,
                quantity: 'each'
            }
        ]
    },
    treats: {
        id: 7,
        category: 'treats',
        route: 'treats',
        items: [
            {
                id: 26,
                name: 'classic candies',
                imageUrl: classicCandies,
                price: 3,
                quantity: '100g'
            },
            {
                id: 27,
                name: 'chocolate candies',
                imageUrl: chocolateCandies,
                price: 10,
                quantity: 'box'
            },
            {
                id: 28,
                name: 'pink lollipops',
                imageUrl: pinkLollipops,
                price: 5,
                quantity: 'each'
            },
            {
                id: 29,
                name: 'chocolate glazed lollipops',
                imageUrl: chocolateGlazedLollipops,
                price: 3,
                quantity: 'each'
            },
            {
                id: 30,
                name: 'sour worms',
                imageUrl: sourWorms,
                price: 5,
                quantity: '100g'
            }
        ]
    },
    "gift-boxes": {
        id: 8,
        category: 'gift boxes',
        route: 'gift-boxes',
        items: [
            {
                id: 31,
                name: 'cookies gift box set 1',
                imageUrl: cookiesGiftBoxSet1,
                price: 13,
                quantity: 'box'
            },
            {
                id: 32,
                name: 'cookies gift box set 2',
                imageUrl: cookiesGiftBoxSet2,
                price: 14,
                quantity: 'box'
            },
            {
                id: 33,
                name: 'donuts gift box',
                imageUrl: donutsGiftBox,
                price: 15,
                quantity: 'box'
            },
            {
                id: 34,
                name: 'candies gift box',
                imageUrl: candiesGiftBox,
                price: 13,
                quantity: 'box'
            },
            {
                id: 35,
                name: 'custom gift box',
                imageUrl: customGiftBox,
                price: 15,
                quantity: 'box'
            }
        ]
    },
    catering: {
        id: 9,
        category: 'catering',
        route: 'catering',
        items: [
            {
                id: 36,
                name: 'showcase 1',
                imageUrl: showcase1,
                price: 3
            },
            {
                id: 37,
                name: 'showcase 2',
                imageUrl: showcase2,
                price: 4
            },
            {
                id: 38,
                name: 'showcase 3',
                imageUrl: showcase3,
                price: 5
            },
            {
                id: 39,
                name: 'showcase 4',
                imageUrl: showcase4,
                price: 3
            }
        ]
    }
};
export default ShopPageData;