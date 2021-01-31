import React from 'react';

import CategoryItem from '../category-item/category-item.component';

import './category-wrapper.styles.scss';

import cakes from '../../images/cakes.jpg';
import pies from '../../images/pies.jpg';
import cookies from '../../images/cookies.jpg';
import donuts from '../../images/donuts.jpg';
import scones from '../../images/scones.jpg';
import croissants from '../../images/croissants.jpg';
import treats from '../../images/treats.jpg';
import giftBoxes from '../../images/gift-boxes.jpg';
import catering from '../../images/catering.jpg';

class CategoryWrapper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categoryItems: [{
                title: 'cakes',
                imageUrl: cakes,
                id: 1
            },
            {
                title: 'pies',
                imageUrl: pies,
                id: 2
            },
            {
                title: 'cookies',
                imageUrl: cookies,
                id: 3
            },
            {
                title: 'donuts',
                imageUrl: donuts,
                id: 4
            },
            {
                title: 'scones',
                imageUrl: scones,
                id: 5
            },
            {
                title: 'croissants',
                imageUrl: croissants,
                id: 6
            },
            {
                title: 'treats',
                imageUrl: treats,
                size: 'large',
                id: 7
            },
            {
                title: 'gift boxes',
                imageUrl: giftBoxes,
                size: 'large',
                id: 8
            },
            {
                title: 'catering',
                imageUrl: catering,
                size: 'large',
                id: 9
            }
            ]
        }
    }
    render() {
        return (
            <div className="category-item-wrapper">
                {
                    this.state.categoryItems.map(({title, imageUrl, id, size}) => (
                        <CategoryItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                    ))
                }
                <div class="custom-shape-divider-top-1612063714">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>
            </div>
        )
    }
};
export default CategoryWrapper;