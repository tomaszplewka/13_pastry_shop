import { createSelector } from 'reselect';

const selectCategories = state => state.itemCategory;

export const selectItemCategory = createSelector(
    [selectCategories],
    itemCategory => itemCategory.itemCategories
);