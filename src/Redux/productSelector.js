import {createSelector} from "reselect";

export const getSelectedCategory = (state) => {
    return state.products.selectedCategory;
};
export const getProductItemsSelector = (state) => {
    return state.products.productItems;
};
export const getShowFavorite = (state) => {
    return state.products.showFavorite;
};


export const getProductItems = createSelector(getSelectedCategory, getProductItemsSelector, getShowFavorite,
    (selectedCategory, products, showFavorite) => {
        if (showFavorite && selectedCategory) {
            return products.filter((p) => p.isFavorite && p.category == selectedCategory);
        }
        if (selectedCategory) {
            return products.filter((p) => p.category == selectedCategory);
        }
        if (showFavorite) {
            return products.filter((p) => p.isFavorite);
        }
        return products;
    });