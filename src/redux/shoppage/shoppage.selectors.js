import { createSelector } from 'reselect';

const selectShopData = state => state.shopData;

export const selectShopDataItems = createSelector(
   [selectShopData],
   shopData => shopData.data 
);