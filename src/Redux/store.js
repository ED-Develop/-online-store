import {combineReducers, createStore} from 'redux';
import productsReducer from './products-reducer';
import cartReducer from "./cart-reducer";

const reducers = combineReducers({
    products: productsReducer,
    cart: cartReducer
});
const store = createStore(reducers);

export default store;
