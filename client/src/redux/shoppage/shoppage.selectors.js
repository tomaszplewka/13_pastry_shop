import { createSelector } from 'reselect';

const selectShopData = state => state.shopData;

export const selectShopDataItems = createSelector(
   [selectShopData],
   shopData => shopData.data 
);

export const selectShopDataForPreview = createSelector(
    [selectShopDataItems],
    data => data ? Object.keys(data).map(key => data[key]) : []
);

export const selectCategory = categoryId => createSelector(
    [selectShopDataItems],
    data => data ? data[categoryId] : []
);

export const selectIsDataFetched = createSelector(
    [selectShopData],
    shopData => shopData.isFetching
);

export const selectIsDataLoaded = createSelector(
    [selectShopData],
    shopData => !!shopData.data
);