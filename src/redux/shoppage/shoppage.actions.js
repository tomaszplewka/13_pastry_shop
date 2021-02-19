import ShopPageActionTypes from './shoppage.types';

export const updateCategories = categories => ({
    type: ShopPageActionTypes.UPDATE_CATEGORIES,
    payload: categories
});