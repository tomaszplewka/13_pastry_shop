import { createSelector } from 'reselect';

const selectShopData = state => state.shopData;

export const selectShopDataItems = createSelector(
   [selectShopData],
   shopData => shopData.data 
);

export const selectShopDataForPreview = createSelector(
    [selectShopDataItems],
    data => Object.keys(data).map(key => data[key])
);

export const selectCategory = categoryId => createSelector(
    [selectShopDataItems],
    data => data[categoryId]
);