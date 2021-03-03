import React from 'react';

import { ShoppingCartSearch, ShoppingCartSearchIcon } from './shopping-search.styles';

const ShoppingSearch = () => (
    <ShoppingCartSearch className="shopping-cart-search">
        <ShoppingCartSearchIcon className="fas fa-search"></ShoppingCartSearchIcon>
    </ShoppingCartSearch>
);

export default ShoppingSearch;