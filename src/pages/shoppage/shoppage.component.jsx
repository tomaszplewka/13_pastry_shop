import React from 'react'

import data from './shoppage.data';

import CategoryPreview from '../../components/category-preview/category-preview.component';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data
        }
    }
    render() {
        const {data} = this.state;
        return (
            <div className="shop-page">
                {
                    data
                        .map(({ id, ...otherCategoryProps }) => (
                        <CategoryPreview key={id} {...otherCategoryProps} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;