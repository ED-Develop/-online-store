import {createSelector} from "reselect";

export const getProductInCart = (state) => {
    return state.cart.products
};

export const getTotalPrice = createSelector(getProductInCart, (products) => {
    let sum = 0;
    products.forEach( p => {
        sum += +p.price.slice(1) * +p.quantity;
    });
    return sum;
});